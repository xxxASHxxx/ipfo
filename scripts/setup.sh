#!/usr/bin/env bash
set -e

echo "🚀 Setting up development environment..."

command -v docker >/dev/null 2>&1 || { echo "❌ Docker required"; exit 1; }
command -v node >/dev/null 2>&1 || { echo "❌ Node.js required"; exit 1; }

echo "📦 Installing backend dependencies..."
(cd backend && npm install)

echo "📦 Installing frontend dependencies..."
(cd frontend && npm install)

echo "🔧 Setting up environment variables..."
[ -f backend/.env ] || cp backend/.env.example backend/.env || true
[ -f frontend/.env ] || cp frontend/.env.example frontend/.env || true

echo "🗄️ Starting database..."
docker-compose up -d db

echo "⏳ Waiting for database..."
sleep 5

echo "🔄 Running database migrations..."
(cd backend && npm run migrate || true)

echo "🌱 Seeding database..."
./scripts/seed-db.sh || true

echo "✅ Setup complete! Run 'make dev' to start."


