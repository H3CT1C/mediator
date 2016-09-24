FROM node:4
RUN apt-get update && \
    apt-get install -y build-essential && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
RUN mkdir -p /usr/src/app
RUN mkdir -p /data/images
RUN mkdir -p /data/uploads

ENV NODE_ENV="production"

WORKDIR /usr/src/app

RUN npm install -q -g bower gulp pm2

COPY package.json /usr/src/app/
RUN npm install -q

COPY . /usr/src/app

RUN bower install -q --allow-root
RUN gulp build

ENV LAMBO_DATA="/data"
VOLUME ["/data"]

EXPOSE 3000

CMD [ "npm", "start" ]
