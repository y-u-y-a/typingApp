# Dockerfileで構築
## 1. Dockerfileからイメージ作成
```
$ docker build -t typing_app_frontend:latest .
```
## 2. イメージからコンテナ起動(run = create + start)
```
$ docker run --name typingApp_frontend -d -p 3000:80 typing_app_frontend:latest
```

# Build Setup

```bash
# ライブラリインストール
# install dependencies
$ npm install

# サーバー立ち上げ
# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# distディレクトリ生成
# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).



# GCPのCloud Runにデプロイ
## 1. GCRにイメージを登録する
- `GCR用のイメージ名を作成`
```
$ docker tag typing_app_frontend gcr.io/typing-app-project/typing_app_frontend

$ docker images
>> gcr.io/typing-app-project/typing_app_frontend  latest  04b62eeba61d  36 minutes ago  23MB
```
- `GCR上にPush`
```
$ gcloud docker -- push gcr.io/typing-app-project/typing_app_frontend
```

## 2. Cloud Runへデプロイする
```
$ gcloud run deploy --image gcr.io/typing-app-project/typing_app_frontend --platform managed
```
