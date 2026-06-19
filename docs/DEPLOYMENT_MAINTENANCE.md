# 部署与维护架构

本文档记录汉化版本的部署与维护入口。生产站点已部署至
`https://agent-project.zqtechlab.com`。

## 架构

```text
GitHub main
  -> CI: i18n check + Vite build + Docker build
  -> Docker image
  -> Nginx static container :8080
  -> Coolify Traefik / TLS / agent-project.zqtechlab.com
```

当前容器只托管静态目录站。20 个 Python Agent 仍是命令行示例，不会被暴露为公网 API；后续产品化应使用独立后端服务、鉴权、限流和任务队列。

生产 Compose project name 固定为 `zqtechlab-agent-project`。部署命令同时显式传入 `-p zqtechlab-agent-project`，禁止改回由目录名自动推导，也禁止在共享服务器使用 `--remove-orphans`，避免影响其他 Compose 栈。

## 本地预演

```bash
docker build -t ai-agents-atlas:local .
docker run --rm -p 127.0.0.1:8080:8080 ai-agents-atlas:local
```

另一个终端执行 `curl --fail http://127.0.0.1:8080/healthz`。生产环境使用 `compose.yaml` 接入服务器已有的 `coolify` 外部网络，不直接暴露宿主机端口。

停止本地前台容器使用 `Ctrl-C`。

```bash
docker compose down
```

## 路径配置

- 独立域名根路径：`VITE_BASE_PATH=/`
- 子目录：例如 `VITE_BASE_PATH=/atlas/`
- GitHub Pages workflow 会自动使用 `/<repository-name>/`

`VITE_BASE_PATH` 是构建参数，修改后必须重新构建镜像。

`VITE_DEFAULT_LOCALE=zh-CN` 使首次访问默认显示中文；用户手动切换后，以浏览器本地保存的选择为准。

## 生产环境变更前检查

每次变更需要确认：

- SSH 连接与 `/opt/zqtechlab/apps/zqtechlab/agent-project/source` 部署目录可用
- `agent-project.zqtechlab.com` 的 DNS 与 TLS 状态正常
- 共享 Coolify、Traefik 和 `coolify` Docker 网络健康
- 中国大陆服务器的 ICP 备案状态
- 上一个可回滚的 Git 标签和镜像仍然可用

部署脚本为 `deploy/zqtechlab/deploy.sh`。先执行 `DRY_RUN=true` 检查同步范围，再执行正式部署。

## 维护规则

1. 英文源跟随上游，中文只写入 `translations/zh-CN` 和 `zh-CN.json`。
2. 合并上游更新后先运行 `npm run i18n:check:strict`，新增英文内容会表现为漏译。
3. Dependabot 每周检查 npm 和 Docker，每月检查 GitHub Actions。
4. 每次发布必须通过 `.github/workflows/ci.yml`。
5. 发布后检查 `/healthz`、首页、语言切换和至少一个详情页。
6. 保留至少一个上一版本镜像标签，以便回滚。

每周 workflow 会比较原项目 `ashishpatel26/500-AI-Agents-Projects` 的 `main`。发现落后时 workflow 会失败并在摘要中显示提交数，但不会自动合并或覆盖汉化。

建议人工同步流程：

```bash
git remote add upstream https://github.com/ashishpatel26/500-AI-Agents-Projects.git
git fetch upstream
git switch -c codex/upstream-YYYYMMDD
git merge upstream/main
cd web
npm ci
npm run i18n:check:strict
npm run build
```

解决冲突时优先保留英文上游变化，再补对应中文覆盖；不要把中文直接合并回英文源文件。

## 建议发布命令

版本标签遵循 `vMAJOR.MINOR.PATCH-zh.REVISION`，镜像使用同一版本：

```bash
docker build -t ai-agents-atlas:v0.1.0-zh.1 .
docker tag ai-agents-atlas:v0.1.0-zh.1 ai-agents-atlas:stable
```

不要只保留 `latest`；部署记录应包含 Git commit、镜像标签、发布时间和回滚标签。
