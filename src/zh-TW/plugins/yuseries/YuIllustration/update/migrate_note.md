---
title: 從 2.0 升級到 2.1
order: 1
---

由於 2.1 版本進行了破壞性更新, 因此在升級前請務必:  
- 備份好原資料庫
- 在非生產環境下進行遷移
- 確認遷移後資料的正確性

## config.yml
2.1 版本移除了 `config.yml` 中的部分設定, 也添加了部分新設定, 請**備份並刪除**原有的 `config.yml` 檔案, 並啟動一次伺服器以自動生成新的設定檔案。

## unlocker
2.1 版本完全重做了 unlocker 功能, 所以需要**重新編寫**所有 entry 中的 unlocker 設定(在此非常抱歉帶來的不便)  
原設定應該是類似於這樣的:  
```yaml
unlock:
  - type: "break block"
    data:
      type: "STONE"
    condition: |-
      check break-block total-amount >= 5
```
而在 2.1 版本中, 我們移除了 `data` 設定, 以 `condition` 取而代之, 原來的 `condition` 則更名為 `goal`, 意為 `condition` 為觸發這個 unlocker 對應事件的條件, 而 `goal` 則為成功觸發這個 unlocker 的總次數或其他特定條件.  
另外, 我們完全移除了用 kether 腳本來定義條件的方式, 轉而使用固定的鍵值對來定義條件, 以避免腳本的不穩定性。(參考 [Chemdah](../../../partner/Chemdah/README.md) 的設計思路)  
所以在 2.1 版本中的 unlocker 設定應該是這樣的:
```yaml
unlock:
  - type: "break block"
    condition:
      material: "stone"
    goal:
      amount: 5
```
具體每個 unlocker 所提供的條件和目標鍵請參考其對應的說明介面, 可以在[這裡](../unlocker/README.md)查看目錄索引.

## cache
由於使用了新的 manager 系統，所以需要重新建立 cache 資料，操作過程如下：  
- 在伺服器跟目錄(與 `plugins` 同層)下找到 `cache` 資料夾
- 打開 `cache` 資料夾，找到 `taboolib/com.github.l1an.yuillustration` 資料夾
- 將其完全刪除
- 重新啟動伺服器

::: tip

感謝 @soraniko 提出該更新提醒

:::