---
layout: post
title: 快速找到 RxJS 的 import 路徑的方法 
date: 2017-05-23 21:12
author: Poy Chang
comments: true
categories: [Typescript, Angular, Develop]
---
Angular 專案環境是一個 RxJS friendly 的環境，可以透過 RxJS 幫我們完成很多任務，而如果你和我一樣總是傻傻分不清楚所使用的 RxJS 是來自 operator 和 observable 了話，然後總是背不起來運算子到底在哪裡，可以試試看下面這種查詢方式。

在專案資料夾中， `node_modules/rxjs/` 這裡路徑下，有個 `Rx.d.ts` 檔案，裡面 import 了所有 Rx 方法，在裡面你會看到像下面這段程式碼：

```typescript
...
import './add/observable/using';
import './add/observable/throw';
import './add/operator/catch';
import './add/operator/filter';
...
```

我們只要把所需的運算子，複製該行至你的程式碼裡面，然後把 `./` 改成 `rxjs/` 就 OK 了。

如果覺得這樣還是很麻煩了話，可以直接在你的程式碼上面使用

```
import 'rxjs/Rx';
```

這樣也是 OK 的，只是這樣等於加入所有的運算子。

但是經過我手邊的項目實測，使用 `import 'rxjs/Rx';` 和明確指定相比較，這兩種作法會使的編譯後的
`vendor.bundle.js` 差了將近 500kb，在意檔案大小的朋友們可以測試看看。

## 後記

如果之前有 `import 'rxjs';` 這種寫法了話，執行 `ng lint` 的時候，會提示你這寫法已列入黑名單 `This import is blacklisted, import a submodule instead`，建議改成明確指定（或也可以用 `import 'rxjs/Rx';` 這個方式），這樣才不會報錯。

----------

參考資料：

* [快速找到 RxJS 的 import 路徑的方法](https://forum.angular.tw/t/rxjs-import/356)