---
title: 指令
order: 4
---

::: tip
以 <span style="color: green;">**[]**</span> 包裹的内容为可选输入, 以 <span style="color: red;">**<>**</span> 包裹的内容为必须输入
:::

::: tabs

@tab 管理指令

`/yui debug` - 開啟/關閉 debug 模式  
`/yui reload` - 重載插件  
`/yui version` - 查看插件版本  

@tab 解鎖相關指令

`/yui unlock <category> <entry> [player]` - 給指定玩家解鎖指定分類中的條目  
`/yui deunlock <category> <entry> [player]` - 取消解鎖指定玩家指定分類中的條目

@tab 查詢指令

`/yui query unlocked <category/total> <player> [page]` - 查詢已解鎖的條目  
`/yui query list entry [page]` - 列出所有條目  
`/yui query list category [page]` - 列出所有分類  

@tab 界面指令

`/yui open [player] [category]` - 打開圖鑑主介面或指定分類介面

@tab 數據遷移指令

`/yui migrate v1` - 遷移 v1 版本數據到 v2  
`/yui migrate mmoitems <type> <id> <category>` - 遷移 MMOItems 中指定類型指定 id 的物品到指定條目中  
`/yui migrate zaphkiel <id> <category>` - 遷移 Zaphkiel 中指定 id 的物品到指定條目中

@tab API 指令

`/yui api eval <content>` - 執行一個 kether 腳本  
`/yui api advancements` - 獲取所有進度的 key

:::