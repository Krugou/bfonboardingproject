FROM node:22-alpine

WORKDIR /usr/src/app

# Copy env file first
COPY .env ./

# Install PM2 globally first
RUN npm install pm2 -g --force --loglevel=verbose

# Copy only package files first to leverage cache
COPY package*.json ./

# Install dependencies with cache from package-lock.json
RUN npm i --force --loglevel=verbose

# Copy only necessary source files
COPY tsconfig.json ./
COPY src/ ./src/

# Build TypeScript
RUN npm run build

EXPOSE 3007

# Use PM2 runtime for better process management
CMD ["pm2-runtime", "bfinno/main.js"]