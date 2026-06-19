# 代码审查智能体（Code Review Agent）

一个审查代码中漏洞、安全问题、性能问题和风格违规的 AI 智能体。

**框架（Framework）**：LangChain  
**大模型（LLM）**：GPT-4o  

## 安装（Setup）

```bash
pip install -r requirements.txt
cp .env.example .env
```

## 运行（Run）

```bash
# 审查文件
python agent.py --file path/to/your/code.py

# 审查内联代码
python agent.py --code "def divide(a, b): return a / b"

# 审查非 Python 代码
python agent.py --file app.js --language javascript
```

## 示例输出

```
🔍 Reviewing: example.py

============================================================
📋 CODE REVIEW
============================================================
## Overall: 🟡 Needs Work

### 1. Bugs & Correctness
- `divide(a, b)` has no zero-division check → `ZeroDivisionError` on `b=0`

### 2. Security Issues
- No input validation on external parameters

### 3. Improvements
- Add type hints: `def divide(a: float, b: float) -> float`
- Raise `ValueError` for `b == 0` with descriptive message
```
