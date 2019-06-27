---
layout: post
title: Windows Terminal 筆記
date: 1970-01-01 12:00
author: Poy Chang
comments: true
categories: [Develop, Tools]
---

本篇作為書籤用途，紀錄網路上的 Visual Studio 相關資訊

## WLS 的高富帥

參考這篇：[以WSL + Ubuntu + zsh打造Windows上高富帥的命令列模式](https://blog.kkbruce.net/2019/03/wsl-ubuntu-zsh-windows-command-line.html)

## WLS .bashrc 設定

原始的 `.bashrc` 有判斷如果家目錄下有 `.bash_aliases`，則會載入該檔案內的 aliases 設定，可以加入以下 aliases：

```bash
alias home='cd /mnt/c/Users/poypo/'
alias cls=clear
alias e.='explorer.exe .'
alias gl='git log --oneline --all --graph --decorate $*'
alias ll='ls -al --show-control-chars -F --color $*'
```

另外可以在 `.bashrc` 最後面加上下面的指令，讓啟動 WLS 後，會切換到 Windows 的家目錄，並清掉啟動過程中的訊息，然後顯示今天日期。

```bash
home
clear
echo -ne "Hello, $USER. Today is, "; date
```

## Theme Scheme

修改 Windows Terminal 的終端機樣式，透過將下面的程式碼加到 `profiles.json` 中的 `schemes` 屬性，即可使用。

```json
{
    "background" : "#073642",
    "black" : "#073642",
    "blue" : "#268BD2",
    "brightBlack" : "#002B36",
    "brightBlue" : "#839496",
    "brightCyan" : "#93A1A1",
    "brightGreen" : "#586E75",
    "brightPurple" : "#6C71C4",
    "brightRed" : "#CB4B16",
    "brightWhite" : "#FDF6E3",
    "brightYellow" : "#657B83",
    "cyan" : "#2AA198",
    "foreground" : "#FDF6E3",
    "green" : "#257387",
    "name" : "PoyChang Dark Theme",
    "purple" : "#D33682",
    "red" : "#D30102",
    "white" : "#EEE8D5",
    "yellow" : "#B58900"
}
```

----------

參考資料：

* []()
