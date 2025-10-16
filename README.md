# Intelligent Personal Finance Optimizer (IPFO)

[![Build](https://img.shields.io/badge/build-ready-success)](#) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE) [![Status](https://img.shields.io/badge/status-alpha-orange)](#)

A modern, local-first personal finance web app. Import transactions, auto-categorize, track budgets, and view polished dashboards. Ships with a static preview so you can demo instantly.

## ✨ Highlights
- Beautiful dashboard with trends and category breakdowns
- Import/export (CSV), bulk actions (planned)
- Real-time-ready backend (WebSockets in server scaffold)
- Accessible UI, dark mode, responsive layout
- One-command setup with Docker Compose
- Static preview that runs without any tools

## 🚀 Quick Start

If you have Docker Desktop + Node, use the full stack:

```bash
make setup
make dev
```

Site link: https://xxxashxxx.github.io/ipfo/

If you don't have Docker/Node, open the static preview directly:
- Open `preview/index.html` in your editor preview (no install required)

Demo login for stubbed auth: `demo@example.com` / `demo123`

## 🏗️ Architecture (brief)
- Frontend: Next.js 14 (TypeScript), App Router, minimal UI scaffold
- Backend: Hono (Node 20), JWT auth stub, JSON logs, Socket.IO-ready
- Database: PostgreSQL (via Docker) — schema and migrations folder started

## 📂 Repository Structure
```
ipfo/
├─ backend/           # API (Hono), routes, server, Dockerfile
├─ frontend/          # Next.js app, App Router, Dockerfile
├─ preview/           # Static demo (no dependencies)
├─ docs/              # Docs scaffold (ADR, API spec placeholders)
├─ scripts/           # setup.sh, seed-db.sh
├─ docker-compose.yml # Local dev services
├─ Makefile           # Common commands
└─ README.md
```

## 🧪 Development
- Install dependencies: `make setup`
- Run stack: `make dev`
- Lint/typecheck (placeholders for now): `npm run lint` / `npm run typecheck` in subfolders

## 🖼️ Screens & Preview
- Static dashboard: KPIs, spend-over-time chart, category donut
- Filters for transactions and CSV export (in preview)
- Dark mode toggle

## 🛣️ Roadmap
- Transactions CRUD with pagination and filters
- Budgets and period rollovers
- Insights API with materialized views
- Auth + user profiles with DB
- E2E tests (Playwright), CI (GitHub Actions)

## 📜 License
MIT — see [LICENSE](LICENSE)

## 🙌 Contributing
Issues and PRs welcome. A formal CONTRIBUTING guide will be added soon. For now:
- Use Conventional Commits (`feat:`, `fix:`, `docs:`...)
- Open feature branches from `main`
- Include screenshots for UI changes
