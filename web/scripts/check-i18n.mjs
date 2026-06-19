import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const webRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const repoRoot = path.resolve(webRoot, "..");
const completionMarker = path.join(repoRoot, "translations/zh-CN/.complete");
const strict =
  process.argv.includes("--strict") ||
  (process.argv.includes("--ci") && fs.existsSync(completionMarker));
const sourceLocale = JSON.parse(fs.readFileSync(path.join(webRoot, "src/locales/en.json"), "utf8"));
const targetLocale = JSON.parse(fs.readFileSync(path.join(webRoot, "src/locales/zh-CN.json"), "utf8"));
const errors = [];

function flatten(value, prefix = "", output = {}) {
  if (Array.isArray(value) || value === null || typeof value !== "object") {
    output[prefix] = value;
    return output;
  }
  for (const [key, child] of Object.entries(value)) {
    flatten(child, prefix ? `${prefix}.${key}` : key, output);
  }
  return output;
}

function urls(text) {
  return [...text.matchAll(/https?:\/\/[^\s)>]+/g)].map((match) => match[0]);
}

function fenceCount(text) {
  return (text.match(/^```/gm) || []).length;
}

function yamlEntries(text) {
  return Object.fromEntries(
    text
      .split("\n")
      .map((line) => line.match(/^([A-Za-z_][A-Za-z0-9_-]*):\s*(.*)$/))
      .filter(Boolean)
      .map((match) => [match[1], match[2]]),
  );
}

function compareMarkdown(sourcePath, targetPath) {
  if (!fs.existsSync(targetPath)) {
    errors.push(`Missing translated file: ${path.relative(repoRoot, targetPath)}`);
    return;
  }
  const source = fs.readFileSync(sourcePath, "utf8");
  const target = fs.readFileSync(targetPath, "utf8");
  if (JSON.stringify(urls(source)) !== JSON.stringify(urls(target))) {
    errors.push(`URL list changed: ${path.relative(repoRoot, targetPath)}`);
  }
  if (fenceCount(source) !== fenceCount(target)) {
    errors.push(`Code fence count changed: ${path.relative(repoRoot, targetPath)}`);
  }
  const sourceTableRows = source.split("\n").filter((line) => line.trim().startsWith("|")).length;
  const targetTableRows = target.split("\n").filter((line) => line.trim().startsWith("|")).length;
  if (sourceTableRows !== targetTableRows) {
    errors.push(`Markdown table structure changed: ${path.relative(repoRoot, targetPath)}`);
  }

  if (sourcePath.endsWith("metadata.yaml")) {
    const sourceYaml = yamlEntries(source);
    const targetYaml = yamlEntries(target);
    if (JSON.stringify(Object.keys(sourceYaml)) !== JSON.stringify(Object.keys(targetYaml))) {
      errors.push(`YAML keys changed: ${path.relative(repoRoot, targetPath)}`);
    }
    for (const key of ["framework", "llm", "language", "entrypoint", "requirements"]) {
      if (sourceYaml[key] !== targetYaml[key]) {
        errors.push(`Protected YAML value changed (${key}): ${path.relative(repoRoot, targetPath)}`);
      }
    }
  }
}

const sourceLeaves = flatten(sourceLocale);
const targetLeaves = flatten(targetLocale);
const missingKeys = Object.keys(sourceLeaves).filter(
  (key) => !(key in targetLeaves) || targetLeaves[key] === "" || targetLeaves[key] == null,
);

if (strict) {
  errors.push(...missingKeys.map((key) => `Missing locale key: ${key}`));

  const markdownFiles = [
    "README.md",
    "agents/README.md",
    "crewai_mcp_course/README.md",
    ...fs
      .readdirSync(path.join(repoRoot, "agents"), { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .flatMap((entry) => [
        `agents/${entry.name}/README.md`,
        `agents/${entry.name}/metadata.yaml`,
      ]),
  ];

  for (const relativePath of markdownFiles) {
    compareMarkdown(
      path.join(repoRoot, relativePath),
      path.join(repoRoot, "translations/zh-CN", relativePath),
    );
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(
  strict
    ? `zh-CN localization is complete (${Object.keys(sourceLeaves).length} locale values checked).`
    : `i18n structure is valid; ${missingKeys.length} zh-CN locale values remain for translation.`,
);
