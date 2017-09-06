---
layout: post
title: 偏好的 Visual Studio Code 設定檔
date: 2017-09-04 17:14
author: Poy Chang
comments: true
categories: [Tools]
---
Visual Studio Code 提供了極大的彈性讓我們自訂想要的編輯器樣式，端看使用者設定（User Setting）中，就超過 800 項設定可以讓開發者自由調整，而且還有擴充套件能夠增強 VS Code 的開發能力。

>這篇主要是我個人偏好的設定

首先可以使用快速鍵 `Ctrl` + `,` 開啟 `settings.json` 使用者設定檔，或從選單列中點選`檔案` > `喜好設定` > `設定`。

常用設定列表如下：

* `editor.fontFamily` 設定字型偏好
	* 使用 [Hasklig](https://github.com/i-tu/Hasklig) 和 [Source Code Pro](https://github.com/adobe-fonts/source-code-pro) 這兩款字型
* `editor.fontLigatures` 開啟連字符號
	* 設定值：`true`
	* Hasklig 字型有提供連字符號的功能，例如 `=>` 會變成箭頭符號
* `editor.formatOnSave` 存檔時自動排版
	* 設定值：`true`
	* 可用 `Alt` + `Shift` + `F` 執行自動排版，設定這個選項後，連快速鍵都省了
* `editor.renderWhitespace` 顯示空白字元
	* 設定值：`boundary`
* `editor.wordWrap` 斷行
	* 設定值：`true`
* `files.autoSave` 自動儲存
	* 設定值：`onWindowChange`
* `files.autoGuessEncoding` 猜測檔案編碼
	* 設定值：`true`
	* 解決 VS Code 不支援判讀檔案是 ASCII 編碼的問題
* `files.insertFinalNewline` 新增一行作為檔案結束
	* 設定值：`true`
	* 開發 Python 時建議開啟([PEP 8](https://www.python.org/dev/peps/pep-0008/#id21))
* `typescript.referencesCodeLens` 開啟 TypeScript 專案的 CodeLens
	* 設定值：`true`
* `terminal.integrated.shell.windows` 指定使用哪種終端機
	* 設定值：`"C:\\Windows\\sysnative\\WindowsPowerShell\\v1.0\\powershell.exe"`
	* 預設是使用 `"C:\\Windows\\sysnative\\cmd.exe"`

----------

參考資料：

* [Visual Studio Code User and Workspace Settings](https://code.visualstudio.com/docs/getstarted/settings)
* [Customize VS Code - Vedio](https://code.visualstudio.com/docs/introvideos/configure)