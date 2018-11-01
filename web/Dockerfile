FROM node:8-alpine as builder
WORKDIR /app
COPY ./package.json ./package.json
RUN yarn install
COPY . .
RUN yarn build --prod

FROM nginx
EXPOSE 80
COPY --from=builder /app/dist /usr/share/nginx/html