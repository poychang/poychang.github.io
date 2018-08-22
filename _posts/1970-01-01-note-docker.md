---
layout: post
title: Docker 筆記
date: 1970-01-01 12:00
author: Poy Chang
comments: true
categories: [Note, Docker]
---
本篇作為書籤用途，紀錄網路上的 Docker 參考資料

* docs.docker.com Search URL `https://docs.docker.com/search/?q={q}` 其中 `{q}` 可替換成要搜尋的文字

## 基本指令

* `docker images`
* `docker build`
* `docker login`
* `docker push`
* `docker pull`
* `docker run`

>Docker Image 名稱必須是小寫，否則會無法編譯。

## Push Docker Image Push 到 Docker Hub

註冊 [Docker Hub](https://hub.docker.com/) 帳號。

1. `docker images` 查看本機的 Docker Images
2. `docker tag Image-Name Docker-Hub-Account/Image-Name` 將本機的 `Image-Name` Docker Images 加上 tag
  * 須注意 Docker Tag 的格式，前面為 Docker Hub 帳號名稱
3. `docker login` 登入 Docker Hub
4. `docker push Docker-Hub-Account/Image-Name` 將指定的 Docker Image Push 到 Docker Hub 上
5. 完成後，登入 [Docker Hub](https://hub.docker.com/) 網站就可以看到上傳的 Docker Image

若要從 Docker Hub Pull 指定的 Docker Image，請執行 `docker pull Docker-Hub-Account/Image-Name`。

## 推送至 Azure 私人 Docker 容器登錄

[官方文件](https://docs.microsoft.com/zh-tw/azure/container-registry/container-registry-get-started-docker-cli)

1. 登入 Azure Container Registry，下面指令擇一
  * `az acr login --name myregistry`
  * `docker login myregistry.azurecr.io -u xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -p myPassword`
2. 取得映像檔 
  * `docker pull nginx`
3. 建立別名
  * `docker tag nginx myregistry.azurecr.io/samples/nginx`
4. 將映像推送至您的登錄庫
  * `docker push myregistry.azurecr.io/samples/nginx`

## 遠端操作 Docker

有時候不想登入 Docker 的伺服器，想透過自己的電腦做遠端操作，可以使用 `-H` 並指定連線位置，然後下指令執行。

例如下面這個指令，是遠端操作 `DOCKER_REMOTE_SERVER` 這台伺服器，執行 `docker logs --tail 100 WebApp` 印出 `WebApp` 這個 Container 最後 100 行的 Log 資料。

```bash
docker -H=DOCKER_REMOTE_SERVER logs --tail 100 WebApp
```

如果經常需要這樣操作了話，可以透過 `alias` 來建立別名指令：

```bash
alias dockerx="docker -H=DOCKER_REMOTE_SERVER"
```

REF: [Run commands on remote Docker host](https://gist.github.com/kekru/4e6d49b4290a4eebc7b597c07eaf61f2)

## Misc.

* [Docker Compose 初步閱讀與學習記錄](http://blog.maxkit.com.tw/2017/03/docker-compose.html)

----------

參考資料：

* [Docker Docs](https://hub.docker.com)
* [用30天來介紹和使用 Docker 系列](https://ithelp.ithome.com.tw/users/20103456/ironman/1320)
