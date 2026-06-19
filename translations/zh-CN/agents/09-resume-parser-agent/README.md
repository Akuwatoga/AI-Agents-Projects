# 简历解析智能体（Resume Parser Agent）

将简历（TXT 或 PDF）解析为结构化 JSON，并可选择根据职位描述评估候选人匹配度。

**框架（Framework）**：LangChain  
**大模型（LLM）**：GPT-4o-mini  

## 安装（Setup）

```bash
pip install -r requirements.txt
cp .env.example .env
```

## 运行（Run）

```bash
# 仅解析（使用内置示例简历）
python agent.py

# 解析你的简历
python agent.py --resume path/to/resume.pdf

# 解析 + 匹配评分
python agent.py --resume resume.pdf --job-desc "Senior Python Engineer with K8s experience..."
```

## 输出包括

- 结构化 JSON：姓名、邮箱、技能、经历、教育背景
- 候选人摘要
- 匹配度评分（0-100）与职位描述对比
- 录用/考虑/淘汰推荐
