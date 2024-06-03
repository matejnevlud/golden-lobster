FROM node:18-alpine AS base

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and yarn.lock
COPY package.json package-lock.json ./

# Install app dependencies
RUN npm install

# Copy app source code
COPY . .

# # Expose port 3000
EXPOSE 3000

#ENV NODE_ENV=production
# # Run the app
CMD [ "npm", "start" ]