# GitHub Issue 分类智能体（GitHub Issue Triager）

自动对 GitHub Issue 进行分类：分配严重级别、类别、标签和路由建议。

**框架（Framework）**：LangChain  
**大模型（LLM）**：GPT-4o-mini  

## 安装（Setup）

```bash
pip install -r requirements.txt
cp .env.example .env
```

## 运行（Run）

```bash
# 通过 GitHub URL
python agent.py --issue-url https://github.com/owner/repo/issues/123

# 通过标题 + 正文
python agent.py --title "App crashes on login" --body "Steps: 1. Open app 2. Click login 3. App crashes"
```

## 输出

```
🔴 Severity: CRITICAL (Priority: 9/10)
📁 Category: bug
👤 Assignee: backend team
🏷️  Labels: bug, critical, authentication
📝 Summary: Authentication crash affecting all users on login
```
