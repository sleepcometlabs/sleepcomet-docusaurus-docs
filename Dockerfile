FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json tsconfig*.json docusaurus.config.ts sidebars.ts ./
RUN npm ci
COPY docs ./docs
COPY src ./src
COPY static ./static
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
