FROM node:14

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]

## docker run -it --rm -d -p 3040:3000 -v $(pwd):/app -v /app/node_modules --env-file ./.env --name groupofront groupofront_node
