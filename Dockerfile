FROM node:16.13.0-alpine3.14

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --production

COPY src/ src/

CMD ["node", "src/server/server.js"]

