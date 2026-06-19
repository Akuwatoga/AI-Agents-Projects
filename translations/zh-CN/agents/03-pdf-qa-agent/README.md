# PDF 问答智能体（PDF Q&A Agent）

加载任何 PDF 并让你针对其内容提问。支持单问题和交互式聊天两种模式。

**框架（Framework）**：LlamaIndex  
**大模型（LLM）**：GPT-4o-mini  

## 安装（Setup）

```bash
pip install -r requirements.txt
cp .env.example .env
```

## 运行（Run）

```bash
# 交互式问答（推荐）
python agent.py --pdf your_document.pdf

# 单个问题
python agent.py --pdf research_paper.pdf --question "What methodology was used?"
```

## 用例（Use cases）

- 研究论文分析
- 合同审查
- 财务报告问答
- 技术文档对话
