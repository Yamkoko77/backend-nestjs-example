FROM node:11-alpine
COPY . /var/www/node
WORKDIR /var/www/node
RUN ["npm", "install"]
EXPOSE 3000
CMD [ "npm", "run", "start" ]