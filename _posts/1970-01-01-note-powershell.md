---
layout: post
title: PowerShell 筆記
date: 1970-01-01 12:00
author: Poy Chang
comments: true
categories: [Note, Tools]
---

Windows PowerShell 是以 .NET Framework 為基礎所建置，而且是以工作為基礎的命令列殼層和指令碼語言；專為系統管理員和進階使用者所設計，可快速自動化管理多個作業系統 (Linux、OSX、Unix 和 Windows)，以及與在這些作業系統上執行之應用程式相關的程序。

## 版本

PowerShell 的執行環境是有分版本的，結至 2018 年最新版本為 6.1，你可以在 PowerShell 中執行 `Get-Host` 命令來確認您的本機 PowerShell 版本。

最原始的設計中，指令檔的副檔名是會區分版本的，例如 `.ps1`、`.ps2`，但為了讓之後的使用上能兼容舊版本，所以全部統一使用 `.ps1` 作為 PowerShell 的指令檔附檔名。

版本不同所提供的功能或指令就會有些不同，因此如果你要確保指令檔是在某特定版本下執行時，在撰寫 `.ps1` 檔的時候，建議在開頭加上 `#REQUIRES` 並註明該指令碼所使用的版本，例如：

```ps1
#REQUIRES -Version 2

param([string]$BasePath="", [string]$FolderName="")
$location="D:\" + $BasePath + "\" + $FolderName
Set-Location $location
# ignore...
<# Version 2 Comment #>
```

REF: [CTP: PowerShell Versioning](https://blogs.msdn.microsoft.com/powershell/2007/11/02/ctp-versioning/)

## 常用指令

- `$PSVersionTable.PSVersion` 查看 PowerShell 版本
- `Get-ChildItem Env:` 查看環境變數 \* `$Env:USERPROFILE` 查看環境變數中 USERPROFILE 的內容值

## 載入設定檔

PowerShell 會自動從以下這 4 個檔名路徑依序載入設定檔，如果找不到檔案也會自動跳過：

1. `%windir%\system32\WindowsPowerShell\v1.0\profile.ps1`
   - 這個設定檔 `profile.ps1` 會載入到所有使用者與所有 shell 執行環境
2. `%windir%\system32\WindowsPowerShell\v1.0\Microsoft.PowerShell_profile.ps1`
   - 這個設定檔 `Microsoft.PowerShell_profile.ps1` 會載入到所有使用者，但僅限於使用 Microsoft.PowerShell 的 shell 執行環境
3. `%UserProfile%\Documents\WindowsPowerShell\profile.ps1`
   - 這個設定檔 `profile.ps1` 會載入到目前登入的使用者，且會套用到該使用者所有 shell 執行環境
4. `%UserProfile%\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1`
   - 這個設定檔 `Microsoft.PowerShell_profile.ps1` 會載入到目前登入的使用者，但僅限於使用 Microsoft.PowerShell 的 shell 執行環境

從上面路徑可以分成兩類：

- `%windir%` 套用至所有使用者
- `%UserProfile%` 套用至當前使用者

如果你有使用 OneDrive，可以將 `%UserProfile%` 改使用 OneDrive 下的設定檔，使設定檔可以透過雲端共用。

## 推薦安裝的套件

安裝時注意安裝的環境設定，如果要安裝給當前登入者使用，請在後面加上 `-Scope CurrentUser` 參數設定，若是要給所有使用者使用，則使用 `-Scope AllUsers`，一般建議安裝給當前登入者即可。

- `posh-git` 在 PowerShell 命令列上呈現 Git 狀態資訊
  _ [dahlbyk/posh-git](https://github.com/dahlbyk/posh-git)
  _ 安裝指令：`Install-Module posh-git -Scope CurrentUser`
- `Get-ChildItemColor` 輸出帶有顏色標示的目錄資訊
  _ [joonro/Get-ChildItemColor](https://github.com/joonro/Get-ChildItemColor)
  _ 安裝指令：`Install-Module Get-ChildItemColor -Scope CurrentUser` \* 建議別名：`Set-Alias ll Get-ChildItemColor -option AllScope`

---

參考資料：

- [官方教學文件](https://docs.microsoft.com/zh-tw/powershell/scripting/powershell-scripting)
- [強而有力的 Windows PowerShell 系列](http://ithelp.ithome.com.tw/users/20005121/ironman/54)
- [如何在 Powershell 開啟時自動引入常用的 ps1 指令檔腳本](https://msdn.microsoft.com/zh-tw/library/dn464004.aspx)
