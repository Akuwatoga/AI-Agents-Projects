# Workplace Skills

A scenario-driven open-source skill pack that helps students and fresh graduates move from campus mode to reliable workplace mode.

The project is inspired by the structure of `garrytan/gstack`: instead of one long generic prompt, it provides a set of opinionated skills. Each skill maps to a concrete workplace scenario and gives an AI assistant a repeatable operating procedure.

> 目标用户：应届生、实习生、刚转岗的人、刚加入新公司的个人贡献者。
>
> 核心目标：更快理解组织、更稳地接任务、更清楚地汇报、更主动地推进工作。

## Core idea

New employees often fail not because they lack effort, but because they lack a workplace operating system.

This project turns common workplace methods into reusable AI skills:

- First 90 Days: accelerate learning, build credibility, create early wins.
- Manager Tools new-job thinking: understand the manager, role expectations, and work relationships.
- RACI: clarify ownership, decision rights, consultation, and communication.
- Stakeholder mapping: identify who matters, what they care about, and how to communicate with them.
- Status reporting: make progress, risks, decisions, and asks visible.
- Obsidian-style task/data journaling: preserve daily notes, meeting notes, weekly reviews, task boards, and decision logs.

## Skill catalog

| Scenario | Use this skill | Outcome |
|---|---|---|
| I just joined a company and feel lost | `student-to-pro-onboarding` | A first-week learning map and action plan |
| My manager gave me a vague direction | `ambiguity-to-plan` | A concrete plan with milestones and deliverables |
| I need a 30/60/90-day plan | `first-90-days-plan` | A staged onboarding and credibility-building plan |
| I need to report progress to my manager | `boss-update` | A concise result-oriented update |
| I finished a meeting and need next actions | `meeting-to-actions` | Decisions, owners, deadlines, risks, follow-up message |
| I do not know who owns what | `raci-clarifier` | A RACI matrix and ownership questions |
| I need to understand people around a project | `stakeholder-map` | Influence/interest map and communication plan |
| I need a weekly project update | `status-report` | Green/yellow/red status, progress, risks, asks |
| I want to run myself like a reliable operator | `task-system` | Daily log, task board, decision log, review loop |
| I need a weekly self-review | `weekly-retro` | Achievements, misses, lessons, next-week priorities |
| I am working with data, operations, or AI workflow | `business-data-map` | Business process, data sources, automation opportunities |
| I need to sound mature in workplace communication | `mature-response` | Clear, calm, reliable workplace wording |

See [`docs/skills.md`](docs/skills.md) for detailed routing.

## Installation

### Option A: use as a reference prompt library

Clone or copy this folder, then paste the relevant `SKILL.md` into ChatGPT, Claude, Cursor, or any AI assistant.

```bash
git clone https://github.com/Akuwatoga/AI-Agents-Projects.git
cd AI-Agents-Projects/workplace-skills
```

### Option B: install as Claude Code skills

Copy the folder into Claude skills:

```bash
mkdir -p ~/.claude/skills
cp -R workplace-skills ~/.claude/skills/workplace-skills
```

Then ask Claude Code naturally:

```text
Use the boss-update skill to turn these notes into a concise update for my manager.
```

### Option C: use with Obsidian

Copy `templates/` into an Obsidian vault. Use the templates for daily notes, meetings, weekly reports, stakeholder maps, and RACI tables.

## Recommended workflow for a new graduate

### Day 0: before joining

Run `first-90-days-plan` using the job description and company information.

### Week 1: learn the map

Run `student-to-pro-onboarding` every day with your notes.

Deliverables:

- role expectation map
- stakeholder map
- system/data/process map
- question backlog
- first small win candidate

### Week 2-4: create visible value

Run `ambiguity-to-plan`, `business-data-map`, and `boss-update`.

Deliverables:

- problem list
- process/data/source table
- first improvement proposal
- weekly manager update

### Month 2-3: become reliable

Run `status-report`, `raci-clarifier`, `task-system`, and `weekly-retro`.

Deliverables:

- recurring status reports
- clarified ownership
- stable task board
- decision log
- reusable work templates

## Design principles

1. Scenario first, not theory first.
2. Every skill must produce a concrete artifact.
3. Do not reward vague effort; reward visible progress.
4. Ask fewer abstract questions and produce more usable drafts, tables, and plans.
5. Help the user look reliable before helping them look clever.
6. Preserve learning in reusable notes, not one-off chat history.

## Project structure

```text
workplace-skills/
  README.md
  SKILL.md
  docs/
    skills.md
    methodology.md
  skills/
    student-to-pro-onboarding/SKILL.md
    first-90-days-plan/SKILL.md
    ambiguity-to-plan/SKILL.md
    boss-update/SKILL.md
    meeting-to-actions/SKILL.md
    raci-clarifier/SKILL.md
    stakeholder-map/SKILL.md
    status-report/SKILL.md
    task-system/SKILL.md
    weekly-retro/SKILL.md
    business-data-map/SKILL.md
    mature-response/SKILL.md
  templates/
    daily-log.md
    meeting-notes.md
    weekly-report.md
    manager-update.md
    stakeholder-map.md
    raci-matrix.md
    task-board.md
    decision-log.md
    business-data-map.md
```

## License

MIT. Use it, fork it, localize it, and adapt it for specific industries.