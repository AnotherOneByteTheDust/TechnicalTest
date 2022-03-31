FROM node:16.14.2-alpine 

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run build

CMD ["node", "dist/src/main.js"]