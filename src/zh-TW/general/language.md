---
title: 國際化語言模塊
icon: meteor-icons:language
order: 1
---

## 概述

得益於 **TabooLib** 的語言模塊, `YuSeries` 全系列插件都支持了國際化多語言系統.  
這意味著插件可以**自動**根據玩家選擇的客戶端語言發送對應語言的信息.

::: tip

當然, 這需要你配置對應的語言文件. 如果插件獲取不到對應的語言文件, 則會發送默認語言.

:::

一般 `YuSeries` 系列插件會默認標配 `en_US`, `zh_CN`, `zh_TW`, `zh_HK` 這四個語言文件.  
你可以在後續的文章中查看如何擴展其他語言的文件.

## 修改默認語言文件

在 `./plugins/pluginName/lang` 目錄下, 找到對應語言的文件, 打開找到對應的信息進行修改即可.

::: important

請不要忘記保存後重載插件!  
也請不要刪除掉默認的語言節點, 否則將會無法正常發送信息!

:::

## 擴展語言文件

仍然在 `./plugins/pluginName/lang` 目錄下, 創建一個新的 `yml文件`, 以 `Country Locale Code` 命名, 例如法國法語 `fr_FR.yml`.  
在文件裡面添加默認語言中**所有**的語言節點, 再對內容進行翻譯即可.

::: tip

你可以在[這裡](https://saimana.com/list-of-country-locale-code/)找到全球語言代碼列表

:::