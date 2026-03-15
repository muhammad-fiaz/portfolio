# Portfolio (v5.0.0)

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
- `WAKATIME_API_KEY` (optional)
- `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` (contact form)
- `NEXT_PUBLIC_GTM_ID` and `NEXT_PUBLIC_GA_ID` (optional analytics)

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