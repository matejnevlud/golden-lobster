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
# set DATABASE_URL to
ENV DATABASE_URL="sqlserver://host.docker.internal:1433;database=GoldenLobster_1;user=prisma;password=prisma;trustServerCertificate=true;connectionLimit=20;poolTimeout=20"
ENV INTERNET_DATABASE_URL="postgresql://postgres:GbIheULqPgznNjZgDnpwCGVpnlCHFDWy@junction.proxy.rlwy.net:50687/railway"
CMD ["npm", "run", "buildAndStart"]
