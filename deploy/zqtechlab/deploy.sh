#!/usr/bin/env bash
set -Eeuo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
ssh_host="${ZQTECHLAB_SSH_HOST:-zqtechlab-ecs}"
remote_root="${AGENT_PROJECT_REMOTE_ROOT:-/opt/zqtechlab/apps/zqtechlab/agent-project/source}"
domain="${AGENT_PROJECT_DOMAIN:-agent-project.zqtechlab.com}"
dry_run="${DRY_RUN:-false}"

rsync_args=(
  -az
  --delete
  --itemize-changes
  --exclude ".git"
  --exclude ".env"
  --exclude ".env.*"
  --exclude "node_modules"
  --exclude "dist"
  --exclude "__pycache__"
  --exclude "*.pyc"
  --exclude ".pytest_cache"
  --exclude ".venv"
)

if [[ "$dry_run" == "true" ]]; then
  rsync_args+=(--dry-run)
fi

ssh "$ssh_host" "mkdir -p '$remote_root'"
rsync "${rsync_args[@]}" "$repo_root/" "$ssh_host:$remote_root/"

if [[ "$dry_run" == "true" ]]; then
  echo "Dry run complete; deployment was not changed."
  exit 0
fi

ssh "$ssh_host" bash -s -- "$remote_root" "$domain" <<'REMOTE'
set -Eeuo pipefail

remote_root="$1"
domain="$2"

cd "$remote_root"
compose=(docker compose -p zqtechlab-agent-project)
AGENT_PROJECT_DOMAIN="$domain" \
VITE_BASE_PATH=/ \
VITE_DEFAULT_LOCALE=zh-CN \
"${compose[@]}" up -d --build

for attempt in $(seq 1 30); do
  if "${compose[@]}" exec -T atlas-web wget -qO- http://127.0.0.1:8080/healthz >/dev/null; then
    "${compose[@]}" ps
    exit 0
  fi
  sleep 2
done

"${compose[@]}" ps
"${compose[@]}" logs --tail=100 atlas-web
echo "agent-project health check did not pass in time" >&2
exit 1
REMOTE
