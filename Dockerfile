FROM node:16.13.0-alpine3.14

WORKDIR /app

RUN apk add --no-cache git

COPY package.json yarn.lock ./
COPY dist/ dist/
RUN yarn install --production

COPY src/ src/

CMD ["node", "src/server/server.js"]

