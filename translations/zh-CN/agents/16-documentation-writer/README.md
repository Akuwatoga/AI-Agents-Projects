# 文档写作者智能体（Documentation Writer Agent）

为 Python 模块生成全面的文档：README、API 参考和 Google 风格的文档字符串。

**框架（Framework）**：LangChain  
**大模型（LLM）**：GPT-4o  

## 安装（Setup）

```bash
pip install -r requirements.txt
cp .env.example .env
```

## 运行（Run）

```bash
# 生成 README + 文档字符串
python agent.py --file my_module.py

# 仅 README
python agent.py --file utils.py --format readme

# 仅文档字符串
python agent.py --file api.py --format docstrings
```
