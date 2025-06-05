FROM node:14

WORKDIR /usr/src/application

COPY package*.json ./

COPY . .

ENV ENV_NAME=production

VOLUME /usr/src/app/logs

EXPOSE 3000

CMD [ "node", "server.js" ]
