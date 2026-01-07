# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Wye & Welsh Land Rover Club (WWLRC) website, a statically exported Next.js site deployed via FTP.

## Commands

```bash
bun run dev      # Start development server
bun run build    # Build static export (outputs to /out)
bun run lint     # Run ESLint
```

Always run `bun run build` before pushing to ensure static export works correctly.

## Architecture

### Static Export
The site uses Next.js with `output: 'export'` (configured in `next.config.mjs`), generating a fully static site in the `/out` directory. This means all data fetching happens at build time.

### Spanner API Integration
The site fetches data from the club's management system at `spanner.wwlrc.co.uk`. The API client is in `src/spanner/`:
- `api.ts` - Base fetch wrapper using `pathcat` for URL construction
- `wwlrc.ts` - Club-specific constants (club ID, Facebook link)
- `events.ts` - Fetches rally/event data
- `blog.ts` - Fetches news posts

Data is fetched at build time in page components (e.g., `getPosts()` in `src/app/page.tsx`).

### Directory Structure
- `src/app/` - Next.js App Router pages (home, about, join, events, sponsors)
- `src/components/` - Shared React components (navbar, footer, calendar, blog)
- `src/spanner/` - API client for Spanner backend
- `deployment/` - Contains htaccess config copied to output during deploy

### Deployment
CI/CD via GitHub Actions (`.github/workflows/build-deploy.yml`) builds and uploads to FTP on push to main.
