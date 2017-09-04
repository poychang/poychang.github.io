---
layout: post
title: 系統命令筆記
date: 1970-01-01 12:00
author: Poy Chang
comments: true
categories: [Tools]
---
Windows 叫做命令提示字元（cmd.exe, Command Line），Unix-like OS 叫做終端機（Terminal），這是一個以文字為主的應用程式，可以查看、處理並且控制你電腦裡的檔案，系統原生提供了很多好用的指令和用法，隨手筆記之。

### Net Use

NET 指令是 Windows NT 中的一個功能強大的工具，可以管理網路環境、各種服務程序的執行和配置、進行用戶和登入管理等。

在使用NET指令時需要注意，它有一些指令是會馬上產生作用並永久儲存的，使用的時候要慎重。

下面對NET指令的不同參數的基本用法做一些初步的介紹：

* NET VIEW 作用：顯示域列表、電腦列表或指定電腦的共享資源列表
* NET USER 作用：增加或更改用戶帳號或顯示用戶帳號信息。該指令也可以寫為 `net users`
* NET USE 作用：連接電腦或中斷連線電腦與共享資源的連接，或顯示電腦的連接信息
* NET TIME 作用：使電腦的時鐘與另一台電腦或域的時間同步
* [Net 指令教學](http://ocean2002n.pixnet.net/blog/post/88734895-%5B%E6%95%99%E5%AD%B8%5D-net%E6%8C%87%E4%BB%A4%E6%95%99%E5%AD%B8)

### 使用 UNC 路徑

在命令提示字元中無法用 `cd` 來取得 UNC（Universal Naming Convention，通用命名慣例）的路徑，可以使用 `pushd` 和 `popd` 來執行

* `pushd <UNC path>` will create a temporary virtual drive and get into it.
* `popd` will delete the temporary drive and get you back to the path you were when you entered pushd.

範例：

```bash
C:\a\local\path> pushd \\network_host\a\network\path
U:\a\network\path> REM a temporary U: virtual drive has been created
U:\a\network\path> popd
C:\a\local\path> REM the U: drive has been deleted
C:\a\local\path>
```

### 其他待整理指令

```bash
# 清除登入帳密
# 清除所有連線
net use * /del /y
# 清除指定連線
net use \\IP\FileShare /del /y
```

```bash
# 指定帳號密碼登入
net use \\IP /USER:帳號 密碼 
```

```bash
# 顯示每個處理程序中的服務
tasklist /svc
```

```bash
# 查看 c 槽磁碟空間
fsutil volume diskfree c:
```

* `wmic` 整台電腦的資訊都可以用此工具來取得，包含所安裝的軟體、Licence
* `runas` 用不同的身分去執行命令
	* 執行範例 `runas /user:USER_NAME program.exe`
	* `PSEXEC` 功能很強，可以取代 `runas`
* `refreshenv` 不重新啟動 cmd 下，更新環境變數（似乎不是每台機器都可以用）
* `df [OPTION] [FILE]` 檢查 Linux 檔案系統的磁碟空間佔用情況
	* 如果沒有檔案名被指定，則所有當前被掛載的檔案系統的可用空間將被顯示
	* 常用命令參數
		* `-a` 全部檔案系統清單
		* `-h` 方便閱讀方式顯示
		* `-H` 等於“-h”，但是計算式，1K=1000，而不是1K=1024
		* `-l` 只顯示本地檔案系統
		* `-T` 檔案系統類型
	* 使用實例 `df -h`

----------

參考資料：

* []()