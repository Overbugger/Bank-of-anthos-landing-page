# Stage 1: Install dependencies and build the Next.js application
FROM node:lts-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build || exit 1

# Stage 2: Create a minimal runtime image and copy necessary files
FROM node:lts-alpine AS runner
WORKDIR /app

# Install only production dependencies
COPY --from=builder /app/package*.json ./
RUN npm install --omit=dev

# Copy necessary Next.js files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/next.config.js ./

EXPOSE 3000
ENV NODE_ENV=production

CMD ["npm", "start"]