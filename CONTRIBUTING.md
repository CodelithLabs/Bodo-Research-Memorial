# Contributing Guide

Thank you for helping improve Bodo Research Memorial.

## Principles

- Preserve historical and cultural accuracy.
- Prefer verifiable sources over unsourced assertions.
- Keep changes scoped and reviewable.
- Respect privacy and legal constraints for submitted content.

## Development Workflow

1. Create a focused branch.
2. Make small, logical commits.
3. Run checks before opening a PR:

```bash
npm run type-check
npm run test
npm run build
```

## Pull Request Expectations

- Clear title and description
- Problem statement and solution summary
- Screenshots for UI changes
- Notes on SEO, legal, or data-model impact when relevant

## Content and Source Quality

For archive data changes:

- Include source attribution where possible
- Avoid speculative claims
- Keep language neutral and respectful

## Code Style

- Use TypeScript strict-compatible patterns
- Keep API error responses explicit
- Prefer reusable components and utility helpers

## Security

Do not submit secrets, API keys, or credentials.
For vulnerabilities, follow `SECURITY.md`.
