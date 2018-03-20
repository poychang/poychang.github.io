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

* 至 [.NET 網站](https://www.microsoft.com/net/download/windows)下載相關安裝檔
* 下載並安裝 .NET Core Runtime ([v2.0.6 載點](https://www.microsoft.com/net/download/thank-you/dotnet-runtime-2.0.6-windows-x64-installer))
* 下載並安裝 .NET Core Windows Server Hosting 模組
	* 在 .NET 網站中先點選[All Downloads](https://www.microsoft.com/net/download/all)
	* 選擇你的 .NET Core Runtime
	* 選擇並下載 Windows 的 Server Hosting Installer ([v2.0.6 載點](https://www.microsoft.com/net/download/thank-you/dotnet-runtime-2.0.6-windows-server-hosting-installer))

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

## 執行(發佈)模式

### Framework Dependent Deployment(FDD)

程式碼編譯出來的是 dll，不是預期中的 exe 檔案，必須由電腦安裝的Dotnet Runtime 去執行對應的程式。

* [官方介紹 Framework Dependent Deployment](https://docs.microsoft.com/en-us/dotnet/core/deploying/deploy-with-vs#framework-dependent-deployment)
* [Alan Tsai 的學習筆記 - 了解 Framework Dependent Deployment(FDD) 執行(發佈)模式](http://blog.alantsai.net/2017/10/event-net-conf-workshop-02-1-net-core-console-with-FDD-publish.html)

### Self Contained Deployment(SCD)

要做到自封式部署，可透過修改專案檔 `.csproj` 將裡面的 `PropertyGroup` 改成如下：

```xml
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>netcoreapp2.0</TargetFramework>
    <RuntimeIdentifiers>win-x64;linux-x64</RuntimeIdentifiers>
  </PropertyGroup>
</Project>
```
主要是加上 `RuntimeIdentifiers` 這個設定，上述範例會產生出 Windows x64 和 Linux x64 環境適用的可執行檔。

更多 Runtime IDentifiers 請參考官方文件 [.NET Core RID Catalog](https://docs.microsoft.com/en-us/dotnet/core/rid-catalog)。

* [官方介紹 Self Contained Deployment](https://docs.microsoft.com/en-us/dotnet/core/deploying/deploy-with-vs#simpleSelf)
* [Alan Tsai 的學習筆記 - 了解 Self Contained Deployment(SCD) 執行(發佈)模式](http://blog.alantsai.net/2017/10/event-net-conf-workshop-02-2-net-core-console-with-SCD-publish.html)

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

## Web Depoly

* [下載 Web Deploy 安裝檔](https://www.microsoft.com/zh-tw/download/details.aspx?id=43717)
* [ASP.NET MVC - 使用Web Deploy佈署MVC應用程式到IIS](http://blog.sanc.idv.tw/2014/08/aspnet-web-deploymvciis.html)

## 下載 .NET Framework 離線安裝檔

以下下載連結都來自微軟官方網站：

* .NET Framework 4.7
	* [.NET Framework 4.7.1 x86+x64](https://download.microsoft.com/download/9/E/6/9E63300C-0941-4B45-A0EC-0008F96DD480/NDP471-KB4033342-x86-x64-AllOS-ENU.exe)
	* [.NET Framework 4.7 x86+x64](http://download.microsoft.com/download/D/D/3/DD35CC25-6E9C-484B-A746-C5BE0C923290/NDP47-KB3186497-x86-x64-AllOS-ENU.exe)
* .NET Framework 4.6
	* [.NET Framework 4.6.2 x86+x64](https://download.microsoft.com/download/F/9/4/F942F07D-F26F-4F30-B4E3-EBD54FABA377/NDP462-KB3151800-x86-x64-AllOS-ENU.exe)
	* [.NET Framework 4.6.1 x86+x64](https://download.microsoft.com/download/E/4/1/E4173890-A24A-4936-9FC9-AF930FE3FA40/NDP461-KB3102436-x86-x64-AllOS-ENU.exe)
	* [.NET Framework 4.6 x86+x64](https://download.microsoft.com/download/C/3/A/C3A5200B-D33C-47E9-9D70-2F7C65DAAD94/NDP46-KB3045557-x86-x64-AllOS-ENU.exe)
* .NET Framework 4.5
	* [.NET Framework 4.5.3 x86+x64](http://download.microsoft.com/download/2/8/7/2870C339-3C77-49CF-8DDF-AD6189AB8597/NDP453-KB2969351-x86-x64-AllOS-ENU.exe)
	* [.NET Framework 4.5.2 x86+x64](http://download.microsoft.com/download/E/2/1/E21644B5-2DF2-47C2-91BD-63C560427900/NDP452-KB2901907-x86-x64-AllOS-ENU.exe)
	* [.NET Framework 4.5.1 x86+x64](http://download.microsoft.com/download/1/6/7/167F0D79-9317-48AE-AEDB-17120579F8E2/NDP451-KB2858728-x86-x64-AllOS-ENU.exe)
	* [.NET Framework 4.5 x86+x64](http://download.microsoft.com/download/b/a/4/ba4a7e71-2906-4b2d-a0e1-80cf16844f5f/dotnetfx45_full_x86_x64.exe)
* .NET Framework 4.0
	* [.NET Framework 4.0 x86+x64](http://download.microsoft.com/download/9/5/A/95A9616B-7A37-4AF6-BC36-D6EA96C8DAAE/dotNetFx40_Full_x86_x64.exe)
* .NET Framework 3.5 (包含3.0和2.0)
	* [.NET Framework 3.5 SP1 x86+x64](http://download.microsoft.com/download/2/0/E/20E90413-712F-438C-988E-FDAA79A8AC3D/dotnetfx35.exe)
	* [.NET Framework 3.5 x86+x64](http://download.microsoft.com/download/6/0/f/60fc5854-3cb8-4892-b6db-bd4f42510f28/dotnetfx35.exe)
* .NET Framework 2.0
	* [.NET Framework 2.0 SP2 x64](http://download.microsoft.com/download/c/6/e/c6e88215-0178-4c6c-b5f3-158ff77b1f38/NetFx20SP2_x64.exe)
	* [.NET Framework 2.0 SP2 x86](http://download.microsoft.com/download/c/6/e/c6e88215-0178-4c6c-b5f3-158ff77b1f38/NetFx20SP2_x86.exe)
	* [.NET Framework 2.0 SP1 x64](http://download.microsoft.com/download/9/8/6/98610406-c2b7-45a4-bdc3-9db1b1c5f7e2/NetFx20SP1_x64.exe)
	* [.NET Framework 2.0 SP1 x86](http://download.microsoft.com/download/0/8/c/08c19fa4-4c4f-4ffb-9d6c-150906578c9e/NetFx20SP1_x86.exe)
	* [.NET Framework 2.0 x64](http://download.microsoft.com/download/a/3/f/a3f1bf98-18f3-4036-9b68-8e6de530ce0a/NetFx64.exe)
	* [.NET Framework 2.0 x86](http://download.microsoft.com/download/5/6/7/567758a3-759e-473e-bf8f-52154438565a/dotnetfx.exe)
* .NET Framework 1.1
	* [.NET Framework 1.1 SP1 x86](https://download.microsoft.com/download/8/b/4/8b4addd8-e957-4dea-bdb8-c4e00af5b94b/NDP1.1sp1-KB867460-X86.exe)
	* [.NET Framework 1.1](http://download.microsoft.com/download/a/a/c/aac39226-8825-44ce-90e3-bf8203e74006/dotnetfx.exe)
* .NET Framework 1.0
	* [.NET Framework 1.0](http://download.microsoft.com/download/e/b/2/eb247c2a-e6b3-4694-98a2-b27111d233dd/dotnetredist.exe)

Windows 內建版本

* Windows 10 自帶 .NET Framework 4.6
* Windows 8.1 自帶 .NET Framework 4.5.1
* Windows 8 自帶 .NET Framework 4.5
* Windows 7 自帶 .NET Framework 3.5(2.0/1.1)

可以透過 [.NET Version Detector](http://www.asoft.be/prod_netver.html) 這個軟體來查看電腦安裝了那些 .NET Framework。

.NET Framework 基本上分三類，只要安裝各類中最新版的即可，對應版號如下：

* CLR1 - .NET Framework 1.1
* CLR2 - .NET Framework 3.5
* CLR4 - .NET Framework 4.X

----------

參考資料：

* []()