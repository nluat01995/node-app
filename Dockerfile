FROM node:alpine3.14

WORKDIR /app

COPY ./*.json .

RUN yarn install 


COPY . .


CMD ["yarn","start"]