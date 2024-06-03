################## COMPOSER ##################
FROM composer:latest as composer

RUN mkdir -p /var/www /var/www/bin

WORKDIR /var/www

RUN apk add --virtual build-dependencies --no-cache ${PHPIZE_DEPS} openssl curl-dev openssl-dev ca-certificates libxml2-dev oniguruma-dev icu-dev \
    && docker-php-ext-configure intl \
    && docker-php-ext-install -j$(nproc) bcmath ctype fileinfo mbstring pdo pdo_mysql dom pcntl intl \
    && pecl install redis \
    && docker-php-ext-enable redis
# && apk del build-dependencies

ENTRYPOINT ["tail"]
CMD ["-f","/dev/null"]

################## NODE ##################
FROM node:20.13.1-slim as node-builder

WORKDIR /var/www

ENTRYPOINT ["tail"]
CMD ["-f","/dev/null"]

################## PHP ##################
FROM php:8.2-fpm as php-fpm

WORKDIR /var/www

RUN apt-get update && \
    apt-get install -y ${PHPIZE_DEPS} openssl libcurl4-openssl-dev pkg-config libssl-dev ca-certificates zip libxml2-dev libonig-dev libzip-dev libicu-dev libpng-dev libmagickwand-dev qpdf && \
    docker-php-ext-configure intl && \
    docker-php-ext-install -j$(nproc) bcmath ctype fileinfo mbstring zip pdo pdo_mysql dom pcntl intl gd && \
    pecl install redis imagick && \
    docker-php-ext-enable redis gd imagick

RUN useradd -u 1000 www
RUN usermod -G staff www

USER  www
