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
# # build the app and then run it
CMD ["npm", "run", "buildAndStart"]
