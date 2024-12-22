---
title: 入門
order: 1
---

## 基本概念

在正式學習 `Kether` 之前, 我們需要先瞭解一些它的基本概念.

它是以語句為單位的腳本語言, 每個語句帶有自己的參數, 每行為一個語句.

因此你將會在各個插件文檔中找到它們提供的語句, 通過那些語句, 你可以實現該插件對應的功能.  

另外, `Kether` 還被分爲**公有語句**與**私有語句**, 公有語句意味著, 你可以在任何支持 `Kether` 的插件中使用它們, 而私有語句則意味著, 你只能在提供這個語句的插件中使用它們, 私有語句一般是跟插件功能緊緊相關的.

## 示例

我們以 `YuIllustration` 的條目解鎖獎勵腳本為例, 來瞭解一下 `Kether` 的語法.

默認配置是這樣的:

```yaml
reward:
  # kether 腳本
  content: |-
    command inline "give {{ sender }} diamond 1" as op
    tell color inline "&aYou have unlocked a entry named &e{{ &entry }}"
```

### 解析

`content` 鍵裡的內容就是解鎖條目後觸發的 Kether 腳本,  
示例配置中有兩個 Kether 語句, 分別是 `command` 和 `tell`.  
接下來詳細分析這兩個語句:

#### command

```kether :no-line-numbers
command inline "give {{ sender }} diamond 1" as op
```

對於這一個語句, `command` 是語句名稱, 代表執行指令, 這是 `TabooLib` 內置的語句, `inline` 是內聯語句, 用於將**玩家名**等參數解析出來, `as op` 是語句的額外參數, 代表執行指令的身分, 它默認提供了三種身分: `op`, `member`, `player`, 分別代表管理員, 成員, 玩家. 不填寫則代表玩家.

所以, `inline "give {{ sender }} diamond 1" as op` 這一長串都是 `command` 語句的參數.

除了內置的變量, `Kether` 也支持解析**任何 PAPI 變量**, 使用方法為:

```kether :no-line-numbers
command inline "give {{ papi %player_name% }} diamond 1" as op
```

---

#### tell

```kether :no-line-numbers
tell color inline "&aYou have unlocked a entry named &e{{ &entry }}"
```

對於這個語句, `tell` 是語句名稱, 代表發送消息, `color` 是顏色轉換語句, 可以將形如 `&a` 這樣的顏色代碼轉換成顏色字符, `inline` 仍然是內聯語句, 用於將**條目名**等參數解析出來.

但 `color` 只能将颜色代码转换为颜色字符, 而**不具有**输出的功能, 那么 `tell` 就是用来输出的. 所以实际上, `color inline "&aYou have unlocked a entry named &e{{ &entry }}"` 这整一行都是 tell 的参数.

---

#### inline

`inline` 語句的作用只有在文本內以將被 `{{ }}` 包裹的動作返回為對應的變量, 因此 `{{ sender }}` 會被解析為執行指令的玩家名.  