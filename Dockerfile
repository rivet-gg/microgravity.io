FROM node:16.13.0-alpine3.14

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --production

COPY dist/api-identity/ node_modules/@rivet-gg/identity
COPY dist/api-matchmaker/ node_modules/@rivet-gg/matchmaker
COPY src/ src/

CMD ["node", "src/server/server.js"]

