FROM node:16

WORKDIR /home/vsts/work/1/s/**/Dockerfile

COPY package*.json ./
RUN npm ci --only=production

EXPOSE 8080
CMD ["node", "index.js"]
