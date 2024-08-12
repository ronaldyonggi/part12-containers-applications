#!/bin/bash

# docker build -t todo-backend . && docker run -p 3123:3000 todo-backend

# docker compose up -d --build

# docker compose down

docker compose -f docker-compose.dev.yml up -d --build
# docker compose -f docker-compose.dev.yml down --volumes

# docker compose -f docker-compose.dev.yml logs -f