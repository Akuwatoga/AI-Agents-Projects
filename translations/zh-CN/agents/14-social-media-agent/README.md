# 社交媒体内容智能体（Social Media Content Agent）

从任何主题生成适配各平台（Twitter/X、LinkedIn、Instagram）的社交媒体内容。

**框架（Framework）**：CrewAI  
**大模型（LLM）**：GPT-4o-mini  

## 安装（Setup）

```bash
pip install -r requirements.txt
cp .env.example .env
```

## 运行（Run）

```bash
python agent.py --topic "The future of remote work"
python agent.py --topic "Product launch announcement" --brand "YourBrand" --platforms "twitter,linkedin"
```
