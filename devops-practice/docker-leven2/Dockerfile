FROM node:18

WORKDIR /app

COPY server.js ./

RUN mkdir -p logs

EXPOSE 3000

CMD ['node','server.js']