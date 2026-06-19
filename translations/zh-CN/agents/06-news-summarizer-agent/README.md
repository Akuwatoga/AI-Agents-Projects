# 新闻摘要智能体（News Summarizer Agent）

获取任何主题的新闻文章，生成包含关键主题和洞察的结构化简报。

**框架（Framework）**：LangChain  
**大模型（LLM）**：GPT-4o-mini  
**数据（Data）**：NewsAPI（可选——无密钥时使用模拟数据运行）

## 安装（Setup）

```bash
pip install -r requirements.txt
cp .env.example .env
```

## 运行（Run）

```bash
python agent.py --topic "artificial intelligence"
python agent.py --topic "climate change" --count 10
```

无需 NewsAPI 密钥，使用示例数据即可运行。如需获取真实新闻，请前往 newsapi.org 获取免费密钥。
