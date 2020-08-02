# ビルド環境(distを作るためだけの仮の環境みたいな感じ)
# ltsは安定版, alpineは軽量
FROM node:lts-alpine as build-stage

RUN mkdir /code
# 以下全ての作業は/codeで実行
WORKDIR /code

COPY package.json ./
RUN npm install
# 他のファイル群(/src, nuxt.config.jsは必須)
COPY . .
RUN npm run build



# 本番環境
FROM nginx:stable-alpine as production-stage

# ビルド環境内のディレクトリをマウント
COPY --from=build-stage /code/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
