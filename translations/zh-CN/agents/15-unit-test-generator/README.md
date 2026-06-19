# 单元测试生成智能体（Unit Test Generator Agent）

分析 Python 代码并生成全面的 pytest 测试套件——包含正常路径、边界情况和错误条件。

**框架（Framework）**：LangChain  
**大模型（LLM）**：GPT-4o  

## 安装（Setup）

```bash
pip install -r requirements.txt
cp .env.example .env
```

## 运行（Run）

```bash
# 为 Python 文件生成测试
python agent.py --file my_module.py

# 为内联代码生成测试
python agent.py --code "def divide(a, b): return a / b"

# 指定输出文件
python agent.py --file utils.py --output tests/test_utils.py
```

## 示例

输入：`shopping_cart.py`（包含 add_item、remove_item、total 方法）  
输出：`test_shopping.py`（包含 20+ 个 pytest 测试，使用 fixtures、parametrize 和 mocking）
