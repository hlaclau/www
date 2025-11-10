FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY bun.lockb ./

# Install dependencies
RUN npm install -g bun
RUN bun install --no-save

# Copy source code
COPY . .

# Build the application
RUN bun run build

# Serve static files (for static sites)
FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]