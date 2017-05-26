---
layout: post
title: 佈署 Angular 應用程式至 IIS 虛擬目錄 / 應用程式
date: 2017-05-25 22:16
author: Poy Chang
comments: true
categories: [Angular, Tools]
---
佈署 Angular 應用程式至 IIS 時，一定會遇到路由問題，基本上兩種解法，修改 Angular 路由模組訂定，改用 [useHash](https://angular.io/docs/ts/latest/guide/router.html#!#-hashlocationstrategy-) 的方式處理，或者使用 IIS 的 URL Rewrite 模組，而如果佈署到 IIS 網站的虛擬目錄 / 應用程式時，有些地方就要修改了。

>保哥的這篇文章：[如何將 Angular 2 含有路由機制的 SPA 網頁應用程式部署到 IIS 網站伺服器](http://blog.miniasp.com/post/2017/01/17/Angular-2-deploy-on-IIS.aspx)，把佈署方式寫得很清楚，可以解決常見的佈署問題。

先來看一下保哥寫的 web.config：

<script src="https://gist.github.com/doggy8088/68eed089b53ff50e81314ba47d92e87a.js"></script>

上面的設定主要是要告訴 IIS 的 URL Rewrite 模組，當使用者要瀏覽的網頁在伺服器端找不到檔案時，自動改寫網址為 `/` 路徑。

然而我們要將 Angular 應用程式放在虛擬目錄 / 應用程式下，則有四件事情要調整：

1. 虛擬目錄 / 應用程式下的 Angular 應用程式要有一個 `web.config` 檔案
2. `web.config` 中的 `match` 標籤中的 url 要設定成 `/.*`，表示要比對該目錄下的檔案
3. `web.config` 中的 `action`  標籤中的 url 要設定成 `/VirtualDirectory/`，虛擬資料夾的位置
4. `index.html` 中的 `base` 修改成 `<base href="/VirtualDirectory/">`

如此一來我們 Angular 應用程式的路由機制就可以正確運作了！

參考程式碼如下：

<script src="https://gist.github.com/poychang/9a35ce967f6cc7c7714ff55544569821.js"></script>

----------

參考資料：

* [如何將 Angular 2 含有路由機制的 SPA 網頁應用程式部署到 IIS 網站伺服器](http://blog.miniasp.com/post/2017/01/17/Angular-2-deploy-on-IIS.aspx)
* [Angular 2 application not working when moved into IIS virtual directory](https://stackoverflow.com/questions/43017193/angular-2-application-not-working-when-moved-into-iis-virtual-directory)