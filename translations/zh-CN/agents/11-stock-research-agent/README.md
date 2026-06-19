# 股票研究智能体（Stock Research Agent）

通过雅虎财经获取实时股票数据，生成 AI 驱动的投资分析报告。

**框架（Framework）**：LangChain  
**大模型（LLM）**：GPT-4o-mini  
**数据（Data）**：雅虎财经（Yahoo Finance，免费，无需 API 密钥）

## 安装（Setup）

```bash
pip install -r requirements.txt
cp .env.example .env
```

## 运行（Run）

```bash
python agent.py --ticker AAPL
python agent.py --ticker NVDA
python agent.py --ticker TSLA
```

## 输出

实时基本面数据 + AI 分析，涵盖投资论点、优势、风险、估值和 verdict。
