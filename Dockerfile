FROM node:16.13.0-alpine3.14

RUN apk add --no-cache git

WORKDIR /app

RUN apk add --no-cache git

COPY package.json yarn.lock ./
COPY gen/ gen/

COPY ./scripts/build-libs.sh ./scripts/build-libs.sh
RUN ./scripts/build-libs.sh

COPY src/ src/

CMD ["node", "src/server/server.js"]

