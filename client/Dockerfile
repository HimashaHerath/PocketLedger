# Dockerfile for Next.js frontend

# Use the official Node.js image
FROM node:18

# Create and set the working directory
WORKDIR /app

# Copy the package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Expose the port that the Next.js app runs on
EXPOSE 3000

# Start the Next.js development server
CMD ["yarn", "dev"]
