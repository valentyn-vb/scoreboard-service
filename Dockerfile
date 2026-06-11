FROM node:26-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build

FROM node:26-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist/
COPY --from=builder /app/package*.json ./
CMD ["npm", "run", "start:prod"]