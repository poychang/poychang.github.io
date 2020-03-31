---
layout: post
title: Oracle SQL 指令筆記
date: 1970-01-01 12:00
author: Poy Chang
comments: true
categories: [Note]
redirect_to: https://blog.poychang.net/note-oracle-sql/
---

## 目前系統時間

Oracle 用來取得目前系統時間的函數為 `sysdate`

```sql
SELECT sysdate FROM dual;
```

## 資料庫系統版本

```sql
SELECT * FROM V$VERSION;
```

## 更改目前 session 日期顯示格式

```sql
ALTER SESSION SET NLS_DATE_FORMAT = 'YYYY-MM-DD';
```

## 常用的時間格式

### Daily

- 當天時間 0 點 0 分 \* `to_date( to_char( sysdate, 'dd-mm-yy' ), 'dd-mm-yy' )`
- 當天時間 23:59:59 \* `to_date( to_char( sysdate, 'dd-mm-yy' )||' 23:59:59', 'dd-mm-yy hh24:mi:ss' )`

### Weekly

- 當週的星期日 0 點 0 分，參數 1 表示星期日為一週的第一天, 也可以直接下 'SUNDAY' 為一週的第一天 \* `NEXT_DAY(to_date( to_char( sysdate, 'dd-mm-yy' ), 'dd-mm-yy' ) -7, 1)`
- 當週的星期六的 23:59:59 \* `NEXT_DAY(to_date( to_char( sysdate, 'dd-mm-yy' )||' 23:59:59', 'dd-mm-yy hh24:mi:ss' ) , 1)`

> 若發生 `ORA-01846 Not a vaild day of the week` 時，必須將一週的第一天參數改為英文或數字(看原本下的是數字或英文)

### Monthly

- 當月 1 號 0 點 0 分 \* `to_date( '01-'||to_char( sysdate, 'mm-yyyy' ), 'dd-mm-yyyy' )`
- 當月最後一天的 23:59:59 \* `to_date( to_char( last_day(sysdate), 'dd-mm-yyyy' )||' 23:59:59', 'dd-mm-yy hh24:mi:ss' )`

## Oracle 的 SQL 報表出現斷行錯誤

SQL 明明就是正確的，在 TOAD 上可以順利執行，但上傳到 Oracle 之後，卻頻頻出現出現錯誤，或毫無作用。解決的方法是：

- 將多餘的空行刪掉
- 注意 SQL 最後一行有沒有加 `/` 符號

詳細請參考[此篇文章](https://poychang.github.io/oracle-sql-special-characters/)。

## C# System.Data.OracleClient 問題

中文錯誤訊息：

> InvalidOperationException: 嘗試載入 Oracle 用戶端程式庫時傳出 BadImageFormatException。當與具有 32 位元的 Oracle 用戶端元件執行 64 位元模式安裝時，會出現此問題。
> BadImageFormatException: 試圖載入格式錯誤的程式。 (發生例外狀況於 HRESULT: 0x8007000B)

英文錯誤訊息：

> System.InvalidOperationException: Attempt to load Oracle client libraries threw BadImageFormatException. This problem will occur when running in 64 bit mode with the 32 bit Oracle client components installed.
> System.BadImageFormatException: An attempt was made to load a program with an incorrect format. (Exception from HRESULT: 0x8007000B).

原因：

OracleClient 會依 x64/x86 決定適當的 Oracle Client 版本，不必手工切換。因此，如果想在 Windows x64 上使用 `System.Data.Oraclient`，最好 32bit/64bit 兩種 10.2 + 版本的 Oracle Client 都要裝，並確定 `PATH` 變數中二者的 bin 目錄都有在其中。

詳細請參考[此篇文章](https://poychang.github.io/oracle-client-windows/)。

---

參考資料：

- [目前系統時間](#%e7%9b%ae%e5%89%8d%e7%b3%bb%e7%b5%b1%e6%99%82%e9%96%93)
- [資料庫系統版本](#%e8%b3%87%e6%96%99%e5%ba%ab%e7%b3%bb%e7%b5%b1%e7%89%88%e6%9c%ac)
- [更改目前 session 日期顯示格式](#%e6%9b%b4%e6%94%b9%e7%9b%ae%e5%89%8d-session-%e6%97%a5%e6%9c%9f%e9%a1%af%e7%a4%ba%e6%a0%bc%e5%bc%8f)
- [常用的時間格式](#%e5%b8%b8%e7%94%a8%e7%9a%84%e6%99%82%e9%96%93%e6%a0%bc%e5%bc%8f)
  - [Daily](#daily)
  - [Weekly](#weekly)
  - [Monthly](#monthly)
- [Oracle 的 SQL 報表出現斷行錯誤](#oracle-%e7%9a%84-sql-%e5%a0%b1%e8%a1%a8%e5%87%ba%e7%8f%be%e6%96%b7%e8%a1%8c%e9%8c%af%e8%aa%a4)
- [C# System.Data.OracleClient 問題](#c-systemdataoracleclient-%e5%95%8f%e9%a1%8c)
