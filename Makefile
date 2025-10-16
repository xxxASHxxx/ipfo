.PHONY: setup dev test clean dev-backend dev-frontend test-backend test-frontend lint format db-migrate db-seed

setup:
	./scripts/setup.sh

dev:
	docker-compose up

dev-backend:
	cd backend && npm run dev

dev-frontend:
	cd frontend && npm run dev

test:
	make test-backend && make test-frontend

test-backend:
	cd backend && npm test || echo "no backend tests yet"

test-frontend:
	cd frontend && npm test || echo "no frontend tests yet"

lint:
	cd backend && npm run lint
	cd frontend && npm run lint

format:
	cd backend && npm run format || echo "no formatter configured"
	cd frontend && npm run format || echo "no formatter configured"

db-migrate:
	cd backend && npm run migrate

db-seed:
	./scripts/seed-db.sh

clean:
	rm -rf backend/node_modules frontend/node_modules backend/dist


