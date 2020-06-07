FROM node:12-alpine
COPY package.json ./
CMD "yarn install"
COPY . .
CMD ["yarn", "run", "serve"]