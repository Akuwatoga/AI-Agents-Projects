# 求职申请智能体（Job Application Agent）

CrewAI 智能体，生成完整的求职申请材料：求职信、量身定制的简历要点、面试问题和薪资范围。

**框架（Framework）**：CrewAI  
**大模型（LLM）**：GPT-4o-mini  

## 安装（Setup）

```bash
pip install -r requirements.txt
cp .env.example .env
```

## 运行（Run）

```bash
# 使用内置示例
python agent.py

# 你自己的职位 + 个人信息
python agent.py \
  --job-desc "$(cat job_posting.txt)" \
  --candidate "$(cat my_profile.txt)"
```

## 输出包括

- 定制的求职信（250-300 字）
- 需要突出的 5 个简历要点
- 10 个带有回答框架的面试问题
- 薪资谈判范围
