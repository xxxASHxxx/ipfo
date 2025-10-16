FROM node:20-alpine as deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci || npm i

FROM node:20-alpine as builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine as runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
ENV PORT=8000
EXPOSE 8000
CMD ["node", "dist/server.js"]


