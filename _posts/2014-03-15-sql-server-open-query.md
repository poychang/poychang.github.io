---
layout: post
title: SQL Server 使用 OpenQuery，並使用參數傳值
date: 2014-03-15 11:30
author: Poy
comments: true
categories: [Develop, SQL]
---
在SQL Server 中建立好與 Oracle 連接後，可透過下列方式查詢 Oracle DB Server 的資料

```sql
SELECT * FROM OpenQuery（[linkedServerName],'SELECT * FROM dual')
//ex: SELECT * FROM OpenQuery(PROD,'SELECT * FROM dual')
```

但如果你要傳的 SQL 帶有字串時，如下語法

```sql
SELECT * FROM dual WHERE EmplID='12258'
```

則需要透過「轉義字符(')」來控制，因此SQL修改成如下的方式傳值

```sql
SELECT * FROM OpenQuery（PROD,'SELECT * FROM dual WHERE EmplID=''12258''')
```

如果今天你要在傳的 SQL 中再加上參數了話，就會變得複雜了，請參考下列 SQL 來處理

```sql
DECLARE @SQL VARCHAR(1000)
DECLARE @OrgID VARCHAR(10)
SELECT @OrgID = 'SPK1'
SET @SQL = 'SELECT * FROM dual WHERE OrgID ='+@OrgID
SET @SQL = 'SELECT * FROM OpenQuery(PROD, ''' + REPLACE(@SQL, '''', '''''') + ''')'
EXEC(@SQL)
```

透過 REPLACE 函數，將 SQL 字串中的轉義字符調整成所需的樣式
