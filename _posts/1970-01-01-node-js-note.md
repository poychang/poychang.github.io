---
layout: post
title: Node.js 筆記
date: 1970-01-01 12:00
author: Poy
comments: true
categories: []
---

官方網站：[https://nodejs.org/](https://nodejs.org/)

# 簡介

Node.js是一個開放原始碼、跨平台的、可用於伺服器端和網路應用的執行環境。Node.js應用JavaScript語言寫成，在Node.js執行時執行。

# 技術特性

*	Node.js以單執行緒執行，使用非阻塞I/O呼叫，這樣既可以支援數以萬計的並行連線，又不會因多執行緒本身的特點而帶來麻煩。
*	Node.js將其註冊到作業系統中，這樣可以及時注意到新連線的產生。
*	與其他伺服器程式不同的是，Node.js不使用行程或執行緒處理連線，而是採用事件迴圈來處理並行連線。

## 基本程式範例

參考資料：[https://zh.wikipedia.org/wiki/Node.js](https://zh.wikipedia.org/wiki/Node.js)

用Node.js撰寫的HTTP Server版hello world範例：

```javascript
var http = require('http');
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
}).listen(8000);

console.log('Server running at http://127.0.0.1:8000/');
```

另一個簡單的TCP伺服器範例，監聽（Listening）埠7000並輸出 (echo)之前輸入的訊息：

```javascript
var net = require('net');
net.createServer(function (stream) {
    stream.write('hello\r\n');

    stream.on('end', function () {
        stream.end('goodbye\r\n');
    });

    stream.pipe(stream);
}).listen(7000);
```

## 處理CORS連線

參考資料：

*	[expressjs/cors](https://github.com/expressjs/cors)套件
*	client範例程式碼：[node-cors-client](https://github.com/TroyGoode/node-cors-client)
*	server範例程式碼：[node-cors-server](https://github.com/TroyGoode/node-cors-server)
*	使用JQuery演示CORS之DEMO網頁：[What happens without CORS?](http://node-cors-client.herokuapp.com/)

```javascript
/*jslint nodejs: true*/
'use strict';
var express = require('express')
  , cors = require('cors')
  , port = process.env.PORT || 3000
  , app = express();

app.use(cors());

app.get('/products/:id', function(req, res, next){
  res.json({msg: 'This is CORS-enabled for all origins!'});
});

app.listen(port, function(){
  console.log('CORS-enabled web server listening on port ' + port);
}); 
```

## 檢查檔案是否存在

參考資料：[Check synchronously if file/directory exists in Node.js](http://stackoverflow.com/questions/4482686/check-synchronously-if-file-directory-exists-in-node-js)
使用node.js的API：[fs.access](https://nodejs.org/api/fs.html#fs_fs_access_path_mode_callback)
注意！使用此方法時，若被檢查的檔案不存在，將回傳error，適合用在你期待該檔案必須存在時

```javascript
var fs = require('fs');
try {
    fs.accessSync(path, fs.F_OK);
    // Do something
} catch (e) {
    // It isn't accessible
}
// Or
fs.access(path, fs.F_OK, function(err) {
    if (!err) {
        // Do something
    } else {
        // It isn't accessible
    }
});
```

## 背景執行

參考資料：[node.js as a background service](http://stackoverflow.com/questions/4018154/node-js-as-a-background-service)

推薦的解決方案：

*	[Systemd (Linux)](http://stackoverflow.com/a/29042953/339122)
*	[Launchd (Mac)](http://stackoverflow.com/a/25998406/339122)
*	[node-windows (Windows)](http://stackoverflow.com/a/15616912/339122)
*	[PM2 (Node.js)](http://stackoverflow.com/a/17005935/339122)

Linux 解法：Linix系統幾乎都內建`systemd`，擁有處理各項任務的能力，這讓你不再需要`forever`、`monit`等額外的程式來控制node程式

步驟：

1.建立`myapp.service`檔案（可以將myapp替換成你想要的名稱）

2.內容包含如下：

```
[Unit]
Description=My app

[Service]
ExecStart=/var/www/myapp/app.js
Restart=always
User=nobody
Group=nobody
Environment=PATH=/usr/bin:/usr/local/bin
Environment=NODE_ENV=production
WorkingDirectory=/var/www/myapp

[Install]
WantedBy=multi-user.target
```

3.將檔案複製至`/etc/systemd/system`

4.Start it with systemctl start myapp.

5.Enable it to run on boot with systemctl enable myapp.

6.See logs with journalctl -u myapp

More details at: How we deploy node apps on Linux, 2016 edition