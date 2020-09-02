# 環境構築

***本番のみDockerで構築する***

## 開発用(development)
```bash
# ライブラリインストール(/node_modules)
$ npm install
# 開発サーバーを起動(with hot reload at localhost:3000)
$ npm run dev
```

## 本番(Production)
`Docker内で実行`
```bash
$ npm install
    # webpackでCSS,JSをproduction向けにビルド(/.nuxt)
$ npm run build
    # 静的(static)ファイルホスティングに使用, 本番にデプロイして運用(/dist)
$ npm run generate
```


# Dockerfileで構築
## 1. Dockerfileからイメージ作成
```
$ docker build -t typing_app_frontend:latest .
```
## 2. イメージからコンテナ起動(run = create + start)
```
$ docker run --name typingApp_frontend -d -p 3000:80 typing_app_frontend:latest
```


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
