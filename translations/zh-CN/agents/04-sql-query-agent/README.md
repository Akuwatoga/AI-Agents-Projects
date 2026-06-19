# SQL 查询智能体（SQL Query Agent）

连接到任何 SQLite 数据库，通过生成并执行 SQL 来回答自然语言问题。

**框架（Framework）**：LangChain  
**大模型（LLM）**：GPT-4o-mini  

## 安装（Setup）

```bash
pip install -r requirements.txt
cp .env.example .env
```

## 运行（Run）

```bash
# 演示模式——自动创建示例电商数据库
python agent.py

# 你自己的数据库
python agent.py --db path/to/your/database.sqlite

# 单个问题
python agent.py --question "What is the total revenue by country?"
```

数据库默认以只读模式打开。如果你希望生成的 SQL 智能体能够修改数据，仅在 disposable 数据库上使用 `--allow-write`。

## 示例问题

- "How many customers do we have in each country?"
- "What are the top 3 best-selling products?"
- "What was the total revenue last month?"
- "Which customer has spent the most?"

## 架构（Architecture）

```
自然语言 → LLM（生成 SQL）→ SQLite → LLM（格式化答案）→ 响应
```
