# 数据分析智能体（Data Analysis Agent）

与你的数据对话。加载任何 CSV 或 Excel 文件，用自然语言提出分析问题。

**框架（Framework）**：LangChain（Pandas 智能体）  
**大模型（LLM）**：GPT-4o  

## 安装（Setup）

```bash
pip install -r requirements.txt
cp .env.example .env
```

## 运行（Run）

```bash
# 演示模式——自动创建示例销售数据
python agent.py --allow-dangerous-code

# 你自己的数据
python agent.py --file your_data.csv --allow-dangerous-code

# 单个问题
python agent.py --file sales.csv --question "What is the monthly revenue trend?" --allow-dangerous-code
```

## 安全说明

此演示使用了 LangChain 的 pandas 智能体，它会执行模型生成的 Python 代码。请仅在信任提示词和非敏感的本地数据时使用 `--allow-dangerous-code`。

## 示例问题

- "What is the total revenue by product?"
- "Which region performs best?"
- "Show the correlation between quantity and revenue"
- "What are the top 5 selling products?"
