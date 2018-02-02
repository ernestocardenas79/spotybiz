FROM pivotalpa/angular-cli:latest

RUN adduser -D app

ENV HOME=/home/app

USER app

RUN mkdir $HOME/spotybizweb 

WORKDIR $HOME/spotybizweb

COPY ./package.json $HOME/spotybizweb/package.json

CMD [ "ng serve" ]