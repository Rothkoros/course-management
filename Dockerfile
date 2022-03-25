FROM node:16

LABEL maintainer="Nick"
LABEL description="Simple rest API made with nodejs, Express and connected to MongoDB Atlas"

WORKDIR /courses
COPY package*.json ./
RUN npm install
COPY . .
ENV PORT=8080
EXPOSE 8080
CMD ["npm", "start"]