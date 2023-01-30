FROM node:16-alpine3.15
COPY . .
COPY /public index.html
RUN npm install
COPY /src .
EXPOSE 3000
CMD ["npm", "start"]