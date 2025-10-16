FROM node:20-alpine as deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci || npm i

FROM node:20-alpine as builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM nginx:1.27-alpine as runner
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80


