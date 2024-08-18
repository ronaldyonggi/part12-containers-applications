FROM node:22-bookworm-slim AS build-stage
WORKDIR /usr/src/app

# COPY package* .
# RUN npm ci
# ENV VITE_BACKEND_URL="http://localhost:3000"
# COPY . .

FROM build-stage AS test
COPY package* .
RUN npm ci
ENV VITE_BACKEND_URL="http://localhost:3000"
COPY . .
RUN npm run test

FROM build-stage AS prod
COPY package* .
RUN npm ci
ENV VITE_BACKEND_URL="http://localhost:3000"
COPY . .
RUN npm run build

FROM nginx:alpine-slim AS nginx
COPY --from=prod /usr/src/app/dist /usr/share/nginx/html