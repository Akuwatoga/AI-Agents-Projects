# 多智能体辩论系统（Multi-Agent Debate System）

两个 AI 智能体从对立立场辩论任何话题，由公正的 AI 裁判宣布获胜方。

**框架（Framework）**：LangChain（多智能体）  
**大模型（LLM）**：GPT-4o-mini（辩手）+ GPT-4o（裁判）  

## 安装（Setup）

```bash
pip install -r requirements.txt
cp .env.example .env
```

## 运行（Run）

```bash
python agent.py --topic "AI will eliminate more jobs than it creates"
python agent.py --topic "Remote work is better than office work" --rounds 3
python agent.py --topic "Cryptocurrency will replace fiat currency" --rounds 2
```

## 架构（Architecture）

```
话题 → [正方智能体] ↔ [反方智能体]（N 轮）→ [裁判智能体] → 裁决
```

裁判对每一方进行评分，并提供平衡的综合结论。
