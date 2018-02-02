FROM node:8.9.4-alpine

RUN adduser -D app

ENV HOME=/home/app

USER app

RUN mkdir $HOME/spotybizrest 

WORKDIR $HOME/spotybizrest

COPY ./package.json $HOME/spotybizrest/package.json

RUN npm install

CMD ["./node_modules/.bin/nodemon", "index.js"]