FROM node:14.17.6-alpine

RUN apk update
RUN apk upgrade

#set timezone
RUN apk add --update tzdata
ENV TZ=Europe/Moscow
ENV NODE_ENV=production


WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
COPY babel.config.js ./
COPY tsconfig.json ./
COPY next.config.js ./
COPY .env.example ./.env
COPY index.d.ts ./
COPY sentry.server.config.js ./
COPY sentry.client.config.js ./
COPY sentry.properties ./
COPY .sentryclirc ./

RUN npm ci --production --no-optional --no-audit

COPY src /app/src
COPY public /app/public

RUN npm run build

CMD [ "npm", "run", "start" ]
