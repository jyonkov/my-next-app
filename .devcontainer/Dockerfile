# Use the official Node.js image as base
FROM mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye

# Install additional system dependencies if needed
RUN apt-get update && apt-get install -y \
    git \
    curl \
    vim \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /workspace

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Install global packages that might be useful
RUN npm install -g @next/codemod

# Create a non-root user
RUN groupadd --gid 1000 node \
    && useradd --uid 1000 --gid node --shell /bin/bash --create-home node

# Switch to non-root user
USER node

# Expose the port that Next.js runs on
EXPOSE 3000
