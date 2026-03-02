# syntax=docker/dockerfile:1
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json yarn.lock* .yarnrc.yml ./
RUN corepack enable \
  && corepack prepare yarn@4.5.1 --activate \
  && yarn install --immutable

FROM deps AS builder
COPY . .
RUN yarn nx build web

FROM nginx:1.27-alpine AS runner
COPY apps/web/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/apps/web/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
