# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and yarn.lock
COPY package.json ./

# Install dependencies
RUN yarn install --production

# Copy the rest of the application code
COPY src ./src

# Expose port 8001
EXPOSE 8001

# Start the server
CMD ["yarn", "start"]
