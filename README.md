# Sea Lantern Docs

[Sea Lantern（海晶灯）](https://github.com/SeaLantern-Studio/SeaLantern) 的官方文档站，基于 [VitePress](https://vitepress.dev) 构建。

[English](./README_en.md)

**在线访问**: [docs.ideaflash.cn](https://docs.ideaflash.cn)

## 支持语言

- 简体中文 (`/zh/`)
- English (`/en/`)
- 繁體中文 (`/zh-tw/`)

## 本地开发

需要 [Node.js](https://nodejs.org) 20+：

```bash
corepack enable          # 启用 pnpm
pnpm install             # 安装依赖
pnpm dev                 # 启动开发服务器 (localhost:5173)
```

构建与预览：

```bash
pnpm build               # 生产构建
pnpm preview             # 预览构建结果
```

## 目录结构

```
├── .vitepress/           # VitePress 配置与主题
│   ├── config/           # 多语言配置
│   └── theme/            # 自定义主题
├── en/                   # 英文文档
├── zh/                   # 简体中文文档
├── zh-tw/                # 繁體中文文档
├── public/               # 静态资源
└── index.md              # 首页（重定向到 /zh/intro）
```

## 部署

推送到 `main` 分支后，GitHub Actions 自动构建并部署到服务器。

## 贡献

欢迎参与文档改进！请阅读 [CONTRIBUTING.md](./CONTRIBUTING.md)。

## 许可证

[GPL-3.0](./LICENSE)
