---
layout: post
title: Dotnet Core 筆記
date: 1970-01-01 12:00
author: Poy Chang
comments: true
categories: [Note, CSharp, Dotnet]
---
本篇作為筆記用途，紀錄 Dotnet Core 參考資料

## 指令

* [dotnet core 命令列介面 (CLI) 工具](https://docs.microsoft.com/zh-tw/dotnet/core/tools/)

### 常用指令

* `dotnet run --verbosity normal`
	* 開發時執行程式，並輸出相關執行的資訊
	* `--verbosity` 設定命令的詳細資訊層級。允許的值為 q[uiet]、m[inimal]、n[ormal]、d[etailed] 及 diag[nostic]

## Entity Framework

### Code First

* 教學文(en)：[使用 EF Core 在 Console App 建立 新資料庫](https://docs.microsoft.com/zh-tw/ef/core/get-started/netcore/new-db-sqlite)
	* 執行以下指令安裝所需套件
		* `dotnet add package Microsoft.EntityFrameworkCore.Sqlite`
		* `dotnet add package Microsoft.EntityFrameworkCore.Design`
		* `dotnet add tool Microsoft.EntityFrameworkCore.Tools.DotNet`
			* 目前還不支援，要手動在 `.csproj` 中增加
			* `<ItemGroup><DotNetCliToolReference Include="Microsoft.EntityFrameworkCore.Tools.DotNet" Version="2.0.0" /></ItemGroup>`
	* 用程式碼表達資料庫及資料表結構，即建立 DbContext
	* 執行以下指令建立資料庫及其資料表
		* `dotnet ef migrations add InitialCreate` 產生 migrations 程式碼
		* `dotnet ef database update` 執行 migrations 程式碼至資料庫

### Data Annotations

教學文(cht)：[建立複雜的 EF Core 資料模型](https://docs.microsoft.com/zh-tw/aspnet/core/data/ef-mvc/complex-data-model)

* `[Key]` 主鍵
* `[Required]` 必要的屬性
* `[DataType(DataType.Date)]` 用來指定比資料庫內建類型更特殊的資料類型
* `[DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]` 屬性用來明確指定日期格式
	* `[DisplayFormat(NullDisplayText = "No grade")]`
* `[StringLength(50, MinimumLength = 3)]`
* `[Range(0, 5)]`
* `[RegularExpression(@"^[A-Z]+[a-zA-Z''-'\s]*$")]`
* `[Column("FirstName")]`

## Http StatusCode

你可以使用 `StatusCode(???)` 回傳任何 HTTP status code。或者可以使用以下方法：

* Success
	* return `Ok()`          ← Http status code 200
	* return `Created()`     ← Http status code 201
	* return `NoContent()`   ← Http status code 204
* Client Error:
	* return BadRequest()`   ← Http status code 400
	* return Unauthorized()` ← Http status code 401
	* return NotFound()`     ← Http status code 404
* 更多方法請參考
	* [ControllerBase](https://docs.microsoft.com/en-us/aspnet/core/api/microsoft.aspnetcore.mvc.controllerbase#Microsoft_AspNetCore_Mvc_ControllerBase)
	* [StatusCodes.cs](https://github.com/aspnet/HttpAbstractions/blob/dev/src/Microsoft.AspNetCore.Http.Abstractions/StatusCodes.cs)

參考資料：[How to return a specific status code and no contents from Controller?](https://stackoverflow.com/questions/37690114/how-to-return-a-specific-status-code-and-no-contents-from-controller)

## 佈署至 IIS

參考資料：[在使用 IIS 的 Windows 上裝載 ASP.NET Core](https://docs.microsoft.com/zh-tw/aspnet/core/publishing/iis?tabs=aspnetcore2x)

重點：

* 安裝 Donet Core Runtime（[載點](https://www.microsoft.com/net/download/windows)）
* 安裝 Dotnet Core Windows Server Hosting 模組（[載點](https://www.microsoft.com/net/download/windows)）

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

## ASP.NET Core 框架揭秘 by Artech

[http://www.cnblogs.com/artech/p/inside-asp-net-core-1.html](http://www.cnblogs.com/artech/p/inside-asp-net-core-1.html)

## ASP.NET Core 原始碼閱讀筆記 by Bill Shooting

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

## .NET 實作支援

參考資料：[.NET Standard](https://docs.microsoft.com/zh-tw/dotnet/standard/net-standard)

下表列出所有 .NET Standard 版本和支援的平台：

<table class="table table-striped">
<thead>
  <tr>
    <th>.NET Standard</th>
	<th>1.0</th>
	<th>1.1</th>
	<th>1.2</th>
	<th>1.3</th>
	<th>1.4</th>
	<th>1.5</th>
	<th>1.6</th>
	<th>2.0</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>.NET Core</td>
	<td>1.0</td>
	<td>1.0</td>
    <td>1.0</td>
	<td>1.0</td>
	<td>1.0</td>
    <td>1.0</td>
	<td>1.0</td>
	<td>2.0</td>
  </tr>
  <tr>
    <td>.NET Framework (含 .NET Core 1.x SDK)</td>
	<td>4.5</td>
	<td>4.5</td>
    <td>4.5.1</td>
	<td>4.6</td>
	<td>4.6.1</td>
    <td>4.6.2</td>
	<td></td>
	<td></td>
  </tr>
  <tr>
    <td>.NET Framework (含 .NET Core 2.0 SDK)</td>
	<td>4.5</td>
	<td>4.5</td>
    <td>4.5.1</td>
	<td>4.6</td>
	<td>4.6.1</td>
    <td>4.6.1</td>
	<td>4.6.1</td>
	<td>4.6.1</td>
  </tr>
</tbody>
</table>

## 開啟 Dotnet 專案時效能低落的問題

使用 Dotnet CLI 時，如果遇到 `dotnet run` 很慢的情形，通常是該專案下有類似 `node_modules` 資料夾存在，這時需要將 `csproj` 內設定排除 `node_modules` 資料夾，這樣才能讓 `dotnet run` 或 `dotnet build` 速度正常
設定項目如下：

```xml
<PropertyGroup>
	<DefaultItemExcludes>$(DefaultItemExcludes);YOUR_PATH\node_modules\**\*</DefaultItemExcludes>
</PropertyGroup>
```

上面程式碼中請修改 `YOUR_PATH` 成你要的路徑。

從[這個提交](https://github.com/aspnet/websdk/commit/771888b40c9947b86af443238ca9427a10bf23a5#diff-81c6e234d77bce12b4c645c597b860cb)可以看出來上述的問題，是因為斜線打反了 所以會抓到 node_modules 資料夾，造成效能低落。

----------

參考資料：

* []()