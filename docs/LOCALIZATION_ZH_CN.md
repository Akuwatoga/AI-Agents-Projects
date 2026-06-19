# 简体中文汉化作业说明

本文档是交给低成本 LLM 的执行规范。目标是在不改变程序行为、链接、命令和代码的前提下，完成网站界面与项目说明内容的简体中文翻译。

## 1. 最终交付物

LLM 必须完成两类文件：

1. 将 `web/src/locales/en.json` 的结构完整复制到 `web/src/locales/zh-CN.json`，只翻译允许翻译的值。
2. 将下列英文文档按相同目录结构翻译到 `translations/zh-CN/`：

```text
README.en.md
agents/README.md
agents/*/README.md
agents/*/metadata.yaml
crewai_mcp_course/README.md
```

目标示例：

```text
README.en.md
-> translations/zh-CN/README.md

agents/01-web-research-agent/README.md
-> translations/zh-CN/agents/01-web-research-agent/README.md
```

不要修改英文源文件。不要翻译 `agent.py`、课程 Python 文件、依赖文件或部署文件。

## 2. 为什么必须使用覆盖目录

英文目录是后续同步上游项目的基线。运行中文站点时，程序优先读取 `translations/zh-CN`；某个中文文件或字典键缺失时自动回退英文。

因此：

- 上游更新不会直接覆盖中文。
- 新增内容会以英文显示，不会导致页面构建失败。
- `npm run i18n:check:strict` 可以在发布前发现漏译和结构破坏。
- 路由 ID 继续由英文源生成，翻译标题不会破坏旧链接。

## 3. 绝对禁止翻译的内容

以下内容必须逐字符保留：

- JSON/YAML 的键名、层级和数据类型。
- `{count}`、`{framework}`、`{number}`、`{target}` 等插值变量。
- Markdown 链接地址、图片地址和 HTML 属性。
- 代码块及其语言标记。
- 行内代码、命令、路径、文件名和参数，例如 `pip install`、`agent.py`、`--topic`。
- 环境变量，例如 `OPENAI_API_KEY`、`GITHUB_TOKEN`。
- 包名、API 名、类名、函数名和模型 ID。
- 产品与框架名称，例如 OpenAI、GPT-4o、CrewAI、LangGraph、AutoGen、Agno、LlamaIndex、FastMCP、RAG。
- Markdown 表格的列数、行数、行序和链接顺序。

不要增删事实，不要补充营销用语，不要改写许可证含义，不要把“示例项目”描述成生产级产品。

## 4. 可以翻译的内容

- 页面按钮、导航、标题、说明、空状态与辅助文本。
- README 的自然语言段落、列表、标题和表格中的描述性文字。
- `metadata.yaml` 中的 `title`、`description`、`industry`、`difficulty` 和 `tags` 的自然语言值。
- 课程名称、目标和框架选择建议。

技术术语首次出现可使用“中文（英文）”，后续保持统一，例如“检索增强生成（RAG）”。不要翻译项目专有名称。

## 5. 根 README 的特殊规则

根 `README.en.md` 会被程序解析成数百个案例页面，结构必须严格保持。根 `README.md`
是 GitHub 默认展示的中文项目入口。

1. 所有表格保持原行序、列序和行数。
2. 表头翻译后必须保留英文识别词，例如：

```markdown
| 用例（Use Case） | 行业（Industry） | 描述（Description） | 代码（Code） |
```

3. 框架标题必须保留 CrewAI、AutoGen、Agno、LangGraph、LlamaIndex 等原名。
4. 所有 URL 的出现顺序必须与英文文件完全一致。
5. Badge、图片和 HTML 块只翻译可见自然语言，不改标签结构。

Agent README 中以下解析用标题也必须采用“中文（英文）”形式保留英文关键词：

- `安装（Setup）` 或 `安装（Installation）`
- `运行（Run）` 或 `用法（Usage）`
- `功能（What it does）`、`特性（Features）` 或 `用例（Use cases）`

这些英文词用于提取命令和功能列表，不是面向用户的漏译。

如果某一批翻译无法保证表格结构，停止该批，不要输出“尽力修复”的文件。

## 6. 推荐分批顺序

低成本模型不要一次处理整个仓库。每一批完成后运行检查并提交独立变更。

### 批次 A：界面字典

输入：

```text
web/src/locales/en.json
```

输出：

```text
web/src/locales/zh-CN.json
```

验收重点：键完整、变量完整、数组长度不变、JSON 可解析。

### 批次 B：20 个 Agent 文档

每次只处理 2–4 个 Agent 的 `README.md` 和 `metadata.yaml`，输出到镜像路径。不要修改 Python。

### 批次 C：课程和 Agent 总索引

翻译：

```text
agents/README.md
crewai_mcp_course/README.md
```

### 批次 D：根 README

根 README 最大且包含大量表格，建议按二级标题分段翻译，最后按原顺序合并。合并后必须执行严格检查。

## 7. 可直接使用的 LLM 系统提示词

```text
你是软件本地化译者。你的唯一任务是把给定英文内容翻译成简体中文。

必须遵守：
1. 不增删事实，不总结，不解释，不输出翻译文件之外的内容。
2. 保持 JSON/YAML/Markdown 的结构、键名、层级、数组长度、表格行列和顺序。
3. 不翻译代码块、行内代码、URL、路径、命令、参数、环境变量、包名、API 名、函数名、模型 ID。
4. 保留所有 {name} 形式的变量，字符必须完全一致。
5. 保留 OpenAI、GPT-4o、CrewAI、LangGraph、AutoGen、Agno、LlamaIndex、FastMCP、RAG 等名称。
6. Markdown 表头翻译后在中文后保留原英文识别词，例如“描述（Description）”。
7. 使用自然、克制、面向中国开发者的技术中文，不使用夸张营销表达。
8. 输出 UTF-8 文本，不添加代码围栏，不添加说明。
```

每次任务的用户提示词：

```text
请按照系统规则翻译下面这个文件。
源路径：<英文源路径>
目标路径：<translations/zh-CN 下的目标路径，或 zh-CN.json>

只返回完整目标文件内容。翻译前自行检查结构，翻译后再次检查 URL、代码块、变量和表格数量。

<粘贴完整源文件>
```

## 8. 自动验收

在项目根目录执行：

```bash
cd web
npm ci
npm run i18n:check
npm run i18n:check:strict
npm run build
```

检查含义：

- `i18n:check`：允许汉化未完成，用于确认 JSON 和国际化结构可用。
- `i18n:check:strict`：要求字典和所有目标文档齐全，并检查 URL、代码围栏和表格行数未变化。
- `build`：确认翻译内容能进入生产构建。

严格检查失败时，只修复报告中的目标文件；不要修改检查脚本来绕过错误。

严格检查和人工抽检都通过后，创建完成标记：

```bash
touch translations/zh-CN/.complete
```

该标记会让 CI 自动执行严格模式。不要在翻译完成前创建它。

## 9. 人工抽检清单

自动检查通过后，人工至少抽检：

- 首页、Agent 列表、Agent 详情、案例列表、案例详情、课程页和框架页。
- 中文搜索能命中中文标题、描述和行业。
- 中英文切换后路由不变，刷新后语言选择仍保留。
- 表格链接、GitHub 跳转和图片正常。
- 命令与代码未被翻译。
- 长中文标题在桌面和手机宽度下不溢出。
- 专有名词前后一致，没有繁体字和机器翻译残句。

## 10. 完成标准

只有同时满足以下条件，汉化才可以交回主流程进行部署：

1. `npm run i18n:check:strict` 通过。
2. `npm run build` 通过。
3. Git 变更只包含 `web/src/locales/zh-CN.json` 和 `translations/zh-CN/**`，除非明确记录了必要的程序修复。
4. 人工抽检清单全部通过。
5. 已创建 `translations/zh-CN/.complete`，后续 CI 会阻止新增漏译内容发布。
6. 翻译模型提供已处理文件列表，不声称修改未处理的文件。
