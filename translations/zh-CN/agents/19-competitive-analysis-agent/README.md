# 竞品分析智能体（Competitive Analysis Agent）

LangGraph 多步骤智能体，识别竞争对手，逐一分析，并生成战略竞争报告。

**框架（Framework）**：LangGraph  
**大模型（LLM）**：GPT-4o-mini + GPT-4o  

## 安装（Setup）

```bash
pip install -r requirements.txt
cp .env.example .env
```

## 运行（Run）

```bash
python agent.py --company "Notion" --industry "productivity software"
python agent.py --company "Stripe" --industry "payment processing"
python agent.py --company "Figma" --industry "design tools"
```

## 输出

- 5 个竞争对手分析
- 执行摘要
- 市场空白与机遇
- 5 条战略建议
- 按竞争对手划分的威胁评估
