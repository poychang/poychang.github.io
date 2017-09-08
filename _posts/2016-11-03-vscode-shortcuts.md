---
layout: post
title: 官方 Visual Studio Code 快速鍵一覽表
date: 2016-11-03 14:10
author: Poy Chang
comments: true
categories: [Develop, Tools]
---
Visual Studio Code 真的是很優秀，官方提供了值得收藏的 Visual Studio Code 快速鍵一覽表，Windows、Mac、Linux 都有，快來收藏吧 :)

## 官方快速鍵一覽表

* [下載 Visual Studio Code shortcuts for Windows](http://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)
* [下載 Visual Studio Code shortcuts for MacOS](http://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
* [下載 Visual Studio Code shortcuts for Linux](http://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf)

另外官方也有提供方常方便的快速鍵編輯介面，可以使用快速鍵 `Ctrl` + `K` `Ctrl` + `S` 開啟編輯介面，然後點選左側的筆做修改。更多資訊請參考[此官方連結](https://code.visualstudio.com/docs/getstarted/keybindings)。

![Keyboard Shortcuts Editor](https://i.imgur.com/LEoMq4K.png)

## 好用的重構快速鍵

John Papa 寫了一篇超值得記憶的重構快速鍵文章，但是是以 Mac 鍵盤為主的，下面對應成 Windows 的，邊寫邊記憶！

* `alt` + `↑` 或 `alt` + `↓` 快速移動整行程式碼
* `F8` 移至下一個錯誤或警告
	* 當一個檔案裡出現多個錯誤時，可以透過此快速鍵，依序瀏覽每一個錯誤或警告
* `F12` 移至定義
	* 當想要查看該變數或方法的完整定義程式碼時，可以使用此快速鍵，移至該定義的檔案
* `alt` + `F12` 查看定義
	* 和移至定義很像，但不會移到該檔案，會在同一個視窗中開啟快速瀏覽視窗，如下圖

![查看定義](http://i.imgur.com/Qo6xoz0.png)

* `shift` + `F12` 尋找所有參考
	* 當想要查看所有參考到此方法或變數的位置時，可用此快速鍵開啟快速瀏覽視窗，從中找到所有參考的位置
	* 補充：超好用的 VSCode 設定 `References CodeLens`，可以在全域的設定檔中設定 `typescript.referencesCodeLens.enabled` 為 `ture`，這樣程式碼上面就會有參考位置及數量
* `ctrl` + `F2` 修改當前檔案的變數或函數名稱
	* 按此快速鍵可選取當前檔案中，所有同字樣的變數或方法
	* **注意！**此功能不分大小寫
* `alt` + `CLICK` 滑鼠選取多個位置
	* 手動選擇多個位置時超好用
* `F2` 專案內重新命名
	* 會重新命名該專案內，所有有用到該變數或方法的名稱
	* 重構時好用！

## 個人其他常用的快速鍵

* `alt` + `shift` + `f` 快速美化程式碼
	* 不要在自己排版了，讓快速鍵幫你吧
	* 補充：VSCode 設定擋裡，有一個 `editor.formatOnSave` 可以設定成 `true` 這樣會在每次存檔時，自動執行自動排版功能
* `Ctrl` + `\` 分割視窗
* `Ctrl` + `W` 關閉檔案
* `Ctrl` + `K` `Ctrl` + `W` 關閉所有檔案
* `Ctrl` + `Alt` + `up`/`down` 垂直選取
* `ctrl` + `K`, `ctrl` + `0` 摺疊所有程式碼
* `ctrl` + `K`, `ctrl` + `[n]` 摺疊至第 n 層的程式碼
* `ctrl` + `K`, `ctrl` + `J` 取消摺疊所有程式碼 

## 官方寫的 VS Code 技巧清單（English）

* [VS Code Tips and Tricks](https://github.com/Microsoft/vscode-tips-and-tricks)

----------

### 官方快速鍵一覽表轉成圖檔，作為備份

* Visual Studio Code shortcuts for Windows

<a href="http://i.imgur.com/WNRXFVD.png" target="_blank">
  ![keyboard-shortcuts-windows](http://i.imgur.com/WNRXFVD.png)
</a>

* Visual Studio Code shortcuts for MacOS

<a href="http://i.imgur.com/faBPEM0.png" target="_blank">
  ![keyboard-shortcuts-macos](http://i.imgur.com/faBPEM0.png)
</a>

* Visual Studio Code shortcuts for Linux

<a href="http://i.imgur.com/929wLDP.png" target="_blank">
  ![keyboard-shortcuts-linux](http://i.imgur.com/929wLDP.png)
</a>

----------

參考資料：

* [Visual Studio Code Official Website](http://code.visualstudio.com/)
* [Refactoring with Visual Studio Code](https://johnpapa.net/refactoring-with-visual-studio-code/)
* [Basic Editing](https://code.visualstudio.com/docs/editor/codebasics#_folding)
* [VS Code Tips and Tricks](https://github.com/Microsoft/vscode-tips-and-tricks)