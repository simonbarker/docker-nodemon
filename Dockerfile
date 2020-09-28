FROM node:12.18.4-alpine

WORKDIR /var/www/

RUN ls -l

COPY . .

RUN apk add bash && \
    npm install && \
    ls -l

# USER node

ENTRYPOINT [ "npm", "run", "start-dev" ]