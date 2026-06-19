# AI Agents Atlas

这是 `agent-project.zqtechlab.com` 的管理适配目录，应用源码仍独立维护在：

```text
本机：/Users/akuwatoga/Dev/project/AI-Agents-Projects
GitHub：https://github.com/Akuwatoga/AI-Agents-Projects
服务器：/opt/zqtechlab/apps/zqtechlab/agent-project/source
```

本地 `source` 是被 Git 忽略的便捷软链接，不会被同步到服务器。正式部署从源码仓库执行：

```bash
cd /Users/akuwatoga/Dev/project/AI-Agents-Projects
DRY_RUN=true deploy/zqtechlab/deploy.sh
deploy/zqtechlab/deploy.sh
```

运行方式：独立 Docker Compose + `coolify` 外部网络 + Coolify Traefik HTTPS。
