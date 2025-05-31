FROM node:18-alpine

WORKDIR /app

COPY server.js ./

RUN npm install 

RUN mkdir logs

RUN chmod -R 777 logs

EXPOSE 3000

CMD ["node","server.js"]

