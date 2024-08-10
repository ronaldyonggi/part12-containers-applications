#!/bin/bash

docker build -t todo-backend . && docker run -p 3123:3000 todo-backend