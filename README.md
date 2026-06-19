# AI 智能体项目与课程中文社区版

**简体中文** | [English](README.en.md) | [在线站点](https://agent-project.zqtechlab.com)

[![在线站点](https://img.shields.io/badge/在线站点-agent--project.zqtechlab.com-0f766e?style=for-the-badge)](https://agent-project.zqtechlab.com)
[![GitHub Stars](https://img.shields.io/github/stars/Akuwatoga/AI-Agents-Projects?style=for-the-badge&color=yellow)](https://github.com/Akuwatoga/AI-Agents-Projects/stargazers)
[![License: MIT](https://img.shields.io/badge/License-MIT-red?style=for-the-badge)](LICENSE)

本仓库是 [500-AI-Agents-Projects](https://github.com/ashishpatel26/500-AI-Agents-Projects) 的中文社区派生版本，由 ZQTechLab 持续维护。项目保留上游的 AI 智能体案例与框架资料，并在此基础上提供中文网站、中文文档、可复用的部署方案，以及后续自研的智能体案例和课程。

项目主页：[https://agent-project.zqtechlab.com](https://agent-project.zqtechlab.com)

## 当前内容

- **中文网站**：默认使用简体中文，支持中英文切换。
- **中文资料**：已翻译的文档位于 [`translations/zh-CN/`](translations/zh-CN/)。
- **可运行案例**：20 个独立智能体示例位于 [`agents/`](agents/)。
- **课程内容**：现有 CrewAI MCP 课程位于 [`crewai_mcp_course/`](crewai_mcp_course/)。
- **自研扩展**：后续新增内容统一放入 [`zqtechlab/`](zqtechlab/)，避免与上游目录发生不必要的冲突。
- **生产部署**：Docker、Nginx、Traefik 和 ZQTechLab 服务器部署配置位于 [`deploy/zqtechlab/`](deploy/zqtechlab/)。

## 快速开始

运行中文网站：

```bash
cd web
npm ci
npm run i18n:check:strict
npm run dev
```

构建生产版本：

```bash
cd web
npm ci
npm run build
```

运行某个智能体案例：

```bash
cd agents/01-web-research-agent
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
python agent.py
```

请勿提交 `.env` 或任何 API 密钥。

## 项目目录

| 目录 | 用途 | 维护来源 |
|---|---|---|
| `agents/` | 可运行的智能体案例 | 以上游为主 |
| `crewai_mcp_course/` | 上游课程 | 以上游为主 |
| `translations/zh-CN/` | 中文翻译 | 本仓库 |
| `web/` | 中英文项目导航网站 | 本仓库 |
| `zqtechlab/agents/` | 自研智能体 | 本仓库 |
| `zqtechlab/courses/` | 自研课程 | 本仓库 |
| `deploy/` | 部署与运维配置 | 本仓库 |
| `docs/` | 汉化、部署和维护文档 | 本仓库 |

## 上游同步与版本发布

本仓库使用两个 Git 远端：

```text
origin    https://github.com/Akuwatoga/AI-Agents-Projects.git
upstream  https://github.com/ashishpatel26/500-AI-Agents-Projects.git
```

稳定代码位于 `main`。功能开发使用 `feat/*`、`fix/*`、`docs/*` 等短期分支；定期同步上游时使用 `sync/upstream-YYYYMMDD`。派生版本采用 `v<版本>-zh.<修订号>` 标签，例如 `v0.1.0-zh.1`。

完整流程见 [`docs/REPOSITORY_MAINTENANCE.md`](docs/REPOSITORY_MAINTENANCE.md)。

## 汉化贡献

翻译工作必须保持代码、命令、URL、环境变量和产品名称不变，并通过结构校验：

```bash
cd web
npm run i18n:check:strict
```

LLM 翻译边界、术语和验收要求见 [`docs/LOCALIZATION_ZH_CN.md`](docs/LOCALIZATION_ZH_CN.md)。

## 许可证与商业使用

本仓库继承上游的 [MIT License](LICENSE)。MIT 通常允许使用、修改、分发和商业使用，但分发时必须保留版权及许可声明。仓库内链接到的第三方项目、模型、数据集、图片和商标可能有各自许可证，商业使用前需要逐项核验；本说明不构成法律意见。
