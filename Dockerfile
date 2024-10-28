FROM node:alpine
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
CMD sh -c 'until nc -z db 27017; do echo "Waiting for MongoDB..."; sleep 2; done && npm run seed && npm start'
EXPOSE 3000
