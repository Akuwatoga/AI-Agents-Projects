# 旅行计划智能体（Travel Planner Agent）

三智能体 CrewAI 系统，创建个性化旅行行程，包含目的地研究、逐日计划和预算明细。

**框架（Framework）**：CrewAI  
**大模型（LLM）**：GPT-4o-mini  

## 安装（Setup）

```bash
pip install -r requirements.txt
cp .env.example .env
```

## 运行（Run）

```bash
python agent.py --destination "Tokyo, Japan" --days 7 --budget 3000
python agent.py --destination "Paris, France" --days 5 --budget 5000 --interests "art, wine, architecture"
```
