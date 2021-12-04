up:
	docker compose -f docker-compose-dev.yml up --remove-orphans --force-recreate

first: # Первый запуск
	./setup.sh
	echo "info: Устанавливаем Git Hooks"
	npx husky install

up-prod: # поднять на продакшене
	NGINX_PATH=nginx docker-compose up -d --build --remove-orphans

down-prod: # выключить на продакшене
	docker-compose down

up-dumb-nginx-prod: # для генерации сертификата на проде
	NGINX_PATH=dumb-nginx docker-compose up --force-recreate -d nginx

fix-cert: # если протух сертификат
	make down-prod
	bash init-letsencrypt.sh
	make up-prod

build: # собрать контейнер локально
	 docker -D build . -f dockerfile/prod/front/Dockerfile -t  welltory-frontend

types: # проверить типы
	npm run types

