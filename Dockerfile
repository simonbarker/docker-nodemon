FROM node:12.18.4-alpine

WORKDIR /var/www/

COPY . .

RUN apk add bash && \
    npm install && \
    chown -R node:node .

USER node

ENTRYPOINT [ "npm", "run", "start-dev" ]