FROM node:18-alpine

WORKDIR /app

# Copy only package.json and package-lock.json first
COPY package*.json ./
RUN npm install

# Copy rest of project
COPY . .

# Compile contracts
RUN npx hardhat compile

# Default command to run tests
CMD ["npx", "hardhat", "test"]
