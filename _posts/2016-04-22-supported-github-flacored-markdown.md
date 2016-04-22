---
layout: post
title: 有支援 Github Flavored 的 Markdown 語言
date: 2016-04-21 20:22
author: Poy
comments: true
categories: [Tools, Develop]
---
使用 Markdown 來撰寫文件真的相當方便，不只可以快速地將文件結構組織起來，現在我更拿它來作筆記、寫部落格，像現在這篇文章就是使用 [Github Pages](https://pages.github.com/) 的服務，加上使用 [jekyll](https://jekyllrb.com/) 工具，然後搭配 Markdown 來寫文章，基本的語法可以參考 [Markdown 語法說明](http://markdown.tw/)。

然而在文章中常會放上程式碼，這時候如果有語法高亮，那就完美了！[Github Flavored](https://help.github.com/articles/creating-and-highlighting-code-blocks/) 就是提供這樣的功能，寫法也很簡單：

<pre>
```javascript
function foo() {
	var bar = '';
	if (bar === 'Awesome'){
	  return true
	}
}
```
</pre>

上面這樣的寫法，透過 Github Flavored 的 highlighter-rouge 去渲染後，就會變成這樣： 

```js
function foo() {
	var bar = '';
	if (bar === 'Awesome'){
	  return true
	}
}
```

是不是看起來更清楚了！

而且 Github Flavored 支援超多種語言，參考下列表（粗體是個人比較常用的）：

*	apache
*	applescript
*	avrasm - AVR Assembler
*	axapta
*	**bash**
*	brainfuck
*	clojure
*	cmake
*	coffeescript
*	cpp - C++
*	**cs**
*	**css**
*	d - RDMD
*	delphi
*	diff
*	django
*	**dos - dos batch files**
*	erlang
*	erlang-repl
*	glsl
*	haskell
*	ini
*	java
*	**javascript**
*	**json**
*	lc
*	lisp
*	**markdown**
*	matlab
*	mel - Maya Embedded Language
*	nginx
*	objectivec
*	parser3
*	Perl
*	PHP
*	profile - python profiler output
*	python
*	r
*	rib - RenderMan RIB
*	rsl - RenderMan RSL
*	Ruby
*	rust
*	smalltalk
*	**sql**
*	tex
*	vala
*	vhdl
*	**xml - XML and also used for HTML with inline CSS and Javascript**

詳細列表請參考 [List of supported languages and lexers](https://github.com/jneen/rouge/wiki/list-of-supported-languages-and-lexers)