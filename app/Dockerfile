FROM node:20-alpine


EXPOSE 4000

WORKDIR /src

RUN npm install i npm@latest -g 


COPY . .


RUN npm install

CMD ["node", "src/index.js", "npx prisma migrate deploy "]
