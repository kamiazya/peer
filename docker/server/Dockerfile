FROM node:9.7.0-alpine

WORKDIR /app

ADD ./package.json /app/
ADD ./package-lock.json /app/

RUN npm install

EXPOSE 9000

CMD ["/app/node_modules/peer/bin/peerjs", "--port", "9000"]
