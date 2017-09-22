---
layout: post
title: Dotnet Core 筆記
date: 1970-01-01 12:00
author: Poy Chang
comments: true
categories: [CSharp, dotnet]
---
本篇作為筆記用途，紀錄 Dotnet Core 參考資料

* [dotnet core 命令列介面 (CLI) 工具](https://docs.microsoft.com/zh-tw/dotnet/core/tools/)

## 開發時自動編譯

使用 `dotnet watch`，他會監測檔案是否有異動，並自動為我們編譯專案，[官方 README 文件](https://github.com/aspnet/DotNetTools/blob/dev/src/Microsoft.DotNet.Watcher.Tools/README.md)。

將 `Microsoft.DotNet.Watcher.Tools` 加入 `.csproj` 檔案中，程式碼如下；

```xml
<ItemGroup>
 <DotNetCliToolReference Include="Microsoft.DotNet.Watcher.Tools" Version="2.0.0" />
</ItemGroup>
```

設定後執行 `dotnet resotre` 還原相依套件，接著就可以使用 `dotnet watch` 指令來監測專案，基本執行令對照如下：

<table class="table table-striped">
<thead>
  <tr>
    <th>Command</th>
	<th>Command with watch</th>
  </tr>
</thead>
<tbody>
  <tr>
	<td>dotnet run</td>
	<td>dotnet watch run</td>
  </tr>
  <tr>
	<td>dotnet run -f net451</td>
	<td>dotnet watch run -f net451</td>
  </tr>
  <tr>
	<td>dotnet test</td>
	<td>dotnet watch test</td>
  </tr>
</tbody>
</table>

參考資料：

* [Developing ASP.NET Core apps using dotnet watch](https://docs.microsoft.com/en-us/aspnet/core/tutorials/dotnet-watch)

## ASP.NET Core 教學 - Middleware

Blog：[ASP.NET Core 教學 - Middleware](https://blog.johnwu.cc/article/asp-net-core-middleware.html)

1. 建立 Middleware
2. 註冊 Middleware

參考 Gist
* [ASP.NET Core Middleware 存取 SPA 網頁資源](https://gist.github.com/poychang/c98f5b35e11f56ad22ff6de6ab09974d)
* [ASP.NET Core Middleware 限制未授權的 API 呼叫](https://gist.github.com/poychang/60570f178dfb1e4566b45b5b83589b01)

## ASP.NET Core 原始碼閱讀筆記

* [ASP.NET Core 源码阅读笔记(1) ---Microsoft.Extensions.DependencyInjection](http://www.cnblogs.com/bill-shooting/p/5540665.html)
* [ASP.NET Core 源码阅读笔记(2) ---Microsoft.Extensions.DependencyInjection生命周期管理](http://www.cnblogs.com/bill-shooting/p/5550198.html)
* [ASP.NET Core 源码阅读笔记(3) ---Microsoft.AspNetCore.Hosting](http://www.cnblogs.com/bill-shooting/p/SourceCode_Hosting.html)
* [第四篇本来准备写Server的，后来发现功力不够，就搁置了](#)
* [ASP.NET Core 源码阅读笔记(5) ---Microsoft.AspNetCore.Routing路由](http://www.cnblogs.com/bill-shooting/p/5562066.html)

## 計算程式執行時間

需要測量程式執行時間時，可以使用 .NET 提供的 Stopwatch 物件，參考以下寫法：

```csharp
/* 使用 Stopwatch 測量的程式執行時間 */
System.Diagnostics.Stopwatch sw = new System.Diagnostics.Stopwatch();
// ========================================
sw.Reset(); // 碼表歸零
sw.Start(); // 碼表開始計時
/* 要測量的程式區段 */
sw.Stop(); // 碼錶停止
System.Diagnostics.Debug.WriteLine("程式區段執行時間");
System.Diagnostics.Debug.WriteLine(sw.Elapsed.TotalMilliseconds.ToString());    // 輸出執行時間(毫秒)
System.Diagnostics.Debug.WriteLine(sw.Elapsed.TotalSeconds.ToString());         // 輸出執行時間(秒)
// ========================================
```

----------

參考資料：

* []()