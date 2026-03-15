# Contributing

Thank you for your interest in contributing to Portfolio v5.

Contributions are welcome for bug fixes, performance improvements, accessibility, documentation, and developer experience.

## Code of Conduct

All contributors are expected to follow [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

## Development Workflow

1. Fork the repository.
2. Clone your fork.
3. Create a focused feature/fix branch.

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
git checkout -b feat/your-change
```

4. Install dependencies and run checks.

```bash
bun install
bun run lint
bunx tsc --noEmit
```

5. Implement your changes with clear commit messages.

```bash
git add .
git commit -m "feat: short summary"
git push origin feat/your-change
```

6. Open a pull request against `main`.

## Pull Request Guidelines

- Keep PRs scoped and easy to review.
- Include before/after context for UI or behavior changes.
- Mention any environment/config updates.
- Ensure lint and type-check pass before requesting review.
- Update docs/changelog for user-visible changes.

## Reporting Issues

Use GitHub Issues and include:

- Expected behavior
- Actual behavior
- Steps to reproduce
- Screenshots/logs when relevant

## Security

Do not open public issues for sensitive vulnerabilities.
Use the process documented in `SECURITY.md`.

## Maintainer Notes

Project versioning follows `package.json` as source of truth.
If a change affects release behavior, ensure versioning/docs remain consistent.
