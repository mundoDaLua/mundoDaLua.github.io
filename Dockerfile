FROM node:20-alpine

WORKDIR /app

EXPOSE 4321

COPY . .

RUN npm i && npm run build

CMD [ "npm", "run", "preview" ]
