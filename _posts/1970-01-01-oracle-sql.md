---
layout: post
title: Oracle SQL 指令筆記
date: 1970-01-01 12:00
author: Poy Chang
comments: true
categories: []
---
## 目前系統時間

Oracle 用來取得目前系統時間的函數為 `sysdate`

```sql
SELECT sysdate FROM dual;
```

## 更改目前 session 日期顯示格式

```sql
ALTER SESSION SET NLS_DATE_FORMAT = 'YYYY-MM-DD';
```

## 常用的時間格式

### Daily

* 當天時間 0 點 0 分
	* `to_date( to_char( sysdate, 'dd-mm-yy' ), 'dd-mm-yy' )`
* 當天時間 23:59:59
	* `to_date( to_char( sysdate, 'dd-mm-yy' )||'　23:59:59', 'dd-mm-yy hh24:mi:ss' )`

### Weekly

* 當週的星期日 0 點 0 分，參數 1 表示星期日為一週的第一天, 也可以直接下 'SUNDAY' 為一週的第一天
	* `NEXT_DAY(to_date( to_char( sysdate, 'dd-mm-yy' ), 'dd-mm-yy' ) -7, 1)`
* 當週的星期六的 23:59:59
	* `NEXT_DAY(to_date( to_char( sysdate, 'dd-mm-yy' )||'　23:59:59', 'dd-mm-yy hh24:mi:ss' ) , 1)`

>若發生 `ORA-01846 Not a vaild day of the week` 時，必須將一週的第一天參數改為英文或數字(看原本下的是數字或英文)

### Monthly

* 當月 1 號 0 點 0 分
	* `to_date( '01-'||to_char( sysdate, 'mm-yyyy' ), 'dd-mm-yyyy' )`
* 當月最後一天的 23:59:59
	* `to_date( to_char( last_day(sysdate), 'dd-mm-yyyy' )||'　23:59:59', 'dd-mm-yy hh24:mi:ss' )`

----------

參考資料：

* []() 
   
