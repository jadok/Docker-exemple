FROM node:boron

# Create app directory
WORKDIR /usr/src/app

RUN npm install -g webpack webpack-dev-server typescript serve
# Install app dependencies
COPY package.json package-lock.json ./
RUN npm install

# Bundle app source
COPY . ./


EXPOSE 8080
CMD [ "npm", "start" ]
