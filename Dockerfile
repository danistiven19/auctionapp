FROM node:alpine AS development

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .
EXPOSE 3000
CMD ["npm", "start"]

FROM development AS builder

RUN npm run build

FROM nginx:alpine AS production

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/build .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
