FROM node:14.1.0-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++ \
    && npm install \
    && apk del build-dependencies
ADD . ./
RUN npm run build:k8s

FROM node:14.1.0-alpine

WORKDIR /app
ENV HOST=0.0.0.0
EXPOSE 3000

ADD package*.json ./
ADD nuxt.config.ts ./
ADD tsconfig.json ./

COPY --from=builder ./app/node_modules ./node_modules/
COPY --from=builder ./app/.nuxt ./.nuxt/
COPY --from=builder ./app/static ./static/
COPY --from=builder ./app/config ./config/
COPY --from=builder ./app/pages ./pages/
COPY --from=builder ./app/components ./components/
COPY --from=builder ./app/layouts ./layouts/
COPY --from=builder ./app/plugins/*.js ./plugins/

CMD ["npm", "run", "start:k8s"]