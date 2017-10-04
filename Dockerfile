FROM nginx:alpine

ENV PROJECT_ROOT /html
ENV NGINX_CONF /etc/nginx/conf.d/default.conf

COPY ./public $PROJECT_ROOT
COPY ./etc/nginx/default.conf $NGINX_CONF
WORKDIR $PROJECT_ROOT
