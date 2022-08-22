FROM node:16.13.0-alpine3.14

RUN apk add --no-cache git

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --production

COPY src/ src/

CMD ["node", "src/server/server.js"]

