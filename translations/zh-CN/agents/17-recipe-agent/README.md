# 食谱推荐智能体（Recipe Recommendation Agent）

根据你可用的食材推荐 3 道食谱，包含完整说明、营养信息和厨师小贴士。

**框架（Framework）**：LangChain  
**大模型（LLM）**：GPT-4o-mini  

## 安装（Setup）

```bash
pip install -r requirements.txt
cp .env.example .env
```

## 运行（Run）

```bash
python agent.py --ingredients "chicken, garlic, lemon, rosemary"
python agent.py --ingredients "tofu, broccoli, ginger, soy sauce" --diet vegan --time 20
python agent.py --ingredients "pasta, tomatoes, basil, parmesan" --servings 4
```
