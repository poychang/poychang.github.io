---
layout: post
title: Angular 筆記
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

## 小技巧

### 解決 import 路徑過長的問題

Angular 程式寫到後面，會發現那個 import 的路徑越來越長，一路點點點下去也不是辦法，[官網文件](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping)有提供很好的解法，在 `tsconfig.json` 的 `compilerOptions` 內，可以使用 `"PATH_ALIAS": ["PATH"]` 的方式來設定路徑別名，範例如下：

```json
{
	"compilerOptions": {
		"baseUrl": "src",
		"paths": {
			"@app/*": ["app/*"]
		}
	}
}
```

注意！如果是用 Angular CLI 產生的專案，在 `src` 資料夾底下會有 `tsconfig.app.json` 和 `tsconfig.spec.json` 兩個設定檔，會以 `tsconfig.json` 為基底將設定覆蓋掉，所以要再確認相關設定是否符合需求。

設定完成後，只要使用 `@app` 就會指到應用程式的根目錄

```typescript
// 原本的 import 是長這樣
import * as env from './../../environments/environment';

// 設定後的寫法
import * as env from '@app/environments/environment';
```

你也可以把 `@app` 設定成其他常用的路徑，讓 import 的畫面變乾淨。

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

## Microsoft 線上課程

來自 Microsoft Virtual Academy 的線上課程，透過 Eric Greene 帶來 10 小時的系列課程，由淺入深的探索 Angular 開發技巧。

Mastering Angular 課程目錄([點此搜尋更多](https://mva.microsoft.com/search/SearchResults.aspx#!q=Mastering%20Angular&lang=1033))

1. [Components](https://mva.microsoft.com/en-US/training-courses/mastering-angular-part-1-components-17709)
2. [Pipes](https://mva.microsoft.com/en-US/training-courses/mastering-angular-part-2-pipes-17710)
3. [Services](https://mva.microsoft.com/en-US/training-courses/mastering-angular-part-3-services-17711)
4. [Reactive Forms](https://mva.microsoft.com/en-US/training-courses/mastering-angular-part-4-reactive-forms-17728)
5. [Template Forms](https://mva.microsoft.com/en-US/training-courses/mastering-angular-part-5-template-forms-17731)
6. [Form Validation](https://mva.microsoft.com/en-US/training-courses/mastering-angular-part-6-form-validation-17734)
7. [Custom Form Validation](https://mva.microsoft.com/en-US/training-courses/mastering-angular-part-7-custom-form-validation-17736)
8. [Displaying Form Validation Information](https://mva.microsoft.com/en-US/training-courses/mastering-angular-part-8-displaying-form-validation-information-17741)

## TypeScript - tsconfig.json 設定

[TypeScript 2.3: The --strict Compiler Option](https://blog.mariusschulz.com/2017/06/09/typescript-2-3-the-strict-compiler-option)

* 建議一開始開發就開啟 `strict mode`，讓開發過程充分享受強型別的好處
	* 如果到後期才開了話，通常報錯會報到你再把它關掉...

----------

參考資料：

* []()