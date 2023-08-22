# Specify a base image
FROM node:12.13.0-alpine AS alpine

WORKDIR /app

# Install dependencies

COPY package*.json ./
RUN npm install --save && npm cache clean --force
# ADD node_modules .
COPY . .
EXPOSE 3020 
# Default command
CMD ["npm", "start"]