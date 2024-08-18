FROM node:bookworm-slim

WORKDIR /usr/src/app

COPY --chown=node:node package* .

RUN npm install

COPY --chown=node:node . .

USER node

CMD ["npm", "run", "dev", "--", "--host"]