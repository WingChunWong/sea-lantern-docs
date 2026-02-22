# Sea Lantern Docs

The official documentation site for [Sea Lantern](https://github.com/SeaLantern-Studio/SeaLantern), built with [VitePress](https://vitepress.dev).

[中文](./README.md)

**Live site**: [docs.ideaflash.cn](https://docs.ideaflash.cn)

## Supported Languages

- Simplified Chinese (`/zh/`)
- English (`/en/`)
- Traditional Chinese (`/zh-tw/`)

## Local Development

Requires [Node.js](https://nodejs.org) 20+:

```bash
corepack enable          # Enable pnpm
pnpm install             # Install dependencies
pnpm dev                 # Start dev server (localhost:5173)
```

Build and preview:

```bash
pnpm build               # Production build
pnpm preview             # Preview build output
```

## Directory Structure

```
├── .vitepress/           # VitePress config & theme
│   ├── config/           # Multi-language config
│   └── theme/            # Custom theme
├── en/                   # English docs
├── zh/                   # Simplified Chinese docs
├── zh-tw/                # Traditional Chinese docs
├── public/               # Static assets
└── index.md              # Home (redirects to /zh/intro)
```

## Deployment

Pushing to `main` triggers GitHub Actions to build and deploy automatically.

## Contributing

Contributions are welcome! Please read [CONTRIBUTING_en.md](./CONTRIBUTING_en.md).

## License

[GPL-3.0](./LICENSE)
