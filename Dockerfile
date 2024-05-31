# Usar imagem oficial do PHP 8.2 com Apache como base
FROM php:8.2-apache

# Instalar dependências do Laravel e outras necessárias
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libpq-dev \
    libpng-dev \
    libonig-dev \
    libzip-dev \
    && docker-php-ext-install pdo pdo_mysql mbstring zip exif pcntl

# Instalar o Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Instalar o Node.js e npm
RUN curl -fsSL https://deb.nodesource.com/setup_14.x | bash - \
    && apt-get install -y nodejs \
    && apt-get install -y npm

# Definir diretório de trabalho para o backend
WORKDIR /var/www/html

# Configurar Apache
COPY 000-default.conf /etc/apache2/sites-available/000-default.conf

# Copiar arquivos do código-fonte do Laravel (backend)
COPY back /var/www/html

# Criar e ajustar permissões dos diretórios necessários antes de instalar dependências
RUN mkdir -p /var/www/html/storage \
    && mkdir -p /var/www/html/bootstrap/cache \
    && chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html/storage \
    && chmod -R 755 /var/www/html/bootstrap/cache

# Instalar dependências PHP como o usuário www-data
USER www-data
RUN composer install --no-interaction --prefer-dist --optimize-autoloader

RUN cp .env.example .env

RUN php artisan key:generate
RUN php artisan migrate

RUN nohup php artisan serve &


# Voltar para o usuário root para as etapas seguintes
USER root

# Copiar arquivos do frontend
COPY front /var/www/html/front

# Verificar o conteúdo do diretório do frontend
RUN ls -la /var/www/html/front

# Definir diretório de trabalho para o frontend
WORKDIR /var/www/html/front

# Instalar dependências Node.js
RUN npm install


# Exibir as versões do Node.js e npm
RUN echo "Node version: $(node -v)" && echo "NPM version: $(npm -v)"

# Construir assets

RUN npm run build

# Voltar para o diretório de trabalho do Laravel
WORKDIR /var/www/html

# Expor porta 80
EXPOSE 80

# Habilitar módulo do Apache para reescrita de URL
RUN a2enmod rewrite

# Comando padrão ao iniciar o contêiner
CMD ["apache2-foreground"]
