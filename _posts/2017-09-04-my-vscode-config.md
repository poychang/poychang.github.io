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

首先可以使用快速鍵 <kbd>Ctrl</kbd> + <kbd>,</kbd> 開啟 `settings.json` 使用者設定檔，或從選單列中點選`檔案` > `喜好設定` > `設定`。

## Global 常用設定

* `editor.fontFamily` 設定字型偏好
    * 唯一選擇 [Source Code Pro](https://github.com/adobe-fonts/source-code-pro)
    * 連字符號字型可選擇 [Hasklig](https://github.com/i-tu/Hasklig) 或 [FiraCode](https://github.com/tonsky/FiraCode) 擇一使用(個人偏好 Hasklig)
    * 設定值：`"editor.fontFamily": "Hasklig, 'Source Code Pro', Consolas, 'Microsoft JhengHei', 'Courier New', monospace",`
* `editor.fontLigatures` 開啟連字符號
    * Hasklig 字型有提供連字符號的功能，例如 `=>` 會變成箭頭符號
    * 設定值：`"editor.fontLigatures": true,`
* `editor.formatOnSave` 存檔時自動排版
    * 可用 `Alt` + `Shift` + `F` 執行自動排版，設定這個選項後，連快速鍵都省了
    * 設定值：`"editor.formatOnSave": true,`
* `editor.renderWhitespace` 顯示空白字元
    * 設定值：`"editor.renderWhitespace": "boundary",`
* `editor.wordWrap` 斷行
    * 設定值：`"editor.wordWrap": "on",`
* `files.autoSave` 自動儲存
    * 設定值：`"files.autoSave": "onWindowChange",`
* `files.autoGuessEncoding` 猜測檔案編碼
    * 解決 VS Code 不支援判讀檔案是 ASCII 編碼的問題
    * 設定值：`"files.autoGuessEncoding": true,`
* `files.defaultLanguage` 設定預設文件語言類型
    * 想要把 VS Code 當作預設的 Markdown 編輯器，一定不能錯過這個設定
    * 設定值：`"files.defaultLanguage": "markdown",`
* `files.insertFinalNewline` 新增一行作為檔案結束
    * 開發 Python 時建議開啟([PEP 8](https://www.python.org/dev/peps/pep-0008/#id21))
    * 設定值：`"files.insertFinalNewline": true,`
* `typescript.referencesCodeLens` 開啟 TypeScript 專案的 CodeLens
    * 設定值：`"typescript.referencesCodeLens.enabled": true,`
* `terminal.integrated.shell.windows` 指定使用哪種終端機
    * CMD `"C:\\Windows\\sysnative\\cmd.exe"`
    * PowerShell `"C:\\Windows\\sysnative\\WindowsPowerShell\\v1.0\\powershell.exe"`
    * Bash on Ubuntu `"C:\\Windows\\sysnative\\bash.exe"`

## Workspace 常用設定

我們也可以針對工作目錄下做額外的設定

* `files.exclude` 排除指定檔案
    * `.spec` 是前端專案常見的測試檔，可藉此設定暫時隱藏，讓工作目錄乾淨一些
    * 設定值：`"files.exclude": { "**/*.spec.*": true },`

## Code Snippet

自訂程式碼片段（snippet）能夠幫助我們在寫程式時，快速產生程式碼，加速寫程式的速度。

* Windows 版，自訂程式碼片段的功能位置：`檔案` > `喜好設定` > `使用者程式碼片段`
    * 自訂程式碼片段會放在 `C:\Users\12258\AppData\Roaming\Code\User\snippets`
* Mac 版，自訂程式碼片段的功能位置：`Code` > `喜好設定` > `使用者程式碼片段`

程式碼基本架構如下：

```json
"程式碼片段名稱": {
  "prefix": "程式碼片段的縮寫",
  "body": [
    "程式碼片段內容",
    "（使用 $1 表示插入後游彪停留的位置）"
  ],
  "description": "描述程式碼片段的用途"
}
```

>官方說明文件請參考[Creating your own Snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets)。

----------

參考資料：

* [Visual Studio Code User and Workspace Settings](https://code.visualstudio.com/docs/getstarted/settings)
* [Customize VS Code - Vedio](https://code.visualstudio.com/docs/introvideos/configure)
