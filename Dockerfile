FROM node:12-alpine
WORKDIR /app
COPY package.json ./
CMD "yarn install"
COPY . .
CMD ["yarn", "run", "serve"]