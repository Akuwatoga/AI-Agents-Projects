import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Boxes,
  CheckCircle2,
  Code2,
  Copy,
  ExternalLink,
  FileText,
  Filter,
  GitBranch,
  Github,
  GraduationCap,
  Layers3,
  Languages,
  Network,
  Play,
  Search,
  Terminal,
  Workflow,
  Zap,
} from "lucide-react";
import { catalog, slugify, stripMarkdown } from "./content.js";
import { currentLocale, setLocale, t } from "./i18n.js";

const routeLabels = [
  { path: "/", label: t("nav.atlas") },
  { path: "/course", label: t("nav.course") },
  { path: "/agents", label: t("nav.agents") },
  { path: "/use-cases", label: t("nav.useCases") },
  { path: "/frameworks", label: t("nav.frameworks") },
];

function useHashRoute() {
  const [route, setRoute] = useState(() => window.location.hash.slice(1) || "/");

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash.slice(1) || "/");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return route;
}

function pathFor(route) {
  return `#${route}`;
}

function normalize(value = "") {
  return value.toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();
}

function matchesQuery(item, query) {
  if (!query) return true;
  const haystack = normalize(
    [
      item.title,
      item.description,
      item.framework,
      item.industry,
      item.sourceHeading,
      item.tags?.join(" "),
    ].join(" "),
  );
  return normalize(query)
    .split(" ")
    .filter(Boolean)
    .every((part) => haystack.includes(part));
}

function getIntro(markdown = "", fallback = "") {
  const lines = markdown
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .filter((line) => !line.startsWith("#") && !line.startsWith("```"));

  return stripMarkdown(lines.find((line) => line.length > 30) || fallback).slice(0, 260);
}

function Shell({ route, children }) {
  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href={pathFor("/")}>
          <span className="brand-mark">
            <Network size={18} aria-hidden="true" />
          </span>
          <span>
            <strong>AI Agents Atlas</strong>
            <small>{t("nav.projectMap")}</small>
          </span>
        </a>

        <nav className="nav-links" aria-label={t("nav.mainAria")}>
          {routeLabels.map((item) => (
            <a
              className={
                route === item.path || (item.path !== "/" && route.startsWith(`${item.path}/`))
                  ? "active"
                  : ""
              }
              href={pathFor(item.path)}
              key={item.path}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="topbar-actions">
          <button
            className="icon-link"
            onClick={() => setLocale(currentLocale === "en" ? "zh-CN" : "en")}
            title={currentLocale === "en" ? "中文" : "English"}
            type="button"
          >
            <Languages size={18} aria-hidden="true" />
            <span>{currentLocale === "en" ? "中文" : "English"}</span>
          </button>
          <a className="icon-link" href="https://github.com/Akuwatoga/AI-Agents-Projects">
            <Github size={18} aria-hidden="true" />
            <span>{t("common.github")}</span>
          </a>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}

function StatStrip() {
  const stats = [
    { label: t("home.statsAgents"), value: catalog.agents.length, icon: Code2 },
    { label: t("home.statsUseCases"), value: catalog.useCases.length, icon: Boxes },
    { label: t("home.statsFrameworks"), value: catalog.frameworks.length, icon: Workflow },
    { label: t("home.statsLessons"), value: catalog.courseLessons.length, icon: GraduationCap },
  ];

  return (
    <section className="stat-strip" aria-label={t("home.statsAgents")}>
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <article className="stat-tile" key={stat.label}>
            <Icon size={18} aria-hidden="true" />
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        );
      })}
    </section>
  );
}

function GraphHero() {
  const nodes = [
    { label: t("home.graphCourse"), path: "/course", x: 11, y: 22, tone: "green" },
    { label: t("home.graphAgents"), path: "/agents", x: 52, y: 13, tone: "cyan" },
    { label: t("home.graphUseCases"), path: "/use-cases", x: 74, y: 48, tone: "amber" },
    { label: t("home.graphFrameworks"), path: "/frameworks", x: 24, y: 65, tone: "rose" },
    { label: t("home.graphCodePages"), path: "/agents/01-web-research-agent", x: 54, y: 78, tone: "violet" },
  ];

  return (
    <section className="hero-grid">
      <div className="hero-copy">
        <p className="eyebrow">{t("home.eyebrow")}</p>
        <h1>{t("home.title")}</h1>
        <p>{t("home.description")}</p>
        <div className="hero-actions">
          <a className="primary-action" href={pathFor("/course")}>
            <GraduationCap size={18} aria-hidden="true" />
            {t("home.startCourse")}
          </a>
          <a className="secondary-action" href={pathFor("/use-cases")}>
            <Search size={18} aria-hidden="true" />
            {t("home.browseUseCases")}
          </a>
        </div>
      </div>

      <div className="graph-stage" aria-label={t("home.graphAria")}>
        <svg className="edge-layer" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path className="graph-edge edge-one" d="M12 25 C30 8, 42 12, 52 16" />
          <path className="graph-edge edge-two" d="M54 18 C69 23, 78 33, 75 50" />
          <path className="graph-edge edge-three" d="M72 51 C61 71, 51 78, 27 67" />
          <path className="graph-edge edge-four" d="M25 65 C12 54, 8 38, 12 25" />
          <path className="graph-edge edge-five" d="M53 17 C48 39, 48 60, 54 78" />
        </svg>
        {nodes.map((node) => (
          <a
            className={`graph-node tone-${node.tone}`}
            href={pathFor(node.path)}
            key={node.label}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <span />
            {node.label}
          </a>
        ))}
        <div className="graph-console">
          <span>{t("home.agentState")}</span>
          <strong>{t("home.ready")}</strong>
          <small>{t("home.nodes", { count: catalog.agents.length + catalog.frameworks.length })}</small>
        </div>
      </div>
    </section>
  );
}

function SearchPanel({ compact = false }) {
  const [query, setQuery] = useState("");
  const agentMatches = catalog.agents.filter((agent) => matchesQuery(agent, query)).slice(0, 4);
  const useCaseMatches = catalog.useCases.filter((useCase) => matchesQuery(useCase, query)).slice(0, 6);

  return (
    <section className={compact ? "search-panel compact" : "search-panel"}>
      <label className="search-box">
        <Search size={18} aria-hidden="true" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={t("search.placeholder")}
        />
      </label>

      <div className="search-results">
        {[...agentMatches, ...useCaseMatches].map((item) => {
          const isAgent = Boolean(item.localPath);
          return (
            <a
              className="result-row"
              href={pathFor(isAgent ? `/agents/${item.slug}` : `/use-cases/${item.id}`)}
              key={`${isAgent ? "agent" : "case"}-${item.id}`}
            >
              <span className={`mini-dot ${slugify(item.framework)}`} />
              <strong>{item.title}</strong>
              <small>{isAgent ? item.localPath : item.sourceHeading}</small>
            </a>
          );
        })}
      </div>
    </section>
  );
}

function HomePage() {
  const featuredAgents = catalog.agents.slice(0, 6);
  const featuredUseCases = catalog.useCases.slice(0, 8);

  return (
    <>
      <GraphHero />
      <StatStrip />

      <section className="split-section">
        <div className="section-copy">
          <p className="eyebrow">{t("home.startHere")}</p>
          <h2>{t("home.courseTitle")}</h2>
          <p>{t("home.courseDescription")}</p>
          <a className="inline-action" href={pathFor("/course")}>
            {t("home.openCourse")} <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
        <CourseRail />
      </section>

      <section className="media-band">
        <img src={catalog.images.hero} alt={t("home.heroAlt")} />
        <div>
          <p className="eyebrow">{t("home.liveCatalog")}</p>
          <h2>{t("home.searchTitle")}</h2>
          <SearchPanel compact />
        </div>
      </section>

      <section className="content-band">
        <SectionHeader
          eyebrow={t("home.runnableCode")}
          title={t("home.localAgents")}
          action={{ label: t("home.viewAgents"), href: "/agents" }}
        />
        <div className="card-grid">
          {featuredAgents.map((agent) => (
            <AgentCard agent={agent} key={agent.id} />
          ))}
        </div>
      </section>

      <section className="content-band">
        <SectionHeader
          eyebrow={t("home.readmeUseCases")}
          title={t("home.externalProjects")}
          action={{ label: t("home.viewUseCases"), href: "/use-cases" }}
        />
        <div className="usecase-grid">
          {featuredUseCases.map((useCase) => (
            <UseCaseCard useCase={useCase} key={useCase.id} />
          ))}
        </div>
      </section>

      <FrameworkStrip />
    </>
  );
}

function SectionHeader({ eyebrow, title, action }) {
  return (
    <div className="section-header">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {action ? (
        <a className="inline-action" href={pathFor(action.href)}>
          {action.label} <ArrowRight size={16} aria-hidden="true" />
        </a>
      ) : null}
    </div>
  );
}

function CourseRail() {
  return (
    <div className="course-rail">
      {catalog.courseLessons.map((lesson) => (
        <a className="lesson-row" href={pathFor(`/course/${lesson.slug}`)} key={lesson.slug}>
          <span>{lesson.number}</span>
          <div>
            <strong>{lesson.title}</strong>
            <small>{lesson.summary}</small>
          </div>
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

function FrameworkStrip() {
  return (
    <section className="content-band">
      <SectionHeader
        eyebrow={t("home.decisionSupport")}
        title={t("home.frameworkMap")}
        action={{ label: t("home.compareFrameworks"), href: "/frameworks" }}
      />
      <div className="framework-grid">
        {catalog.frameworks.map((framework) => (
          <a
            className={`framework-card tone-${framework.accent}`}
            href={pathFor(`/frameworks/${framework.slug}`)}
            key={framework.slug}
          >
            <strong>{framework.name}</strong>
            <p>{framework.bestFor}</p>
            <span>{framework.decision}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function AgentCard({ agent }) {
  return (
    <a className="agent-card" href={pathFor(`/agents/${agent.slug}`)}>
      <div className="card-topline">
        <span className={`framework-pill ${slugify(agent.framework)}`}>{agent.framework}</span>
        <small>{agent.difficulty}</small>
      </div>
      <h3>{agent.title}</h3>
      <p>{agent.description}</p>
      <div className="tag-list">
        {[agent.industry, agent.llm, ...agent.tags].filter(Boolean).slice(0, 4).map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </a>
  );
}

function UseCaseCard({ useCase }) {
  return (
    <article className="usecase-card">
      <div className="card-topline">
        <span className={`framework-pill ${slugify(useCase.framework)}`}>{useCase.framework}</span>
        <small>{useCase.resourceType}</small>
      </div>
      <h3>{useCase.title}</h3>
      <p>{useCase.description}</p>
      <div className="card-actions">
        <a href={pathFor(`/use-cases/${useCase.id}`)}>
          <FileText size={15} aria-hidden="true" />
          {t("common.detail")}
        </a>
        {useCase.url ? (
          <a href={pathFor(`/go/${useCase.id}`)}>
            <ExternalLink size={15} aria-hidden="true" />
            {t("common.redirect")}
          </a>
        ) : null}
      </div>
    </article>
  );
}

function CoursePage() {
  return (
    <>
      <PageHero
        eyebrow={t("course.eyebrow")}
        title={t("course.title")}
        description={getIntro(catalog.courseReadme, t("course.fallbackDescription"))}
        icon={GraduationCap}
      />
      <section className="split-section">
        <div className="section-copy">
          <h2>{t("course.learningPath")}</h2>
          <p>{t("course.learningDescription")}</p>
          <div className="command-stack">
            <CodeBlock
              code={[
                "cd crewai_mcp_course/lesson_01",
                "pip install -r requirements.txt",
                "python agent.py",
              ].join("\n")}
              compact
            />
          </div>
        </div>
        <CourseRail />
      </section>
      <section className="content-band">
        <SectionHeader eyebrow={t("course.lessons")} title={t("course.separatePages")} />
        <div className="lesson-grid">
          {catalog.courseLessons.map((lesson) => (
            <a className="lesson-card" href={pathFor(`/course/${lesson.slug}`)} key={lesson.slug}>
              <span>{lesson.number}</span>
              <h3>{lesson.title}</h3>
              <p>{lesson.summary}</p>
              <ul>
                {lesson.objectives.slice(0, 3).map((objective) => (
                  <li key={objective}>
                    <CheckCircle2 size={15} aria-hidden="true" />
                    {objective}
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

function LessonPage({ lesson }) {
  const [selectedFile, setSelectedFile] = useState(lesson.files[0]?.label || "");
  const file = lesson.files.find((item) => item.label === selectedFile) || lesson.files[0];

  return (
    <>
      <PageHero
        eyebrow={t("course.lesson", { number: lesson.number })}
        title={lesson.title}
        description={lesson.summary}
        icon={BookOpen}
      />
      <section className="detail-layout">
        <aside className="detail-aside">
          <h2>{t("course.objectives")}</h2>
          <ul className="check-list">
            {lesson.objectives.map((objective) => (
              <li key={objective}>
                <CheckCircle2 size={16} aria-hidden="true" />
                {objective}
              </li>
            ))}
          </ul>
          <h2>{t("course.run")}</h2>
          <CodeBlock code={lesson.runCommands.join("\n")} compact />
        </aside>
        <article className="detail-main">
          <FileTabs files={lesson.files} selected={selectedFile} onSelect={setSelectedFile} />
          <CodeBlock code={file?.content || t("common.fileNotFound")} />
          <CodeExplanation code={file?.content || ""} context="lesson" />
        </article>
      </section>
    </>
  );
}

function AgentsPage() {
  const [query, setQuery] = useState("");
  const [framework, setFramework] = useState("all");
  const frameworks = ["all", ...new Set(catalog.agents.map((agent) => slugify(agent.framework)))];
  const agents = catalog.agents.filter(
    (agent) =>
      matchesQuery(agent, query) &&
      (framework === "all" || slugify(agent.framework) === framework),
  );

  return (
    <>
      <PageHero
        eyebrow={t("agents.eyebrow")}
        title={t("agents.title")}
        description={t("agents.description")}
        icon={Code2}
      />
      <CatalogToolbar query={query} onQuery={setQuery} filters={frameworks} filter={framework} onFilter={setFramework} />
      <section className="content-band">
        <div className="card-grid">
          {agents.map((agent) => (
            <AgentCard agent={agent} key={agent.id} />
          ))}
        </div>
      </section>
    </>
  );
}

function AgentPage({ agent }) {
  const [selectedFile, setSelectedFile] = useState("agent.py");
  const files = [
    { label: "agent.py", path: `${agent.localPath}/agent.py`, content: agent.code },
    { label: "README.md", path: `${agent.localPath}/README.md`, content: agent.readme },
    { label: "requirements.txt", path: `${agent.localPath}/requirements.txt`, content: agent.requirementsText },
    { label: "metadata.yaml", path: `${agent.localPath}/metadata.yaml`, content: agent.metadataText },
  ];
  const selected = files.find((file) => file.label === selectedFile) || files[0];
  const related = catalog.agents
    .filter((item) => item.slug !== agent.slug && item.framework === agent.framework)
    .slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={t("agents.agentEyebrow", { framework: agent.framework })}
        title={agent.title}
        description={agent.description}
        icon={GitBranch}
      />
      <section className="detail-layout">
        <aside className="detail-aside">
          <MetadataPanel agent={agent} />
          <h2>{t("agents.runFiveMinutes")}</h2>
          <CodeBlock
            code={
              (agent.runCommands[0] || agent.setupCommands[0]) ??
              [`cd ${agent.localPath}`, "pip install -r requirements.txt", "python agent.py"].join("\n")
            }
            compact
          />
          <h2>{t("agents.architecture")}</h2>
          <FlowTrace agent={agent} />
        </aside>
        <article className="detail-main">
          <section className="explain-panel">
            <h2>{t("agents.howItWorks")}</h2>
            <p>{getIntro(agent.readme, agent.description)}</p>
            <ul className="check-list">
              {(agent.features.length ? agent.features : defaultAgentSteps(agent)).map((feature) => (
                <li key={feature}>
                  <CheckCircle2 size={16} aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>
          <FileTabs files={files} selected={selectedFile} onSelect={setSelectedFile} />
          <CodeBlock code={selected.content || t("common.fileNotFound")} />
          <CodeExplanation code={selected.content || ""} context={selected.label} agent={agent} />
          {related.length ? (
            <section className="related-band">
              <h2>{t("agents.related", { framework: agent.framework })}</h2>
              <div className="mini-card-grid">
                {related.map((item) => (
                  <AgentCard agent={item} key={item.id} />
                ))}
              </div>
            </section>
          ) : null}
        </article>
      </section>
    </>
  );
}

function defaultAgentSteps(agent) {
  return [
    t("agents.defaultLoad", { llm: agent.llm }),
    t("agents.defaultWorkflow", { framework: agent.framework }),
    t("agents.defaultInput"),
    t("agents.defaultTools"),
    t("agents.defaultResult"),
  ];
}

function MetadataPanel({ agent }) {
  const rows = [
    [t("agents.path"), agent.localPath],
    [t("agents.framework"), agent.framework],
    [t("agents.difficulty"), agent.difficulty],
    [t("agents.industry"), agent.industry],
    [t("agents.model"), agent.llm],
    [t("agents.language"), agent.language],
  ];

  return (
    <section className="metadata-panel">
      <h2>{t("agents.metadata")}</h2>
      {rows.map(([label, value]) => (
        <div className="meta-row" key={label}>
          <span>{label}</span>
          <strong>{value}</strong>
        </div>
      ))}
    </section>
  );
}

function FlowTrace({ agent }) {
  const steps =
    agent.framework === "Langgraph" || agent.framework === "LangGraph"
      ? ["flowInput", "flowState", "flowNode", "flowTool", "flowResponse"]
      : agent.framework === "Crewai" || agent.framework === "CrewAI"
        ? ["flowGoal", "flowAgent", "flowTask", "flowCrew", "flowOutput"]
        : ["flowInput", "flowPlanner", "flowTool", "flowModel", "flowOutput"];

  return (
    <div className="flow-trace">
      {steps.map((step, index) => (
        <div className="flow-step" key={step}>
          <span>{index + 1}</span>
          <strong>{t(`agents.${step}`)}</strong>
        </div>
      ))}
    </div>
  );
}

function UseCasesPage() {
  const [query, setQuery] = useState("");
  const [framework, setFramework] = useState("all");
  const frameworks = ["all", ...new Set(catalog.useCases.map((item) => slugify(item.framework)))];
  const useCases = catalog.useCases.filter(
    (item) =>
      matchesQuery(item, query) &&
      (framework === "all" || slugify(item.framework) === framework),
  );

  return (
    <>
      <PageHero
        eyebrow={t("useCases.eyebrow")}
        title={t("useCases.title")}
        description={t("useCases.description")}
        icon={Boxes}
      />
      <CatalogToolbar query={query} onQuery={setQuery} filters={frameworks} filter={framework} onFilter={setFramework} />
      <section className="content-band">
        <div className="catalog-count">{t("useCases.matching", { count: useCases.length })}</div>
        <div className="usecase-grid">
          {useCases.map((useCase) => (
            <UseCaseCard useCase={useCase} key={useCase.id} />
          ))}
        </div>
      </section>
    </>
  );
}

function UseCasePage({ useCase }) {
  const relatedAgents = catalog.agents
    .filter(
      (agent) =>
        slugify(agent.framework) === slugify(useCase.framework) ||
        slugify(agent.industry) === slugify(useCase.industry),
    )
    .slice(0, 4);
  const relatedCases = catalog.useCases
    .filter((item) => item.id !== useCase.id && item.framework === useCase.framework)
    .slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow={useCase.sourceHeading}
        title={useCase.title}
        description={useCase.description}
        icon={ExternalLink}
      />
      <section className="detail-layout">
        <aside className="detail-aside">
          <section className="metadata-panel">
            <h2>{t("useCases.metadata")}</h2>
            <div className="meta-row">
              <span>{t("useCases.framework")}</span>
              <strong>{useCase.framework}</strong>
            </div>
            <div className="meta-row">
              <span>{t("useCases.industry")}</span>
              <strong>{useCase.industry}</strong>
            </div>
            <div className="meta-row">
              <span>{t("useCases.source")}</span>
              <strong>{useCase.sourceHeading}</strong>
            </div>
            <div className="meta-row">
              <span>{t("useCases.resource")}</span>
              <strong>{useCase.resourceType}</strong>
            </div>
          </section>
          {useCase.url ? (
            <a className="primary-action full-width" href={pathFor(`/go/${useCase.id}`)}>
              <ExternalLink size={18} aria-hidden="true" />
              {t("useCases.openRedirect")}
            </a>
          ) : null}
        </aside>
        <article className="detail-main">
          <section className="explain-panel">
            <h2>{t("useCases.whatThisAdds")}</h2>
            <p>{t("useCases.whatThisAddsDescription")}</p>
            <div className="source-block">
              <strong>{useCase.title}</strong>
              <span>{useCase.description}</span>
              {useCase.url ? <code>{useCase.url}</code> : null}
            </div>
          </section>
          {relatedAgents.length ? (
            <section className="related-band">
              <h2>{t("useCases.relatedAgents")}</h2>
              <div className="mini-card-grid">
                {relatedAgents.map((agent) => (
                  <AgentCard agent={agent} key={agent.id} />
                ))}
              </div>
            </section>
          ) : null}
          {relatedCases.length ? (
            <section className="related-band">
              <h2>{t("useCases.similar")}</h2>
              <div className="usecase-grid compact-grid">
                {relatedCases.map((item) => (
                  <UseCaseCard useCase={item} key={item.id} />
                ))}
              </div>
            </section>
          ) : null}
        </article>
      </section>
    </>
  );
}

function RedirectPage({ useCase }) {
  useEffect(() => {
    if (!useCase?.url) return undefined;
    const timer = window.setTimeout(() => {
      window.location.href = useCase.url;
    }, 900);
    return () => window.clearTimeout(timer);
  }, [useCase]);

  if (!useCase) return <NotFound />;

  return (
    <PageHero
      eyebrow={t("useCases.redirectEyebrow")}
      title={useCase.title}
      description={t("useCases.opening", { target: useCase.url || t("useCases.sourceProject") })}
      icon={ExternalLink}
      action={
        useCase.url
          ? {
              label: t("useCases.openNow"),
              href: useCase.url,
              external: true,
            }
          : null
      }
    />
  );
}

function FrameworksPage({ frameworkSlug }) {
  const selected = catalog.frameworks.find((item) => item.slug === frameworkSlug);
  const visibleFrameworks = selected ? [selected] : catalog.frameworks;

  return (
    <>
      <PageHero
        eyebrow={t("frameworks.eyebrow")}
        title={selected ? selected.name : t("frameworks.choose")}
        description={
          selected
            ? selected.decision
            : t("frameworks.description")
        }
        icon={Workflow}
      />
      <section className="content-band">
        <div className="framework-grid">
          {visibleFrameworks.map((framework) => {
            const agents = catalog.agents.filter(
              (agent) => slugify(agent.framework) === framework.slug,
            );
            const useCases = catalog.useCases.filter(
              (useCase) => slugify(useCase.framework) === framework.slug,
            );
            return (
              <article className={`framework-detail tone-${framework.accent}`} key={framework.slug}>
                <div>
                  <h2>{framework.name}</h2>
                  <p>{framework.bestFor}</p>
                  <span>{framework.decision}</span>
                </div>
                <div className="framework-stats">
                  <strong>{agents.length}</strong>
                  <span>{t("frameworks.localAgents")}</span>
                  <strong>{useCases.length}</strong>
                  <span>{t("frameworks.readmeUseCases")}</span>
                </div>
                <a className="inline-action" href={pathFor(`/frameworks/${framework.slug}`)}>
                  {t("frameworks.open")} <ArrowRight size={16} aria-hidden="true" />
                </a>
              </article>
            );
          })}
        </div>
      </section>
      {selected ? (
        <section className="content-band">
          <SectionHeader eyebrow={selected.name} title={t("frameworks.matching")} />
          <div className="card-grid">
            {catalog.agents
              .filter((agent) => slugify(agent.framework) === selected.slug)
              .slice(0, 6)
              .map((agent) => (
                <AgentCard agent={agent} key={agent.id} />
              ))}
          </div>
        </section>
      ) : null}
    </>
  );
}

function CatalogToolbar({ query, onQuery, filters, filter, onFilter }) {
  return (
    <section className="catalog-toolbar">
      <label className="search-box">
        <Search size={18} aria-hidden="true" />
        <input
          value={query}
          onChange={(event) => onQuery(event.target.value)}
          placeholder={t("common.searchCatalog")}
        />
      </label>
      <div className="filter-row" aria-label={t("common.frameworkFilter")}>
        <Filter size={17} aria-hidden="true" />
        {filters.map((item) => (
          <button
            className={filter === item ? "active" : ""}
            onClick={() => onFilter(item)}
            type="button"
            key={item}
          >
            {item === "all" ? t("common.all") : catalog.frameworks.find((fw) => fw.slug === item)?.name || item}
          </button>
        ))}
      </div>
    </section>
  );
}

function PageHero({ eyebrow, title, description, icon: Icon, action }) {
  return (
    <section className="page-hero">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
        {action ? (
          <a
            className="primary-action"
            href={action.external ? action.href : pathFor(action.href)}
            rel={action.external ? "noreferrer" : undefined}
          >
            <ExternalLink size={18} aria-hidden="true" />
            {action.label}
          </a>
        ) : null}
      </div>
      <div className="page-hero-icon" aria-hidden="true">
        <Icon size={42} />
      </div>
    </section>
  );
}

function FileTabs({ files, selected, onSelect }) {
  return (
    <div className="file-tabs" role="tablist" aria-label={t("common.files")}>
      {files.map((file) => (
        <button
          className={selected === file.label ? "active" : ""}
          key={file.label}
          onClick={() => onSelect(file.label)}
          type="button"
        >
          <FileText size={15} aria-hidden="true" />
          {file.label}
        </button>
      ))}
    </div>
  );
}

function CodeBlock({ code, compact = false }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard?.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className={compact ? "code-block compact" : "code-block"}>
      <div className="code-toolbar">
        <span>
          <Terminal size={15} aria-hidden="true" />
          {t("common.code")}
        </span>
        <button onClick={copy} type="button">
          <Copy size={14} aria-hidden="true" />
          {copied ? t("common.copied") : t("common.copy")}
        </button>
      </div>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}

function CodeExplanation({ code, context, agent }) {
  const lines = code.split(/\r?\n/).filter(Boolean);
  const imports = lines.filter((line) => /^import\s|^from\s/.test(line)).slice(0, 6);
  const functions = Array.from(code.matchAll(/^def\s+([A-Za-z_][A-Za-z0-9_]*)/gm)).map(
    (match) => match[1],
  );
  const classes = Array.from(code.matchAll(/^class\s+([A-Za-z_][A-Za-z0-9_]*)/gm)).map(
    (match) => match[1],
  );

  return (
    <section className="code-explain">
      <h2>{t("code.walkthrough")}</h2>
      <div className="walkthrough-grid">
        <WalkthroughCard
          icon={Layers3}
          title={t("code.imports")}
          items={imports.length ? imports : [t("code.noImports")]}
        />
        <WalkthroughCard
          icon={Zap}
          title={t("code.functions")}
          items={functions.length ? functions.slice(0, 8) : [t("code.noFunctions")]}
        />
        <WalkthroughCard
          icon={Network}
          title={t("code.classes")}
          items={classes.length ? classes.slice(0, 6) : [t("code.noClasses")]}
        />
        <WalkthroughCard
          icon={Play}
          title={t("code.role")}
          items={[
            context === "agent.py"
              ? t("code.entrypoint", { framework: agent?.framework || "the" })
              : t("code.reference", { context }),
            t("code.lineCount", { count: lines.length }),
          ]}
        />
      </div>
    </section>
  );
}

function WalkthroughCard({ icon: Icon, title, items }) {
  return (
    <article className="walk-card">
      <Icon size={18} aria-hidden="true" />
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function NotFound() {
  return (
    <PageHero
      eyebrow={t("notFound.eyebrow")}
      title={t("notFound.title")}
      description={t("notFound.description")}
      icon={Search}
      action={{ label: t("notFound.back"), href: "/" }}
    />
  );
}

function App() {
  const route = useHashRoute();
  const segments = useMemo(() => route.split("?")[0].split("/").filter(Boolean), [route]);

  let page;
  if (segments.length === 0) {
    page = <HomePage />;
  } else if (segments[0] === "course" && segments.length === 1) {
    page = <CoursePage />;
  } else if (segments[0] === "course") {
    const lesson = catalog.courseLessons.find((item) => item.slug === segments[1]);
    page = lesson ? <LessonPage lesson={lesson} /> : <NotFound />;
  } else if (segments[0] === "agents" && segments.length === 1) {
    page = <AgentsPage />;
  } else if (segments[0] === "agents") {
    const agent = catalog.agents.find((item) => item.slug === segments[1]);
    page = agent ? <AgentPage agent={agent} /> : <NotFound />;
  } else if (segments[0] === "use-cases" && segments.length === 1) {
    page = <UseCasesPage />;
  } else if (segments[0] === "use-cases") {
    const useCase = catalog.useCases.find((item) => item.id === segments[1]);
    page = useCase ? <UseCasePage useCase={useCase} /> : <NotFound />;
  } else if (segments[0] === "go") {
    const useCase = catalog.useCases.find((item) => item.id === segments[1]);
    page = <RedirectPage useCase={useCase} />;
  } else if (segments[0] === "frameworks") {
    page = <FrameworksPage frameworkSlug={segments[1]} />;
  } else {
    page = <NotFound />;
  }

  return <Shell route={route}>{page}</Shell>;
}

export default App;
