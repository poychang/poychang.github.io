---
layout: post
title: Visual Studio 筆記
date: 1970-01-01 12:00
author: Poy Chang
comments: true
categories: [Note, Tools]
---
本篇作為書籤用途，紀錄網路上的 Visual Studio 相關資訊

## 快捷鍵

<table class="table table-striped">
<thead>
  <tr>
    <th>快速鍵</th>
    <th>說明</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><kbd>Ctrl</kbd> + <kbd>]</kbd> , <kbd>S</kbd></td>
    <td>可快速跳到 Solution Explorer 該檔的所在位置</td>
  </tr>
  <tr>
    <td><kbd>Alt</kbd> + <kbd>上下的方向鍵</kbd></td>
    <td>快速將程式碼上、下搬動</td>
  </tr>
  <tr>
    <td><kbd>Ctrl</kbd> + <kbd>K</kbd>, <kbd>D</kbd></td>
    <td>格式化文件</td>
  </tr>
  <tr>
    <td><kbd>Ctrl</kbd> + <kbd>Space</kbd></td>
    <td>IntelliSense 程式碼自動完成</td>
  </tr>
  <tr>
    <td><kbd>Ctrl</kbd> + <kbd>K</kbd>, <kbd>C</kbd></td>
    <td>註解程式碼</td>
  </tr>
  <tr>
    <td><kbd>Ctrl</kbd> + <kbd>K</kbd>, <kbd>U</kbd></td>
    <td>取消註解程式碼</td>
  </tr>
  <tr>
    <td><kbd>Ctrl</kbd> + <kbd>R</kbd>, <kbd>R</kbd></td>
    <td>重新命名</td>
  </tr>
  <tr>
    <td><kbd>F12</kbd></td>
    <td>移至定義</td>
  </tr>
  <tr>
    <td><kbd>Ctrl</kbd> + <kbd>-</kbd></td>
    <td>搭配 `F12` 移至定義，此為返回至原位置</td>
  </tr>
</tbody>
</table>

## 必裝套件

* [Whack Whack Terminal](https://marketplace.visualstudio.com/items?itemName=DanielGriffen.WhackWhackTerminal)
	* 終端機模擬器，讓你可以在 Visual Studio 中開啟各種終端機，如 command prompt、powershell、WSL bash
	* 快速鍵 `Ctrl` + `\`, `Ctrl` + `\`
* [CodeMaid](https://marketplace.visualstudio.com/items?itemName=SteveCadwallader.CodeMaid)
	* 自動程式排版，快速鍵 `Ctrl` + `M`, `空白鍵`
	* 檢視各個 Method 的循環複雜度
* [Visual Studio Spell Checker](https://marketplace.visualstudio.com/items?itemName=EWoodruff.VisualStudioSpellCheckerVS2017andLater)
	* 檢查程式碼英文拼寫是否正確
	* [介紹文](https://poychang.github.io/visual-studio-spell-checker/)
* [Web Essentials](http://vswebessentials.com/)
	* Web Essentials 是增強 Visual Studio 在 Web、CSS、JavaScript開發上的方便性
	* 再加裝 [Web Extension Pack](https://visualstudiogallery.msdn.microsoft.com/f3b504c6-0095-42f1-a989-51d5fc2a8459?SRC=Home) 裡面包含很多好用的工具
		* Browser Sync for Visual Studio 可以使用 `CTRL` + `Alt` + `Enter` 來啟動
* [C# Essentials](https://visualstudiogallery.msdn.microsoft.com/a4445ad0-f97c-41f9-a148-eae225dcc8a5)
* [SideWaffle Templates for Visual Studio 2015](http://sidewaffle.com/)
* [Productivity Power Tools](https://visualstudiogallery.msdn.microsoft.com/d0d33361-18e2-46c0-8ff2-4adea1e34fef)
	* 可以取代已經不維護的 VSCommands for Visual Studio
* [Developer Assistant](https://visualstudiogallery.msdn.microsoft.com/a1166718-a2d9-4a48-a5fd-504ff4ad1b65)
	* 寫程式時，IntelliSense列出Method外，還會列出Sample Code
* [tangible T4 Editor 2.3.0 plus modeling tools](http://t4-editor.tangible-engineering.com/T4-Editor-Visual-T4-Editing.html)
	* 程式碼產生器編輯器
* [Force UTF8](https://visualstudiogallery.msdn.microsoft.com/d94a3ad9-0549-4641-89b7-d858407bd6e9)
	* 存檔時自動轉UTF8 with BOM
* ~~[VSCommands for Visual Studio](http://vscommands.squaredinfinity.com/)~~(已停止維護)
	* 利用VSCommands 可以讓 Visual Studio 變的更聰明些，因為此套件功能相當的多，筆者無法一一介紹，所以就這在裡介紹一些較為亮眼的功能。
* [Snippet Designer](https://github.com/mmanela/SnippetDesigner)
	* 用更人性化的方式管理我們常用的或內建的 Code Snippet 程式碼片段
* [Glyphfriend](https://visualstudiogallery.msdn.microsoft.com/5fd24afb-b3b2-4cec-9b03-1cfcec6123aa?SRC=Home)
	* 讓 Intellisense 顯示方便辨識的圖示
* [JavaScript Snippet Pack](https://visualstudiogallery.msdn.microsoft.com/423eb4a3-215f-4a8f-9287-1512618ffda3?SRC=Home)
	* JavaScript 的 Code Snippet
* [Macros for Visual Studio ](https://marketplace.visualstudio.com/items?itemName=VisualStudioPlatformTeam.MacrosforVisualStudio)
	* [DEMO 大的介紹文](http://demo.tc/post/833#.WGomoFFb9cM.facebook)
	* 由於巨集腳本沒有同步功能，建議參考「DEMO 大的介紹文」設定透過 OneDrive 同步
* [Snippet Designer](https://marketplace.visualstudio.com/items?itemName=vs-publisher-2795.SnippetDesigner)
	* 自己寫一個 Code Snippets Template 來產生自己要的程式碼區段
	* [介紹文 - Code Snippets 產生常用程式碼 Template](http://limitedcode.blogspot.tw/2015/10/visual-studio-code-snippetstemplate.html)

## 圖示描述

[類別檢視和物件瀏覽器圖示](https://msdn.microsoft.com/zh-tw/library/y47ychfe.aspx)

[類別檢視] 和 [物件瀏覽器] 會顯示代表程式碼實體 (Entity) 的圖示，例如：命名空間 (Namespace)、類別 (Class)、函式和變數。下表說明這些圖示：

![Visual Studio 圖示描述](http://i.imgur.com/GkxBvNG.jpg)

## 輕量型載入

Visual Studio 2017 的方案屬性頁中，有個`輕量型載入`的選項，可以讓你在開啟方案時，不用一次把底下所有的專案都開啟

![輕量型載入](http://i.imgur.com/kpWaP6S.png)

等到你真的要開啟該專案的時候，才會真的去載入專案，藉此可以加快開啟方案的速度

![開啟專案時](http://i.imgur.com/W6LATdB.png)

## 關閉 npm 套件自動還原

當使用 Visual Studio 開啟前端專案的時候，Visual Studio 會很貼心的自動幫你把 bower 和 npm 套件自動還原，不過這些套件通常都很多，下載安裝會需要一段時間，如果你想要關閉這個行為了話，可以參考下面步驟：

1. 工具列上的 [工具] > [選項]
2. [專案和方案] > [Web Package Management] > [套件還原]
3. 將 [在專案開啟時還原] 改成 `false` (參考下圖)

![套件還原](https://i.imgur.com/xRgrLqI.png)

----------

參考資料：

* []()