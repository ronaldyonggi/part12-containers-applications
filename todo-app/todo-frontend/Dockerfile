FROM node:bullseye-slim AS build-stage
# FROM node:bullseye-slim 

WORKDIR /usr/src/app

COPY . .

ENV VITE_BACKEND_URL="http://localhost:3000"

RUN npm ci

RUN npm run build

# RUN npm install -g serve

# CMD ["serve", "dist"]

FROM nginx:alpine-slim

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
