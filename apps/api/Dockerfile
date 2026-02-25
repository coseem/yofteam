# syntax=docker/dockerfile:1
FROM node:20-alpine AS base
WORKDIR /app

FROM base AS deps
COPY package.json yarn.lock* ./
RUN corepack enable \
  && corepack prepare yarn@4.5.1 --activate \
  && yarn install --immutable

FROM deps AS builder
COPY . .
RUN yarn nx build api

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/dist/apps/api ./dist/apps/api
EXPOSE 3000
CMD ["node", "dist/apps/api/main.js"]
