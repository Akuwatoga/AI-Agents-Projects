# 会议纪要智能体（Meeting Notes Agent）

将会议转录稿转换为结构化笔记，包含摘要、行动项、决策和后续跟进事项。

**框架（Framework）**：LangChain  
**大模型（LLM）**：GPT-4o-mini  

## 安装（Setup）

```bash
pip install -r requirements.txt
cp .env.example .env
```

## 运行（Run）

```bash
# 使用内置示例转录稿
python agent.py

# 你自己的转录文件
python agent.py --transcript meeting_transcript.txt

# 内联文本
python agent.py --text "Alice: Let's ship by Friday. Bob: I need 2 more days for testing..."

# 自定义输出路径
python agent.py --transcript meeting_transcript.txt --output sprint_notes.md
```

## 输出

默认保存为 `meeting_notes.md` 结构化 Markdown 文件。如果该文件已存在，智能体会写入一个带时间戳的文件。输出包括：
- 执行摘要
- 关键决策
- 行动项及负责人和截止日期
- 阻碍事项
- 下次会议时间
