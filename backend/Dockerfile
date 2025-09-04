# Use a Node.js base image with system dependencies for Puppeteer
FROM node:18-bullseye-slim

# Install Chromium and other required dependencies
RUN apt-get update && apt-get install -yq --no-install-recommends \
    chromium \
    libgbm-dev \
    libgconf-2-4 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libcups2 \
    libnspr4 \
    libnss3 \
    libxss1 \
    libasound2 \
    libpangocairo-1.0-0 \
    libx11-xcb1 \
    libxcb1 \
    libxcomposite1 \
    libxcursor1 \
    libxdamage1 \
    libxext6 \
    libxfixes3 \
    libxi6 \
    libxrandr2 \
    libxrender1 \
    libxtst6 \
    libappindicator3-1 \
    libfontconfig1 \
    libfreetype6 \
    libharfbuzz0b \
    libpixman-1-0 \
    libpng-dev \
    libtiff5 \
    libwebp6 \
    libwebp-dev \
    libjpeg-dev \
    libgif-dev \
    libgdk-pixbuf2.0-0 \
    libgtk-3-0 \
    fonts-liberation \
    libappindicator1 \
    xdg-utils \
    libu2f-udev \
    libvulkan1 && \
    rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Use the installed Chromium as the executable path for Puppeteer
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

# Start the server
CMD [ "node", "server.js" ]
