FROM node:16.13.0-alpine3.14

RUN apk add --no-cache git

WORKDIR /app

RUN apk add --no-cache git

COPY package.json yarn.lock ./

COPY src/ src/

RUN yarn install

CMD ["node", "src/server/server.js"]

