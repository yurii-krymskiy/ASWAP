FROM node:23-alpine AS build

# 👇 додано eudev-dev
RUN apk add --no-cache python3 make g++ linux-headers eudev-dev \
    && ln -sf python3 /usr/bin/python

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:23-alpine
WORKDIR /app
RUN npm i -g serve
COPY --from=build /app/dist ./dist
EXPOSE 3000
USER node      
CMD ["serve", "-s", "dist", "-l", "3000"]
