# 网络研究智能体（Web Research Agent）

一个 LangGraph 智能体，可搜索任何主题的网络内容并综合生成结构化研究报告。

**框架（Framework）**：LangGraph  
**大模型（LLM）**：GPT-4o-mini（OpenAI）  
**搜索（Search）**：Tavily

## 功能（What it does）

1. 接收研究查询
2. 使用 Tavily 搜索网络（5 条结果）
3. 将发现综合为结构化报告（摘要、关键发现、来源）

## 安装（Setup）

```bash
pip install -r requirements.txt
cp .env.example .env
# 编辑 .env 并添加你的 API 密钥
```

获取免费 API 密钥：
- OpenAI：https://platform.openai.com/api-keys
- Tavily：https://app.tavily.com （免费套餐可用）

## 运行（Run）

```bash
# 默认查询
python agent.py

# 自定义查询
python agent.py --query "latest advances in quantum computing"
```

## 示例输出

```
🔍 Researching: latest advances in AI agents 2024

============================================================
📄 RESEARCH REPORT
============================================================
## Summary
AI agents have seen significant advances in 2024, with major improvements
in reasoning, tool use, and multi-agent collaboration...

## Key Findings
- LangGraph and CrewAI have emerged as leading frameworks for production agents
- OpenAI's GPT-4o enables real-time multimodal agent interactions
- ...

## Sources
- https://...
```

## 架构（Architecture）

```
用户查询 → [搜索节点] → Tavily 网络搜索 → [综合节点] → GPT-4o → 报告
```
