FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY bun.lock ./

# Install dependencies
RUN npm install -g bun
RUN bun install --no-save

# Copy source code
COPY . .

# Build the application with proper environment
ENV HOST=0.0.0.0
ENV PORT=80
RUN bun run build

# Serve static files (for static sites)
FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]