# Bodo Research Memorial

A production-ready digital archive and research platform preserving the history, culture, language, religion, and leadership of the Bodo people.

## Vision

Bodo Research Memorial is designed as a long-term public knowledge project: a searchable, scholarly, and community-centered archive that documents people, movements, events, and source material with editorial controls and traceable revisions.

## Core Capabilities

- Structured leader profiles with timeline, sources, and related entities
- Culture, religion, history, movement, and organization knowledge hubs
- Editorial workflow with revision submit, approve, and reject APIs
- Admin dashboard and role-aware auth controls
- Search and map exploration interfaces
- Knowledge graph and SEO artifacts (sitemap, robots, Open Graph)
- PDF rendering support for profile export

## Technology Stack

- Next.js 15 (App Router)
- React 19 + TypeScript
- MongoDB + Mongoose
- NextAuth + JWT-based role model
- Tailwind CSS
- Vitest testing

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

Create `.env.local` and set at least:

```env
MONGODB_URI=mongodb+srv://<user>:<pass>@<cluster>/<db>
NEXTAUTH_SECRET=<strong-random-secret>
NEXTAUTH_URL=http://localhost:3000
JWT_SECRET=<strong-random-secret>
UPSTASH_REDIS_REST_URL=<upstash-url>
UPSTASH_REDIS_REST_TOKEN=<upstash-token>
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

For production deployments, set the same variables in Vercel Project Settings so build-time and runtime imports can resolve them.

If pnpm reports ignored build scripts for native packages such as `sharp`, run `pnpm approve-builds` in a trusted local environment before deploying so Next.js image optimization remains available.

### 3. Run locally

```bash
npm run dev
```

### 4. Build and run production mode

```bash
npm run build
npm run start
```

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run type-check
npm run lint
npm run lint:fix
npm run test
npm run test:ui
npm run test:coverage
npm run seed
npm run seed:force
```

## SEO and Discoverability

This project includes:

- Dynamic metadata and Open Graph defaults
- `robots` and `sitemap` app routes
- Canonical base URL support through environment variables
- Indexable legal and policy pages

Recommended production settings:

- Set `NEXT_PUBLIC_APP_URL` to the live domain
- Set `NEXTAUTH_URL` to the same canonical domain
- Ensure `public/og-image.png` is present and optimized

## Security and Compliance

- CSRF token validation for protected write endpoints
- Rate limiting for sensitive routes
- Role checks for admin/editor functionality
- Audit log model for high-value actions

See:

- `SECURITY.md`
- `PRIVACY.md`
- `TERMS.md`

## Governance

- Contribution policy: `CONTRIBUTING.md`
- Community standards: `CODE_OF_CONDUCT.md`
- Responsible disclosure: `SECURITY.md`

## Legal

This repository is licensed under MIT. See `LICENSE`.

Legal/policy pages are available in-app at:

- `/privacy`
- `/terms`

## Deployment Notes

For production deployment, use a process supervisor and reverse proxy:

- Run with `npm run build` then `npm run start`
- Place behind Nginx/Caddy for TLS termination
- Inject secrets through deployment environment variables
- Keep logs centralized and rotate regularly

## Status

Repository is actively maintained as a research/archive platform with production build and test workflows.
