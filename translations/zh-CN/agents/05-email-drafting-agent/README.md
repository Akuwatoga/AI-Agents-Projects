# 邮件起草智能体（Email Drafting Agent）

一个 CrewAI 双智能体系统，用于起草专业邮件。分析师智能体提取需求，然后写作者智能体生成最终邮件。

**框架（Framework）**：CrewAI  
**大模型（LLM）**：GPT-4o-mini  

## 安装（Setup）

```bash
pip install -r requirements.txt
cp .env.example .env
```

## 运行（Run）

```bash
# 默认示例
python agent.py

# 自定义邮件
python agent.py \
  --context "Apologize for the delayed delivery of the software project" \
  --tone "apologetic but confident" \
  --recipient "the client project manager"
```

## 架构（Architecture）

```
上下文 → [分析师智能体] → 邮件简报 → [写作者智能体] → 最终邮件
```
