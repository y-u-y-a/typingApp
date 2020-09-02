# ビルド環境(distを作るためだけの仮の環境みたいな感じ)
# ltsは安定版, alpineは軽量
FROM node:lts-alpine as build-stage

WORKDIR /code
COPY ./ ./

# ファイル群(/src, package.json, nuxt.config.jsから本番用を生成)
RUN npm install \
    && npm run build \
    && npm run generate



# 本番環境
FROM nginx:stable-alpine as production-stage

# ビルドした生成物/distをnginxに載せる
COPY --from=build-stage /code/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
