# 智能体——可运行实现（Agents — Working Implementations）

每个文件夹都是一个自包含、可运行的 AI 智能体。无需 monorepo 设置。

## 快速开始（Quick Start）

```bash
cd agents/<agent-name>
pip install -r requirements.txt
cp .env.example .env   # 填入你的 API 密钥
python agent.py
```

## 智能体索引（Agent Index）

| # | 智能体（Agent） | 框架（Framework） | 大模型（LLM） | 行业（Industry） | 难度（Difficulty） |
|---|---|---|---|---|---|
| 01 | [网络研究智能体](01-web-research-agent/) | LangGraph | GPT-4o / Claude | 通用 | ⭐⭐ |
| 02 | [代码审查智能体](02-code-review-agent/) | LangChain | GPT-4o / Claude | 软件开发 | ⭐⭐ |
| 03 | [PDF 问答智能体](03-pdf-qa-agent/) | LlamaIndex | GPT-4o | 科研 | ⭐⭐ |
| 04 | [SQL 查询智能体](04-sql-query-agent/) | LangChain | GPT-4o | 数据 | ⭐⭐ |
| 05 | [邮件起草智能体](05-email-drafting-agent/) | CrewAI | GPT-4o | 通信 | ⭐ |
| 06 | [新闻摘要智能体](06-news-summarizer-agent/) | LangChain | GPT-4o | 媒体 | ⭐ |
| 07 | [GitHub Issue 分类智能体](07-github-issue-triager/) | LangGraph | GPT-4o / Claude | DevOps | ⭐⭐ |
| 08 | [数据分析智能体](08-data-analysis-agent/) | LangChain | GPT-4o | 分析 | ⭐⭐ |
| 09 | [简历解析智能体](09-resume-parser-agent/) | LangChain | GPT-4o | 人力资源 | ⭐ |
| 10 | [会议纪要智能体](10-meeting-notes-agent/) | LangChain | GPT-4o | 生产力 | ⭐⭐ |
| 11 | [股票研究智能体](11-stock-research-agent/) | LangChain | GPT-4o | 金融 | ⭐⭐ |
| 12 | [旅行计划智能体](12-travel-planner-agent/) | CrewAI | GPT-4o | 旅行 | ⭐⭐ |
| 13 | [客户支持智能体](13-customer-support-agent/) | LangGraph | GPT-4o | 客户服务 | ⭐⭐⭐ |
| 14 | [社交媒体内容智能体](14-social-media-agent/) | CrewAI | GPT-4o | 市场营销 | ⭐ |
| 15 | [单元测试生成智能体](15-unit-test-generator/) | LangChain | GPT-4o / Claude | 软件开发 | ⭐⭐ |
| 16 | [文档写作者智能体](16-documentation-writer/) | LangChain | GPT-4o / Claude | 软件开发 | ⭐⭐ |
| 17 | [食谱推荐智能体](17-recipe-agent/) | LangChain | GPT-4o | 食品 | ⭐ |
| 18 | [求职申请智能体](18-job-application-agent/) | CrewAI | GPT-4o | 人力资源 | ⭐⭐ |
| 19 | [竞品分析智能体](19-competitive-analysis-agent/) | LangGraph | GPT-4o | 商业 | ⭐⭐⭐ |
| 20 | [多智能体辩论系统](20-multi-agent-debate/) | LangChain | GPT-4o | 科研 | ⭐⭐⭐ |

## 添加你的智能体（Adding Your Agent）

1. 创建一个文件夹：`agents/NN-your-agent-name/`
2. 包含文件：`agent.py`、`requirements.txt`、`.env.example`、`README.md`、`metadata.yaml`
3. 按照 [PR 模板](../.github/PULL_REQUEST_TEMPLATE.md) 提交 PR
