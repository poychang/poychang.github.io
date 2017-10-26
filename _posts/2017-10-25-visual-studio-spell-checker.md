---
layout: post
title: 在 Visual Studio 中檢查拼字是否正確
date: 2017-10-25 23:15
author: Poy Chang
comments: true
categories: [Tools]
---
寫程式真的需要些英文底子，畢竟程式碼大多數是用英文寫的，你是否有在 Visual Studio 中寫程式時，老是有英文拼字拼錯的困擾呢？這裡有個優秀的擴充套件可以幫助你！

[Visual Studio Spell Checker](https://marketplace.visualstudio.com/items?itemName=EWoodruff.VisualStudioSpellCheckerVS2017andLater) 是個檢查程式碼英文拼寫是否正確的擴充套件，適用於 Visual Studio 2013、2015、2017，安裝完成之後，在寫程式碼或註解的時候，會自動檢查英文單字是否有拼寫正確，避免造成日後維護時的困擾。

當有檢查到拼寫錯誤的時候，該字下面就會出現紅色毛毛蟲。

![拼字錯誤](https://i.imgur.com/PbacyhJ.png)

如果有遇到特殊英文單字或專有名詞時，也可以加入該擴充套件的字典中，相當貼心。

## 小調整

因為這擴充套件是外國人寫的，所以內建沒有中文的拼寫檢查，當遇到中文時就一定會報錯，這時可以開啟 Spell Checker 的 `Edit Global Configuration` 做一些調整。

![Edit Global Configuration](https://i.imgur.com/FRar1vF.png)

在 `Exclusion Expressions` 中，加入一個篩選中文的正規表示式 `[\u4e00-\u9fa5]`。

![不包含中文](https://i.imgur.com/Rvi7VxS.png)

完成後，就不會對中文做拼寫檢查，紅色毛毛蟲就會消失了。

![Exclusion Expressions](https://i.imgur.com/Y5NdqDI.png)

如果設定完還有紅色毛毛蟲了話，請關閉檔案重新開啟看看，讓 Spell Checker 自動重新檢查。

----------

參考資料：

* [正規表示式 Regular Expression](https://poychang.github.io/note-regular-expression/)
* [EWSoftware/VSSpellChecker](https://github.com/EWSoftware/VSSpellChecker)