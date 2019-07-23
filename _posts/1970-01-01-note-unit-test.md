---
layout: post
title: Unit Test 筆記
date: 1970-01-01 12:00
author: Poy Chang
comments: true
categories: [Note, CSharp, Dotnet]
---

本篇作為筆記用途，記錄 .NET Unit Test 參考資料


## .NET Core Option 模式

在 .NET Core 範本的架構下，你會看到大量使用 Options 模式來處理設定值，如果你的專案中也有使用此模式，可以參考下面的方式來將設定注入至測試方法中。

主要使用 `Microsoft.Extensions.Options.Options` 這個命名空間中的 `Options.Create()` 靜態方法，讓你可以產生出適合的注入設定物件

.Net Core Unit Testing - Mock IOptions<T>
https://stackoverflow.com/questions/40876507/net-core-unit-testing-mock-ioptionst


https://stackoverflow.com/questions/41399526/how-to-initialize-ioptionappsettings-for-unit-testing-a-net-core-mvc-service/41399622
I discovered the answer shortly after posting the question.
use Helper class `Microsoft.Extensions.Options.Options`
Creates a wrapper around an instance of TOptions to return itself as IOptions

```csharp
AppSettings appSettings = new AppSettings() { ConnectionString = "..." };
IOptions<AppSettings> options = Options.Create(appSettings);
MyController controller = new MyController(options);
```

---

參考資料：

- [指令](https://blog.yowko.com/unit-test-initialize-cleanup/)
- [Most Complete MSTest Unit Testing Framework Cheat Sheet](https://www.automatetheplanet.com/mstest-cheat-sheet/)
