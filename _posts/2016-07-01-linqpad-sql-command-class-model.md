---
layout: post
title: 使用 LINQPad 快速產生對應 SQL 查詢結果的類別
date: 2016-07-01 11:48
author: Poy
comments: true
categories: [Tools]
---
以下操作是參考 Kevin 大的文章：[Dapper - 使用 LINQPad 快速產生相對映 SQL Command 查詢結果的類別](http://kevintsengtw.blogspot.tw/2015/10/dapper-linqpad-sql-command.html)，所寫的筆記，原文請至 Kevin 大的文章。

----------

使用 ADO.NET 來操作資料時，最痛苦的不外乎就是 DataSet、DataTable 的弱型別，如果改使用強型別的 ORM 來寫程式了話，Intellisense 就會讓你開心很多很多。只是如果要操作的資料，來自於落落長的資料表欄位，那建立對應的 Model 則又是一段痛苦的開始，好在 Kevin 大寫了篇好文章，讓這件事可以輕鬆許多。

## 操作筆記

1. 開啟 LINQPad，然後將 Language 的選項調整為使用 `C# Program`
2. 建立資料庫連線
3. 將[完整程式碼](code)給貼到 LINQPad 裡
4. 輸入我們的 SQL Command
5. 執行後就可以看到產出的相對映類別

![執行結果](http://i.imgur.com/f4ziPc1.png)

## code

```cs
void Main()
{
	// 這邊修改為您要執行的 SQL Command
	var sqlCommand = @"select * from TableName";
	// 在 DumpClass 方法裡放 SQL Command 和 Class 名稱
	this.Connection.DumpClass(sqlCommand.ToString(), "ClassName").Dump();
}

public static class LINQPadExtensions
{
	private static readonly Dictionary<Type, string> TypeAliases = new Dictionary<Type, string> {
		{ typeof(int), "int" },
		{ typeof(short), "short" },
		{ typeof(byte), "byte" },
		{ typeof(byte[]), "byte[]" },
		{ typeof(long), "long" },
		{ typeof(double), "double" },
		{ typeof(decimal), "decimal" },
		{ typeof(float), "float" },
		{ typeof(bool), "bool" },
		{ typeof(string), "string" }
	};

	private static readonly HashSet<Type> NullableTypes = new HashSet<Type> {
		typeof(int),
		typeof(short),
		typeof(long),
		typeof(double),
		typeof(decimal),
		typeof(float),
		typeof(bool),
		typeof(DateTime)
	};

	public static string DumpClass(this IDbConnection connection, string sql, string className = "Info")
	{
		if (connection.State != ConnectionState.Open)
		{
			connection.Open();
		}

		var cmd = connection.CreateCommand();
		cmd.CommandText = sql;
		var reader = cmd.ExecuteReader();

		var builder = new StringBuilder();
		do
		{
			if (reader.FieldCount <= 1) continue;

			builder.AppendFormat("public class {0}{1}", className, Environment.NewLine);
			builder.AppendLine("{");
			var schema = reader.GetSchemaTable();

			foreach (DataRow row in schema.Rows)
			{
				var type = (Type)row["DataType"];
				var name = TypeAliases.ContainsKey(type) ? TypeAliases[type] : type.Name;
				var isNullable = (bool)row["AllowDBNull"] && NullableTypes.Contains(type);
				var collumnName = (string)row["ColumnName"];

				builder.AppendLine(string.Format("\tpublic {0}{1} {2} {{ get; set; }}", name, isNullable ? "?" : string.Empty, collumnName));
				builder.AppendLine();
			}

			builder.AppendLine("}");
			builder.AppendLine();
		} while (reader.NextResult());

		return builder.ToString();
	}
}
```

參考資料：

* [Dapper - 使用 LINQPad 快速產生相對映 SQL Command 查詢結果的類別](http://kevintsengtw.blogspot.tw/2015/10/dapper-linqpad-sql-command.html)
* [Generate C# POCOs from SQL statement in LINQPad](http://www.necronet.org/archive/2012/10/09/generate-c-pocos-from-sql-statement-in-linqpad.aspx/)