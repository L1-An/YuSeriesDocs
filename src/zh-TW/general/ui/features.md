---
title: 點擊功能
icon: pajamas:issue-type-feature-flag
dir:
  order: 2
---

`YuSeries` 系列插件的 GUI 模塊中默認提供了一些方便易用的 feature, 可以讓你的 GUI 呈現出來的效果更加豐富.  
當然, 幾乎每個帶有 GUI 功能的 `YuSeries` 插件都有自己獨特的 feature, 這裡列出的都是通用 feature.

::: note

如果你有好的想法, 歡迎[聯繫我們](https://discord.com/invite/SzPBHGttaR)添加更多默認 feature.

:::

::: tabs

@tab Close

點擊後關閉 GUI

### 無參數

### 使用案例
```yaml
'#':
  name: "關閉"
  feature:
    - ==: Close
```

@tab Head

在構建時指定頭顱的樣式

### 參數

#### head
頭顱的 id  

可以填寫 `{{ player head }}` 或者 `player`, 這將會使其顯示打開介面玩家的頭顱  
亦或者填寫一個 **base64 編碼**的頭顱, 你可以在[這裡](https://minecraft-heads.com/)找到所有頭顱及其 base64 編碼

### 使用案例
```yaml
'#':
  material: PLAYER_HEAD
  name: "這是打開介面玩家的頭顱"
  feature:
    - ==: Head
      head: player # 在這裡填寫 {{ player head }} 或者 player 將會顯示打開介面玩家的頭顱
'@':
  material: PLAYER_HEAD
  name: "這是一個自定義的頭顱"
  feature:
    - ==: Head
      head: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYzkxMjNlMmE0MjA0NmYxZjczOTA2ZTlhMGI2MjExNDE5MTRjNjIyMDE4NDg2YzY2MmIzY2VhMDk4ZDg3YjIyNyJ9fX0="
```

@tab Kether

點擊後執行一個或一系列 Kether 腳本

### 參數

#### scripts
腳本列表, 即使只有一條也需要以列表的形式填寫

### 使用案例
```yaml
'#':
  name: "打招呼並給予 1 個鑽石"
  feature:
    - ==: Kether
      scripts:
        - 'tell color inline "&aHello {{ sender }}"'
        - 'command inline "give {{ sender }} diamond"' as console
```

<!-- @tab Command

點擊後執行一個或一系列指令

使用案例:
```yaml
'#':
  name: "打招呼並給予 1 個鑽石"
  feature:
   - ==: Command
     commands:
       - "
``` -->

:::