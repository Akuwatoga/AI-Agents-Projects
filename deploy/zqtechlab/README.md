# ZQTechLab deployment

This project is deployed as an independent Docker Compose stack on the ZQTechLab ECS. The
container joins the existing external `coolify` network, while Coolify's Traefik handles HTTP,
HTTPS, and Let's Encrypt for `agent-project.zqtechlab.com`.

```bash
chmod +x deploy/zqtechlab/deploy.sh
DRY_RUN=true deploy/zqtechlab/deploy.sh
deploy/zqtechlab/deploy.sh
```

Server source directory:

```text
/opt/zqtechlab/apps/zqtechlab/agent-project/source
```

The `services` monorepo keeps only a management adapter and registry entry. The application
source of truth remains `https://github.com/Akuwatoga/AI-Agents-Projects`.
