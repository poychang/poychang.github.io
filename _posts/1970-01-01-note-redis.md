---
layout: post
title: Redis 筆記
date: 1970-01-01 12:00
author: Poy Chang
comments: true
categories: [Note, Develop]
---
本篇作為筆記用途，紀錄 Redis 參考資料

## Error Code 說明

* REF: [ASP.NET Thread Pool 與 Redis Timeout Exception](https://blog.marsen.me/2016/11/21/aspdotnet_threadpool_and_redis/)
* REF: [Investigating timeout exceptions in StackExchange.Redis for Azure Redis Cache](https://azure.microsoft.com/zh-tw/blog/investigating-timeout-exceptions-in-stackexchange-redis-for-azure-redis-cache/)

```
System.TimeoutException: Timeout performing MGET 2728cc84-58ae-406b-8ec8-3f962419f641,
inst: 1,mgr: Inactive, queue: 73, qu=6, qs=67, qc=0, wr=1/1, in=0/0
```

<table class="table table-striped">
<thead>
  <tr>
    <th>Error code</th>
    <th>Details</th>
    <th>範例</th>
    <th>說明</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>inst</td>
    <td>in the last time slice: 0 commands have been issued</td>
    <td>在最後時脈：已發出0個命令</td>
    <td>最後的時脈發出的命令個數</td>
  </tr>
  <tr>
    <td>mgr</td>
    <td>the socket manager is performing “socket.select”, which means it is asking the OS to indicate a socket that has something to do; basically: the reader is not actively reading from the network because it doesn’t think there is anything to do</td>
    <td></td>
    <td>最後的操作命令</td>
  </tr>
  <tr>
    <td>queue</td>
    <td>there are 73 total in-progress operations</td>
    <td>73個正在排隊中的操作</td>
    <td>正在排隊中的操作</td>
  </tr>
  <tr>
    <td>qu</td>
    <td>6 of those are in unsent queue: they have not yet been written to the outbound network</td>
    <td>6個未發送的queue</td>
    <td>未發送的queue</td>
  </tr>
  <tr>
    <td>qs</td>
    <td>67 of those have been sent to the server but a response is not yet available. The response could be: Not yet sent by the server sent by the server but not yet processed by the client.</td>
    <td>67個已發送的queue</td>
    <td>已發送的queue</td>
  </tr>
  <tr>
    <td>qc</td>
    <td>0 of those have seen replies but have not yet been marked as complete due to waiting on the completion loop</td>
    <td>0個已發送未標記完成的queue</td>
    <td>已發送未標記完成的queue</td>
  </tr>
  <tr>
    <td>wr</td>
    <td>there is an active writer (meaning - those 6 unsent are not being ignored) bytes/activewriters</td>
    <td>有 1 個啟用的writer,(意味著qu的工作並沒有被忽略) bytes/activewriters</td>
    <td>bytes/activewriters</td>
  </tr>
  <tr>
    <td>in</td>
    <td>there are no active readers and zero bytes are available to be read on the NIC bytes/activereaders</td>
    <td>0個reader</td>
    <td>bytes/activereaders</td>
  </tr>
  <tr>
    <td colspan="4">For more information, please see this [link](https://gist.github.com/JonCole/db0e90bedeb3fc4823c2)</td>
  </tr>
</tbody>
</table>

## 字型

* [Google Fonts](https://fonts.google.com/)
* [Google Fonts - Early Access](https://fonts.google.com/earlyaccess)
	* [思源黑體 Noto Sans TC](https://fonts.google.com/earlyaccess#Noto+Sans+TC)
		* `@import url(//fonts.googleapis.com/earlyaccess/notosanstc.css);`
		* `font-family: 'Noto Sans TC', sans-serif;`
	* [黑體 cwTeXHei](https://fonts.google.com/earlyaccess#cwTeXHei)
	* [明體 cwTeXMing](https://fonts.google.com/earlyaccess#cwTeXMing)
	* [圓體 cwTeXYen](https://fonts.google.com/earlyaccess#cwTeXYen)
	* [仿宋體 cwTeXFangSong](https://fonts.google.com/earlyaccess#cwTeXFangSong)
	* [楷體 cwTeXKai](https://fonts.google.com/earlyaccess#cwTeXKai)

## 建議

* CSS 子組合選擇器(`E > F`)盡量少用，甚至禁用
	* 因為這會讓 CSS 失去彈性
	* 也代表 HTML 的嵌套過多
	* 此寫法也可能在 Angular 中造成 CSS 樣式無法如預期中運作（常見於使用結構指令時）

----------

參考資料：

* [Sass/SCSS 簡明入門教學](http://blog.kdchang.cc/2016/10/11/sass-scss-tutorial-introduction/)
