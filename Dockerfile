FROM alpine:latest AS builder
WORKDIR /code
COPY ./src /code/src
COPY ./package.json /code/
COPY ./.umirc.js /code/
COPY ./yarn.lock /code/
COPY ./nginx.conf /code/
COPY ./scripts /code/scripts
COPY ./public /code/public
RUN apk update && \
    apk upgrade && \
    apk add --no-cache nodejs && \
    apk add --no-cache yarn && \
    yarn && \
    yarn build:sit

FROM nginx:latest
COPY --from=builder code/dist /usr/share/nginx/html/
COPY --from=builder code/nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080
