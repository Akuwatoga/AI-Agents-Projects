# Cloudflare Free 接入清单

Cloudflare Free 需要把整个 `zqtechlab.com` DNS 区域迁移到 Cloudflare nameserver，不能只把
`agent-project.zqtechlab.com` 作为独立子域接入。该域名同时承载邮件和多个服务，因此不得在
未核对全部 DNS 记录时直接切换 nameserver。

## 安全迁移顺序

1. 在 Cloudflare 添加 `zqtechlab.com`，选择 Free 计划。
2. 从当前 DNS 服务商完整导出记录，并逐项核对 A、AAAA、CNAME、MX、TXT、CAA、DKIM 和 DMARC。
3. 初次导入时，除 `agent-project` 外的记录全部保持 **DNS only**。
4. `mail` 地址和所有 MX 目标必须保持 **DNS only**；Cloudflare HTTP 代理不代理邮件协议。
5. 确认记录无缺失后，才在域名注册商处替换 Cloudflare 分配的 nameserver。
6. nameserver 生效且各服务正常后，只把 `agent-project` A 记录切换为 **Proxied**。

当前必须保留的已知记录至少包括：

```text
A     agent-project   118.196.66.131   Proxied
A     mail            118.196.66.131   DNS only
MX    @               1 mail.zqtechlab.com
TXT   @               v=spf1 mx -all
```

这不是完整 DNS 清单。切换前必须从原 DNS 控制台补齐其他业务子域、DKIM 和 DMARC。

## Cloudflare 设置

- SSL/TLS encryption mode：`Full (strict)`。
- Always Use HTTPS：开启。
- Cache Rule：当 hostname 等于 `agent-project.zqtechlab.com` 且路径以 `/assets/` 开头时缓存。
- WAF 自定义规则：该静态站只允许 `GET` 和 `HEAD`，其他方法可阻止。
- Rate Limiting：先使用保守阈值观察正常流量，再逐步收紧。

HTML 已设置 `no-cache`，哈希静态资源已设置一年 `immutable` 缓存。不要创建“缓存所有内容”规则，
否则发布后首页可能长时间保留旧版本。

## 源站保护边界

Cloudflare 启用后只能保护经过代理的 HTTP(S) 主机名，不能自动保护 SSH、邮件或同一 IP 上保持
DNS only 的其他服务。当前服务器 IP 仍可通过邮件和其他子域发现。

只有确认 Cloudflare 代理正常后，才应在 Traefik 给 `agent-project` 路由增加 Cloudflare IP
白名单。不要全局封锁服务器的 80/443，否则会中断同机的其他直连服务。SSH 应继续使用密钥登录，
并在云安全组中限制来源 IP。

## 验收

```bash
dig +short agent-project.zqtechlab.com
curl -I https://agent-project.zqtechlab.com
curl -I https://agent-project.zqtechlab.com/assets/<hashed-file>.js
```

检查响应存在 Cloudflare 头部，重复访问静态资源后 `CF-Cache-Status` 为 `HIT`，并确认首页、语言切换、
`/healthz`、邮件和其他业务域名均正常。

