FROM node:22-alpine AS build

WORKDIR /app
COPY web/package.json web/package-lock.json ./web/
RUN npm ci --prefix web

COPY README.md LICENSE ./
COPY agents ./agents
COPY crewai_mcp_course ./crewai_mcp_course
COPY images ./images
COPY translations ./translations
COPY web ./web

ARG VITE_BASE_PATH=/
ARG VITE_DEFAULT_LOCALE=zh-CN
ENV VITE_BASE_PATH=${VITE_BASE_PATH}
ENV VITE_DEFAULT_LOCALE=${VITE_DEFAULT_LOCALE}
RUN npm run build --prefix web

FROM nginx:1.27-alpine

COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/web/dist /usr/share/nginx/html

EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1:8080/healthz || exit 1
