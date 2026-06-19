# 500+ AI 智能体项目与用例（500+ AI Agent Projects & Use Cases）

[English](../../README.md) | **简体中文** | [在线站点](https://agent-project.zqtechlab.com)

> 本仓库是由 ZQTechLab 维护的
> [ashishpatel26/500-AI-Agents-Projects](https://github.com/ashishpatel26/500-AI-Agents-Projects)
> 派生版本。项目持续跟踪上游，同时增加中文本地化、独立部署，以及位于
> [`zqtechlab/`](../../zqtechlab/) 的自研智能体课程。同步和发布规则见
> [维护规范](../../docs/REPOSITORY_MAINTENANCE.md)。

<div align="center">

[![GitHub Stars](https://img.shields.io/github/stars/ashishpatel26/500-AI-Agents-Projects?style=for-the-badge&color=yellow)](https://github.com/ashishpatel26/500-AI-Agents-Projects/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/ashishpatel26/500-AI-Agents-Projects?style=for-the-badge&color=blue)](https://github.com/ashishpatel26/500-AI-Agents-Projects/network/members)
[![Contributors](https://img.shields.io/github/contributors/ashishpatel26/500-AI-Agents-Projects?style=for-the-badge&color=green)](https://github.com/ashishpatel26/500-AI-Agents-Projects/graphs/contributors)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge)](CONTRIBUTION.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-red?style=for-the-badge)](LICENSE)
[![Last Commit](https://img.shields.io/github/last-commit/ashishpatel26/500-AI-Agents-Projects?style=for-the-badge)](https://github.com/ashishpatel26/500-AI-Agents-Projects/commits/main)

**最全面的 AI 智能体项目、用例和可运行实现合集。**

[🚀 快速开始](#-quick-start) • [🗺️ 浏览智能体](#-browse-by-framework) • [🏭 按行业浏览](#-industry-use-cases) • [🤝 贡献](#-contributing) • [📊 框架对比](#-framework-comparison)

</div>

---

![AI 智能体用例](images/AIAgentUseCase.jpg)

## 这是什么？（What is this?）

一个精心策划的 **500+ AI 智能体项目**合集——生产级示例、教程和可运行代码，涵盖所有主流框架（LangGraph、CrewAI、AutoGen、Agno）和行业（医疗、金融、教育、网络安全等）。

**适用人群：**
- 🧑‍💻 **开发者**——构建你的第一个或下一个 AI 智能体
- 🔬 **研究人员**——调研智能体领域现状
- 🏢 **团队**——评估框架以用于生产环境
- 🎓 **学生**——通过真实示例学习智能体架构

---

## ⚡ 快速开始（Quick Start）

选择一个框架，在 5 分钟内运行一个智能体：

```bash
# 克隆仓库
git clone https://github.com/ashishpatel26/500-AI-Agents-Projects.git
cd 500-AI-Agents-Projects

# 运行 agents/ 目录中的任意智能体
cd agents/01-web-research-agent
pip install -r requirements.txt
cp .env.example .env        # 添加你的 API 密钥
python agent.py
```

> `agents/` 中的所有智能体都是自包含的，拥有各自的 `requirements.txt` 和 `.env.example`。无需 monorepo 设置。

---

## 🗺️ 导航指南（Navigation Guide）

| 我想…… | 前往 |
|---|---|
| 立刻运行一个可用的智能体 | [`agents/`](agents/) |
| 按 AI 框架浏览 | [按框架分类的用例](#-browse-by-framework) |
| 按行业浏览 | [行业用例](#-industry-use-cases) |
| 了解应该使用哪个框架 | [框架对比](#-framework-comparison) |
| 添加自己的智能体 | [贡献指南](CONTRIBUTION.md) |
| 通过课程学习 | [`crewai_mcp_course/`](crewai_mcp_course/) |

---

## 📊 框架对比（Framework Comparison）

正在选择框架？以下是各框架的适用场景：

| 框架（Framework） | 最适合（Best For） | 复杂度（Complexity） | 多智能体（Multi-Agent） | 流式（Streaming） | 本地大模型（Local LLM） |
|---|---|---|---|---|---|
| **LangGraph** | 有状态工作流、RAG 流水线、复杂图结构 | ⭐⭐⭐ | ✅ | ✅ | ✅ |
| **CrewAI** | 基于角色的团队、业务自动化、快速原型开发 | ⭐⭐ | ✅ | ✅ | ✅ |
| **AutoGen** | 代码生成、研究、自愈工作流 | ⭐⭐⭐ | ✅ | ✅ | ✅ |
| **Agno** | 轻量级单智能体、工具集成、快速迭代 | ⭐ | ✅ | ✅ | ✅ |
| **LlamaIndex** | 文档问答、企业 RAG、数据流水线 | ⭐⭐ | ⚠️ | ✅ | ✅ |

**快速决策指南：**
- 刚入门 → **Agno** 或 **CrewAI**
- 需要带有状态的图 + RAG → **LangGraph**
- 构建代码编写/研究智能体 → **AutoGen**
- 企业文档流水线 → **LlamaIndex**

---

## 🏭 行业用例（Industry Use Cases）

![行业思维导图](images/industry_usecase1.png)

| 用例（Use Case） | 行业（Industry） | 描述（Description） | 代码（Code） |
|---|---|---|---|
| **HIA（健康洞察智能体）** | 医疗 | 分析医疗报告并提供健康洞察 | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/harshhh28/hia.git) |
| **AI 健康助手** | 医疗 | 使用患者数据诊断和监控疾病 | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/ahmadvh/AI-Agents-for-Medical-Diagnostics.git) |
| **自动化交易机器人** | 金融 | 通过实时市场分析自动化股票交易 | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/MingyuJ666/Stockagent.git) |
| **智能体钱包 SDK** | 金融 | 面向 AI 智能体的非托管智能合约钱包 SDK，设有强制支出限额 | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/up2itnow0822/agent-wallet-sdk) |
| **虚拟 AI 导师** | 教育 | 根据用户提供个性化教育 | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/hqanhh/EduGPT.git) |
| **24/7 AI 聊天机器人** | 客户服务 | 全天候处理客户咨询 | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/NirDiamant/GenAI_Agents/blob/main/all_agents_tutorials/customer_support_agent_langgraph.ipynb) |
| **产品推荐智能体** | 零售 | 根据用户偏好和历史记录推荐产品 | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/microsoft/RecAI) |
| **自动驾驶配送智能体** | 交通运输 | 优化路线并自主配送包裹 | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/sled-group/driVLMe) |
| **工厂流程监控智能体** | 制造业 | 监控生产线并确保质量控制 | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/yuchenxia/llm4ias) |
| **房产定价智能体** | 房地产 | 分析市场趋势以确定房产价格 | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/AleksNeStu/ai-real-estate-assistant) |
| **智能农业助手** | 农业 | 提供作物健康洞察和产量预测 | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/mohammed97ashraf/LLM_Agri_Bot) |
| **能源需求预测智能体** | 能源 | 预测能源使用以优化电网管理 | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/yecchen/MIRAI) |
| **内容个性化智能体** | 娱乐 | 根据偏好推荐个性化媒体内容 | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/crosleythomas/MirrorGPT) |
| **法律文档审查助手** | 法律 | 自动审查文档并突出关键条款 | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/firica/legalai) |
| **招聘推荐智能体** | 人力资源 | 为职位空缺推荐最匹配的候选人 | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/sentient-engineering/jobber) |
| **虚拟旅行助手** | 酒店旅游 | 根据偏好规划旅行行程 | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/nirbar1985/ai-travel-agent) |
| **AI 游戏伙伴智能体** | 游戏 | 通过实时辅助增强玩家体验 | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/onjas-buidl/LLM-agent-game) |
| **实时威胁检测智能体** | 网络安全 | 识别潜在威胁并抵御攻击 | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/NVISOsecurity/cyber-security-llm-agents) |
| **电商个人导购智能体** | 电子商务 | 帮助客户找到他们喜爱的产品 | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/Hoanganhvu123/ShoppingGPT) |
| **物流优化智能体** | 供应链 | 规划高效配送路线并管理库存 | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/microsoft/OptiGuide) |
| **Vibe 黑客智能体** | 网络安全 | 基于自主多智能体的红队测试服务 | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/PurpleAILAB/Decepticon) |
| **Citadel** | 软件开发 | 使用生命周期钩子、技能、活动管理和事后驱动架构编排 Claude Code 智能体集群 | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/SethGammon/Citadel) |
| **MediSuite-AI-Agent** | 健康保险 | 自动化医院/保险理赔工作流 | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/ahmedmansour5/MediSuite-Ai-Agent) |
| **Lina 埃及医疗聊天机器人** | 医疗 | 埃及医疗助手聊天机器人 | [![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)](https://github.com/dina-khalid/Lina-Egyptian-Medical-Chatbot) |

---

## 🔧 按框架浏览（Browse by Framework）

### CrewAI

基于角色的多智能体框架。非常适合业务自动化。

| 用例（Use Case） | 行业（Industry） | 描述（Description） | GitHub |
|---|---|---|---|
| 📧 邮件自动回复流程 | 通信 | 根据预设条件自动化回复邮件 | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/flows/email_auto_responder_flow) |
| 📝 会议助手流程 | 生产力 | 组织会议、安排日程和准备议程 | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/flows/meeting_assistant_flow) |
| 🔄 自我评估循环流程 | 人力资源 | 促进绩效评估的自我评估 | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/flows/self_evaluation_loop_flow) |
| 📈 线索评分流程 | 销售 | 评估和评分潜在线索以优先处理跟进 | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/flows/lead-score-flow) |
| 📊 营销策略生成器 | 市场营销 | 通过分析市场趋势制定营销策略 | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/crews/marketing_strategy) |
| 📝 职位发布生成器 | 招聘 | 通过分析职位要求创建职位发布 | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/crews/job-posting) |
| 🔄 招聘工作流 | 招聘 | 通过自动化招聘任务简化招聘流程 | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/crews/recruitment) |
| 🔍 简历与职位匹配 | 招聘 | 将候选人资料匹配到合适的职位 | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/crews/match_profile_to_positions) |
| 📸 Instagram 帖子生成器 | 社交媒体 | 自动生成和安排 Instagram 帖子 | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/crews/instagram_post) |
| 🌐 着陆页生成器 | 网页开发 | 自动化网站着陆页的创建 | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/crews/landing_page_generator) |
| 🎮 游戏构建团队 | 游戏开发 | 通过自动化创作过程辅助游戏开发 | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/crews/game-builder-crew) |
| 💹 股票分析工具 | 金融 | 提供分析股票市场数据的工具 | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/crews/stock_analysis) |
| 🗺️ 旅行规划器 | 旅行 | 协助规划行程 | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/crews/trip_planner) |
| 🎁 惊喜旅行规划器 | 旅行 | 根据用户偏好规划惊喜旅行 | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/crews/surprise_trip) |
| 📚 使用流程写一本书 | 创意写作 | 通过结构化写作工作流辅助作者 | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/flows/write_a_book_with_flows) |
| 🎬 剧本写作者 | 创意写作 | 借助模板和指导辅助编写剧本 | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/crews/screenplay_writer) |
| ✅ Markdown 验证器 | 文档 | 验证 Markdown 文件的格式是否正确 | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/crews/markdown_validator) |
| 🧠 Meta Quest 知识 | 知识管理 | 管理 Meta Quest 知识以进行信息检索 | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/crews/meta_quest_knowledge) |
| 🤖 NVIDIA 模型集成 | AI 集成 | 将 NVIDIA AI 模型集成到工作流中 | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/integrations/nvidia_models) |
| 🗂️ 会议准备 | 生产力 | 准备会议资料并制定议程 | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/crews/prep-for-a-meeting) |
| 🛠️ 启动模板 | 开发 | 新 CrewAI 项目的启动模板 | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/crews/starter_template) |
| 🔗 CrewAI + LangGraph 集成 | AI 集成 | CrewAI 与 LangGraph 之间的集成 | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/crewAIInc/crewAI-examples/tree/main/integrations/CrewAI-LangGraph) |

---

### AutoGen

微软的代码生成、执行和多智能体研究框架。

**代码生成、执行和调试**

| 用例（Use Case） | 行业（Industry） | 描述（Description） | Notebook |
|---|---|---|---|
| 🤖 通过代码生成、执行和调试自动化任务解决 | 软件开发 | 演示通过生成、执行和调试代码来自动化任务解决 | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://microsoft.github.io/autogen/0.2/docs/notebooks/agentchat_auto_feedback_from_code_execution) |
| 🧑‍💻 使用检索增强智能体的代码生成和问答 | 软件开发 | 使用检索增强方法生成代码并回答问题 | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://microsoft.github.io/autogen/0.2/docs/notebooks/agentchat_RetrieveChat) |
| 🧠 使用基于 Qdrant 的检索进行代码生成和问答 | 软件开发 | 利用 Qdrant 增强检索增强智能体性能 | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://microsoft.github.io/autogen/0.2/docs/notebooks/agentchat_RetrieveChat_qdrant) |

**多智能体协作**

| 用例（Use Case） | 行业（Industry） | 描述（Description） | Notebook |
|---|---|---|---|
| 🤝 群聊（3 名成员，1 名管理者） | 协作 | 通过多智能体协作演示群组任务解决 | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://microsoft.github.io/autogen/0.2/docs/notebooks/agentchat_groupchat) |
| 📊 通过群聊进行数据可视化 | 数据分析 | 使用多智能体协作创建数据可视化 | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://microsoft.github.io/autogen/0.2/docs/notebooks/agentchat_groupchat_vis) |
| 🧩 通过群聊解决复杂任务（6 名成员） | 协作 | 以更大群体协作解决复杂任务 | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://microsoft.github.io/autogen/0.2/docs/notebooks/agentchat_groupchat_research) |
| 🧑‍💻 使用编码和规划智能体解决任务 | 规划与开发 | 结合编码和规划智能体解决任务 | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://github.com/microsoft/autogen/blob/0.2/notebook/agentchat_planning.ipynb) |
| 📐 使用图转换路径解决任务 | 协作 | 使用图中的预定义转换路径解决任务 | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://microsoft.github.io/autogen/docs/notebooks/agentchat_groupchat_finite_state_machine) |
| 🧠 SocietyOfMindAgent 内心独白 | 认知科学 | 使用群聊模拟内心独白以解决问题 | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://microsoft.github.io/autogen/0.2/docs/notebooks/agentchat_society_of_mind) |
| 🔧 自定义发言者选择的群聊 | 协作 | 实现自定义发言者选择函数 | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://microsoft.github.io/autogen/0.2/docs/notebooks/agentchat_groupchat_customized) |

**顺序多智能体聊天**

| 用例（Use Case） | 行业（Industry） | 描述（Description） | Notebook |
|---|---|---|---|
| 🔄 顺序任务解决（单个发起智能体） | 工作流自动化 | 使用单个发起智能体自动化顺序任务解决 | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://microsoft.github.io/autogen/0.2/docs/notebooks/agentchat_multi_task_chats) |
| ⏳ 异步顺序任务解决 | 工作流自动化 | 处理聊天序列中的异步任务解决 | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://microsoft.github.io/autogen/0.2/docs/notebooks/agentchat_multi_task_async_chats) |
| 🤝 不同发起智能体的顺序聊天 | 工作流自动化 | 由不同智能体发起每个聊天的顺序任务解决 | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://microsoft.github.io/autogen/0.2/docs/notebooks/agentchats_sequential_chats) |

**嵌套聊天**

| 用例（Use Case） | 行业（Industry） | 描述（Description） | Notebook |
|---|---|---|---|
| 🧠 使用嵌套聊天解决复杂任务 | 问题解决 | 使用嵌套聊天解决层级复杂问题 | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://microsoft.github.io/autogen/0.2/docs/notebooks/agentchat_nestedchat) |
| 🔄 嵌套聊天序列 | 问题解决 | 演示使用嵌套聊天的顺序任务解决 | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://microsoft.github.io/autogen/0.2/docs/notebooks/agentchat_nested_sequential_chats) |
| 🏭 使用嵌套聊天的 OptiGuide 供应链 | 供应链 | 使用嵌套聊天解决供应链优化问题 | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://microsoft.github.io/autogen/0.2/docs/notebooks/agentchat_nestedchat_optiguide) |
| ♟️ 使用嵌套聊天的对话式国际象棋 | 游戏 | 使用嵌套聊天配合工具进行对话式国际象棋 | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://microsoft.github.io/autogen/0.2/docs/notebooks/agentchat_nested_chats_chess) |

**工具**

| 用例（Use Case） | 行业（Industry） | 描述（Description） | Notebook |
|---|---|---|---|
| 🌐 网络搜索：解决需要网络信息的任务 | 信息检索 | 搜索网络以收集信息完成任务 | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://github.com/microsoft/autogen/blob/0.2/notebook/agentchat_web_info.ipynb) |
| 🔧 将提供的工具作为函数使用 | 工具集成 | 演示如何将预提供工具作为可调用函数使用 | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://microsoft.github.io/autogen/0.2/docs/notebooks/agentchat_function_call_currency_calculator) |
| 📚 RAG 群聊 | 协作 | 启用带检索增强生成的群聊 | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://microsoft.github.io/autogen/0.2/docs/notebooks/agentchat_groupchat_RAG) |
| 🔊 带 Whisper 的智能体聊天 | 音频处理 | 使用 Whisper 进行转录和翻译的 AI 智能体 | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://microsoft.github.io/autogen/0.2/docs/notebooks/agentchat_video_transcript_translate_with_whisper) |
| 📊 SQL：自然语言转 SQL 查询 | 数据库管理 | 将自然语言输入转换为 SQL 查询 | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://github.com/microsoft/autogen/blob/0.2/notebook/agentchat_sql_spider.ipynb) |

**多模态智能体**

| 用例（Use Case） | 行业（Industry） | 描述（Description） | Notebook |
|---|---|---|---|
| 🎨 使用 DALLE 和 GPT-4V 的多模态智能体 | 多媒体 AI | 结合 DALLE 和 GPT-4V 进行多模态智能体通信 | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://github.com/microsoft/autogen/blob/0.2/notebook/agentchat_dalle_and_gpt4v.ipynb) |
| 🖌️ 使用 Llava 的多模态智能体 | 图像处理 | 使用 Llava 进行多模态智能体对话 | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://github.com/microsoft/autogen/blob/0.2/notebook/agentchat_lmm_llava.ipynb) |
| 🖼️ 使用 GPT-4V 的多模态智能体 | 多媒体 AI | 利用 GPT-4V 进行视觉和对话交互 | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://github.com/microsoft/autogen/blob/0.2/notebook/agentchat_lmm_gpt-4v.ipynb) |

**可观测性与评估**

| 用例（Use Case） | 行业（Industry） | 描述（Description） | Notebook |
|---|---|---|---|
| 📊 AgentEval：多智能体评估系统 | 性能评估 | 评估基于 LLM 的应用效用 | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://github.com/microsoft/autogen/blob/0.2/notebook/agenteval_cq_math.ipynb) |
| 📊 使用 AgentOps 跟踪 LLM 调用和错误 | 监控与分析 | 监控 LLM 交互、工具使用和错误 | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://github.com/microsoft/autogen/blob/0.2/notebook/agentchat_agentops.ipynb) |
| 🏗️ 使用 AgentBuilder 自动构建多智能体系统 | AI 开发 | 自动构建多智能体系统 | [![Notebook](https://img.shields.io/badge/View-Notebook-blue?logo=jupyter)](https://github.com/microsoft/autogen/blob/0.2/notebook/autobuild_basic.ipynb) |

---

### Agno

轻量级快速智能体框架。最适合单智能体工具和快速原型开发。

| 用例（Use Case） | 行业（Industry） | 描述（Description） | 代码（Code） |
|---|---|---|---|
| 🤖 支持智能体 | AI 框架支持 | Agno 框架的实时答案、解释和代码示例 | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/agno_support_agent.py) |
| 🎥 YouTube 智能体 | 媒体与内容 | 分析 YouTube 视频：摘要、时间戳、主题 | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/youtube_agent.py) |
| 📊 金融智能体（思考型） | 金融 | 实时股票洞察、分析师推荐、金融深度分析 | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/thinking_finance_agent.py) |
| 📚 学习伙伴 | 教育 | 查找资源、回答问题、创建学习计划 | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/study_partner.py) |
| 🛍️ 购物伙伴智能体 | 电子商务 | 基于亚马逊、Flipkart 偏好的产品推荐 | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/shopping_partner.py) |
| 🎓 研究学者智能体 | 教育/科研 | 高级学术搜索、出版物分析、结构化报告 | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/research_agent_exa.py) |
| 🧠 研究智能体 | 媒体与新闻 | 深度调查、纽约时报风格报告 | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/research_agent.py) |
| 🍳 食谱创建者 | 食品与烹饪 | 基于食材和偏好定制个性化食谱 | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/recipe_creator.py) |
| 🧠 金融推理智能体 | 金融 | 基于 Claude 3.5 Sonnet 的股票分析，使用雅虎财经数据 | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/reasoning_finance_agent.py) |
| 🤖 README 生成器智能体 | 软件开发 | 为 GitHub 仓库生成高质量的 README | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/readme_generator.py) |
| 🎬 电影推荐智能体 | 娱乐 | 使用 Exa 和 GPT-4o 的个性化电影推荐 | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/movie_recommedation.py) |
| 🔍 媒体趋势分析智能体 | 媒体与新闻 | 分析来自数字平台的新兴趋势和影响者 | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/media_trend_analysis_agent.py) |
| ⚖️ 法律文档分析智能体 | 法律科技 | 分析法律 PDF 并使用向量嵌入提供洞察 | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/legal_consultant.py) |
| 🤔 DeepKnowledge | 研究 | 通过深度推理迭代搜索知识库 | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/deep_knowledge.py) |
| 📚 书籍推荐智能体 | 出版与媒体 | 使用文学数据和读者偏好提供个性化书籍推荐 | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/book_recommendation.py) |
| 🏠 MCP Airbnb 智能体 | 酒店旅游 | 使用 MCP 和 Llama 4 搜索 Airbnb 房源 | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/airbnb_mcp.py) |
| 🤖 Agno 助手智能体 | AI 框架 | 面向 Agno 框架问答的 GPT-4o 智能体，支持混合搜索 | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/agno_assist.py) |

---

### LangGraph

面向复杂有状态智能体工作流和 RAG 流水线的状态机框架。

| 用例（Use Case） | 行业（Industry） | 描述（Description） | 代码（Code） |
|---|---|---|---|
| 🤖 聊天机器人仿真评估 | AI / 质量保证 | 模拟用户交互以评估聊天机器人性能 | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/chatbot-simulation-evaluation/agent-simulation-evaluation.ipynb) |
| 🧠 通过提示收集信息 | 研究 | 使用 LangGraph 工作流通过提示收集信息 | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/chatbots/information-gather-prompting.ipynb) |
| 🧠 代码助手（LangGraph） | 软件开发 | 带错误检查和迭代改进的弹性代码助手 | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/code_assistant/langgraph_code_assistant.ipynb) |
| 🧑‍💼 客户支持智能体 | 客户支持 | 基于图的智能体，用于处理客户咨询 | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/customer-support/customer-support.ipynb) |
| 🔁 带重试的数据提取 | 数据提取 | 用于健壮数据提取的重试机制 | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/extraction/retries.ipynb) |
| 🧠 多智能体工作流（监管者） | 工作流编排 | 监管智能体协调多个专业智能体 | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/multi_agent/agent_supervisor.ipynb) |
| 🧠 层级智能体团队 | 工作流编排 | 顶层监管委派给专业子智能体 | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/multi_agent/hierarchical_agent_teams.ipynb) |
| 🤝 多智能体协作 | 工作流编排 | 多个专业智能体协作完成复杂任务 | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/multi_agent/multi-agent-collaboration.ipynb) |
| 🧠 规划与执行智能体 | 工作流编排 | 智能体生成多步骤计划然后顺序执行 | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/plan-and-execute/plan-and-execute.ipynb) |
| 🧠 SQL 智能体 | 数据库交互 | 智能体回答关于 SQL 数据库的问题 | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/sql-agent.ipynb) |
| 🧠 反思智能体 | 工作流编排 | 智能体批判和改进自己的输出 | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/reflection/reflection.ipynb) |
| 🧠 Reflexion 智能体 | 工作流编排 | 智能体反思行动以迭代改进 | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/reflexion/reflexion.ipynb) |
| 🧠 自适应 RAG | 信息检索 | 根据查询复杂度动态调整的检索 | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/rag/langgraph_adaptive_rag.ipynb) |
| 🤖 智能体式 RAG | 智能智能体 | 智能体在生成响应前确定最佳检索策略 | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/rag/langgraph_agentic_rag.ipynb) |
| 🧠 纠正性 RAG（CRAG） | 信息检索 | 在生成前评估和改进检索到的文档 | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/rag/langgraph_crag.ipynb) |
| 🧠 Self-RAG | 信息检索 | 系统反思回复并在需要时检索额外信息 | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/rag/langgraph_self_rag.ipynb) |
| 🧠 自适应 RAG（本地） | 信息检索 | 使用本地模型的自适应 RAG，支持离线使用 | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/rag/langgraph_adaptive_rag_local.ipynb) |
| 🧠 Self-RAG（本地） | 信息检索 | 使用本地模型和数据源的 Self-RAG | [![Python](https://img.shields.io/static/v1?label=AI+Agent+Code&message=Python&color=%23244cd1)](https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/rag/langgraph_self_rag_local.ipynb) |

---

## 🤝 贡献（Contributing）

欢迎贡献！🎉 这个仓库通过社区贡献不断成长。

**贡献方式：**
1. **添加可运行的智能体**——在 `agents/` 中创建包含可运行代码的文件夹
2. **添加外部链接**——在行业或框架表格中添加一行
3. **修复断裂链接**——提交 Issue 或 PR
4. **改进文档**——修复拼写错误，添加上下文，改进示例

**如何贡献：**
1. Fork 仓库
2. 创建分支：`feat/agent-name` 或 `fix/description`
3. 按照[贡献指南](CONTRIBUTION.md)添加你的更改
4. 使用 PR 模板提交 PR

请参阅 [CONTRIBUTION.md](CONTRIBUTION.md) 了解完整要求（metadata.yaml、requirements.txt 等）。

---

## Star 历史（Star History）

<picture>
  <source
    media="(prefers-color-scheme: dark)"
    srcset="https://api.star-history.com/svg?repos=ashishpatel26/500-AI-Agents-Projects&type=date&legend=top-left"
  />
  <source
    media="(prefers-color-scheme: light)"
    srcset="https://api.star-history.com/svg?repos=ashishpatel26/500-AI-Agents-Projects&type=date&legend=top-left"
  />
  <img
    alt="Star History Chart"
    src="https://api.star-history.com/svg?repos=ashishpatel26/500-AI-Agents-Projects&type=date&legend=top-left"
  />
</picture>

---

## 📜 许可证（License）

本仓库基于 MIT 许可证发布。详情请参见 [LICENSE](LICENSE) 文件。

---

<div align="center">

**⭐ 如果你觉得这个仓库有用，请给它一个 Star——这能帮助更多人发现它！**

[报告问题](https://github.com/ashishpatel26/500-AI-Agents-Projects/issues) • [请求智能体](https://github.com/ashishpatel26/500-AI-Agents-Projects/issues/new?template=feature_request.md) • [贡献](CONTRIBUTION.md)

</div>
