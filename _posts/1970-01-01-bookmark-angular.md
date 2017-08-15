---
layout: post
title: Angular 書籤
date: 1970-01-01 12:00
author: Poy Chang
comments: true
categories: [Angular]
---
本篇作為書籤用途，紀錄網路上的 Angular 參考資料

## 在 Angular 中使用 Wallaby.js 單元測試

* [如何在 Visual Studio Code 執行 Wallaby 單元測試?](http://oomusou.io/vscode/vscode-wallaby/)
* [範例專案 - wallabyjs/ngCliWebpackSample](https://github.com/wallabyjs/ngCliWebpackSample#wallabyjs)
* 快速四步驟
	1. 專案根目錄加入 [wallaby.js](https://github.com/wallabyjs/ngCliWebpackSample/blob/master/wallaby.js) 設定檔
	2. 加入啟動測試程式碼 [wallabyTest.ts](https://github.com/wallabyjs/ngCliWebpackSample/blob/master/src/wallabyTest.ts) 至 `src\wallabyTest.ts`
	3. 在 `tsconfig.json` 中設定排除 `src/wallabyTest.ts` 避免影響 Angular AOT 編譯
	4. 執行 `npm install wallaby-webpack angular2-template-loader electron --save-dev`

## Angular 4 網站開發最佳實務 (Modern Web 2017)

SlideShare：[Angular 4 網站開發最佳實務 (Modern Web 2017)](https://www.slideshare.net/WillHuangTW/angular-4-best-practics)

* 更新 Angular CLI 工具套件的步驟
	* 更新全域 npm
		* `npm install -g @angular/cli`
	* 更新專案 npm
		* `npm install @angular/cli --save-dev`
		* `rimraf node_modules package-lock.json`
		* `npm install`
* 網站伺服器都會壓縮靜態檔案（gzip/deflate），因此實際下載大小會比看見的小很多
* 使用 TrackBy 避免不必要的 DOM 操作

## 使用 Angular 開發 TodoMVC 應用程式完整實作教學

youtube：[使用 Angular 開發 TodoMVC 應用程式完整實作教學](https://www.youtube.com/watch?v=aMeF8ksXv7o&t=271s)

----------

參考資料：

* []()