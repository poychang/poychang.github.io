---
layout: post
title: 系統命令筆記
date: 1970-01-01 12:00
author: Poy Chang
comments: true
categories: [Note, Tools]
---
Windows 叫做命令提示字元（cmd.exe, Command Line），Unix-like OS 叫做終端機（Terminal），這是一個以文字為主的應用程式，可以查看、處理並且控制你電腦裡的檔案，系統原生提供了很多好用的指令和用法，隨手筆記之。

## 命令列也有快捷鍵

![命令列快捷鍵](https://i.imgur.com/WSiW3Eb.png)

個人覺得必學的有：

* `Ctrl` + `←` 或 `→` 以字組作為跳動距離來移動游標
* `Ctrl` + `A` 移動游標至最前面
* `Ctrl` + `E` 移動游標至最後面
* `Alt` + `B` 移動游標至該字組的最前面
* `Alt` + `F` 移動游標至該字組的最後面

REF:[Moving efficiently in the CLI](https://clementc.github.io/blog/2018/01/25/moving_cli/)

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

### 刪除 Mac OS 自動生成隱藏檔案（._DS_Store）

Mac OS 會自動為每個可以由 GUI 圖像界面瀏覽的資料夾生成隱藏檔案 `._DS_Store`，用來記往資料夾的個別設定。

每次把隨身碟借給 Mac OS 的使用者後，在 Windows 就會看到一堆這種檔案，這時候就可以透過以下指令，一次把所有指定的檔案刪除掉。這指令當然也可以用來刪除 Windows 上的快取縮圖 `Thumbs.db`。

```bash
del /s /q /f /a .DS_STORE
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
* `set` 列出所有環境變數，讀取指定環境變數方法如下
	* cmd 可使用 `%VARIABLES_NAME%`
	* PowerShell 可使用 `$Env:VARIABLES_NAME`
* `df [OPTION] [FILE]` 檢查 Linux 檔案系統的磁碟空間佔用情況
	* 如果沒有檔案名被指定，則所有當前被掛載的檔案系統的可用空間將被顯示
	* 常用命令參數
		* `-a` 全部檔案系統清單
		* `-h` 方便閱讀方式顯示
		* `-H` 等於“-h”，但是計算式，1K=1000，而不是1K=1024
		* `-l` 只顯示本地檔案系統
		* `-T` 檔案系統類型
	* 使用實例 `df -h` 可以查看各個硬碟剩餘空間

## 修改 Windows 路由表

* 使用 `ipconfig /all` 查看網卡信息
* 使用 `route print` 命令查看路由表信息
	* Active Routes ：活動的路由
	* Network destination ：目的網段
	* Netmask ：子網掩碼
	* Gateway ：閘道
	* Interface: 接口，接口定義了針對特定的網絡目的地址，本地計算機用於發送數據包的網絡接口
	* Metric: 跳數，跳數用於指出路由的成本，通常情況下代表到達目標地址所需要經過的跳躍數量，一個跳數代表經過一個路由器。跳數越低，代表路由成本越低，優先級越高
	* Persistent Routes ：手動配置的靜態固化路由

### 雙網卡設定案例

網路環境：

* 有線：可連接公司內網，不能連接 Internet，預設閘道為 172.16.2.1
* 無線：可連接 Internet，不能連接公司內網，預設閘道為 192.168.0.1

目標：同時連接兩個網路，並自動選擇路由，實現內外網都可以存取

```bash
# 刪除預設設定
route delete 0.0.0.0

# 外網路由全走無線
route -p add 0.0.0.0 mask 0.0.0.0 192.168.0.1

# 公司內網全部在 172.16.*.* 網段，增加此路由設定
route -p add 172.16.0.0 mask 255.255.0.0 172.16.2.1

# 重新啟動電腦
shutdown -r -t 0
```

* route 指令加上 `-p` 代表加入永久的路由設定，不會因為重開機而清除

----------

參考資料：

* []()