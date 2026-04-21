<h1 align="center">🚀 Portfolio (v5.0.0)</h1>



<p align="center">
  <a href="https://github.com/muhammad-fiaz/portfolio/stargazers">
    <img src="https://img.shields.io/github/stars/muhammad-fiaz/portfolio?style=for-the-badge" />
  </a>
  <a href="https://github.com/muhammad-fiaz/portfolio/network/members">
    <img src="https://img.shields.io/github/forks/muhammad-fiaz/portfolio?style=for-the-badge" />
  </a>
  <a href="https://github.com/muhammad-fiaz/portfolio/issues">
    <img src="https://img.shields.io/github/issues/muhammad-fiaz/portfolio?style=for-the-badge" />
  </a>
  <a href="https://github.com/muhammad-fiaz/portfolio/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/muhammad-fiaz/portfolio?style=for-the-badge" />
  </a>
  <a href="https://github.com/muhammad-fiaz/portfolio/commits/main">
    <img src="https://img.shields.io/github/last-commit/muhammad-fiaz/portfolio?style=for-the-badge" />
  </a>
</p>


Production-ready portfolio built with Next.js 16, React 19, TypeScript, Panda CSS, and a retro-modern UI system.

## Tech Stack

- Framework: Next.js 16 (App Router)
- Language: TypeScript
- Runtime / Package Manager: Bun
- Styling: Tailwind CSS 4 + Panda CSS + custom utility layer
- State Management: Zustand
- Data Fetching: TanStack Query
- Motion: Framer Motion + animejs

## Getting Started

### 1. Install dependencies

```bash
bun install
```

### 2. Configure environment

Create `.env.local` and set the required keys.

Suggested keys:

- `GITHUB_TOKEN` (recommended for accurate contribution calendar data)
- `GITHUB_USER` (optional override for default username)
- `NEXT_PUBLIC_SITE_URL`
- `HACKATIME_API_KEY` (required for Hack Club coding insights)
- `HACKATIME_API_BASE_URL` (optional, defaults to `https://hackatime.hackclub.com`)
- `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` (contact form)
- `NEXT_PUBLIC_GTM_ID` and `NEXT_PUBLIC_GA_ID` (optional overrides, defaults are already configured)

## Highlights

- GitHub stats section includes the live contribution snake SVG from the profile output branch.
- Hack Club coding insights are powered by Hackatime data and heatmap visuals.

### 3. Run development server

```bash
bun run dev
```

### 4. Quality checks

```bash
bun run lint
bunx tsc --noEmit
```


## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) before opening issues or pull requests.


## Support

If this project helped you, please star the repository:

https://github.com/muhammad-fiaz/portfolio
