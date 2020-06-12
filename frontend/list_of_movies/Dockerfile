FROM node:alpine AS builder

WORKDIR /code

COPY ./package.json ./yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:alpine as final
RUN mkdir /app
COPY --from=builder /code/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
