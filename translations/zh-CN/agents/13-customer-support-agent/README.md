# 客户支持智能体（Customer Support Agent）

基于 LangGraph 的支持智能体，配备 RAG 知识库和自动升级路由。

**框架（Framework）**：LangGraph + FAISS  
**大模型（LLM）**：GPT-4o-mini  

## 安装（Setup）

```bash
pip install -r requirements.txt
cp .env.example .env
```

## 运行（Run）

```bash
python agent.py

# 使用你自己的 .txt/.md 知识库文件
python agent.py --kb-dir docs/
```

## 特性（Features）

- 基于产品知识库的 RAG
- 自动检测敏感问题的升级（账单争议、数据丢失等）
- 保留对话历史
- 可轻松替换为自己的知识库文档
