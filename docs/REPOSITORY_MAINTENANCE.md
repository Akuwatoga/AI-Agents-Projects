# Repository maintenance and release policy

This fork tracks `ashishpatel26/500-AI-Agents-Projects` while maintaining Chinese localization,
ZQTechLab courses, original agents, and production deployment independently.

## Repository boundaries

Minimize edits to upstream-owned directories. Put fork-specific work in these locations:

| Content | Location |
|---|---|
| Chinese document translations | `translations/zh-CN/` |
| Website localization | `web/src/locales/` |
| ZQTechLab agents | `zqtechlab/agents/` |
| ZQTechLab courses | `zqtechlab/courses/` |
| Deployment configuration | `deploy/` |
| Maintenance documentation | `docs/` |

An upstream file may be changed when integration requires it, but the change should remain small
and be recorded in the pull request or merge commit.

## Remotes and protected branch

```bash
git remote add upstream https://github.com/ashishpatel26/500-AI-Agents-Projects.git
git remote -v
```

- `origin/main` is the stable ZQTechLab release branch.
- `upstream/main` is read-only and must never receive pushes from this fork.
- Enable branch protection for `main`: require the CI workflow and disallow force pushes.

## Branch names

| Work | Pattern | Example |
|---|---|---|
| Product feature | `feat/<topic>` | `feat/rag-observability-course` |
| Bug fix | `fix/<topic>` | `fix/locale-fallback` |
| Documentation | `docs/<topic>` | `docs/deployment-runbook` |
| Upstream synchronization | `sync/upstream-YYYYMMDD` | `sync/upstream-20260619` |
| Release preparation | `release/<version>` | `release/v0.2.0-zh.1` |

Branches are temporary. Merge them into `main` through a pull request after CI succeeds, then
delete them. Do not maintain permanent `develop` or translation branches.

## Synchronize upstream

Always synchronize on a dedicated branch and review conflicts explicitly:

```bash
git fetch origin --prune
git fetch upstream --prune --tags
git switch main
git pull --ff-only origin main
git switch -c sync/upstream-$(date +%Y%m%d)
git merge --no-ff upstream/main
```

Resolve upstream content first, then re-run localization and deployment checks. Do not overwrite
`translations/`, `zqtechlab/`, or `deploy/` with upstream content.

Required checks:

```bash
cd web
npm ci
npm run i18n:check:strict
npm run build
cd ..
docker build -t ai-agents-atlas:verify .
```

Open a pull request from the sync branch and document:

1. Upstream commit range incorporated.
2. Conflicts and their resolutions.
3. Translation work still required.
4. Deployment or compatibility changes.

## Version and tags

Use SemVer for the ZQTechLab product version and append a Chinese-fork revision:

```text
vMAJOR.MINOR.PATCH-zh.REVISION
```

- `MAJOR`: incompatible site, course, or deployment changes.
- `MINOR`: new agents, course modules, or significant upstream content.
- `PATCH`: fixes and maintenance changes.
- `zh.REVISION`: revision of this fork for the same product version.

Examples: `v0.1.0-zh.1`, `v0.1.0-zh.2`, `v0.2.0-zh.1`.

Create annotated tags only from a verified `main` commit:

```bash
git switch main
git pull --ff-only origin main
git tag -a v0.2.0-zh.1 -m "Release v0.2.0-zh.1"
git push origin main
git push origin v0.2.0-zh.1
```

Each release must update `CHANGELOG.md`. Production deployments should record the exact Git tag
or commit SHA in the deployment report.

## Content policy

Every original agent or course should include:

- a README with objectives, prerequisites, setup, cost notes, and expected output;
- `.env.example` without credentials;
- pinned or constrained dependencies;
- a license/source note for third-party assets and datasets;
- a minimal reproducible test or verification command;
- Chinese content first, with English terminology retained where it improves precision.

