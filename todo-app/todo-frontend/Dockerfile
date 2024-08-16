FROM node:bullseye-slim AS build-stage
WORKDIR /usr/src/app
COPY package* .
RUN npm ci
COPY . .
ENV VITE_BACKEND_URL="http://localhost:3000"
RUN npm run build

FROM nginx:alpine-slim
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
