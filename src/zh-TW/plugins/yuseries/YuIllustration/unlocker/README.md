---
title: 解鎖器列表
dir:
  link: true
  order: 5
---

若在列表中未發現你需要的解鎖器, 請前往 [Discord Guild](https://discord.com/invite/SzPBHGttaR) 提出你的需求.

## 說明

### 標籤
此文件夾中的所有條目, 帶有的標籤就是插件需求, 例如:

- `vanilla` 表示不需要額外插件支援, 原版即可
- `MythicMobs` 表示需要 MythicMobs 插件
- `Zaphkiel` 表示需要 Zaphkiel 插件

### id
該解鎖器的 id, 在配置文件中的填寫格式為:

```yaml
unlocker:
  - type: "id"
    # ...
```

### Data
對應配置文件中的 `data` 部分, 只有觸發對應事件並且滿足 `data` 時才會觸發 unlocker.  
並且在每個 `data` 上都有標注是否為必須填寫.

配置案例:
```yaml
unlocker:
  - type: "id"
    data:
      data_a: "..."
      data_b: "..."
```

### Condition
對應配置文件中的 `condition` 部分, 在滿足 `data` 的條件下, 才會開始判斷 `condition` 是否成立, 若成立則會觸發 unlocker.

配置案例:
```yaml
unlocker:
  - type: "id"
    data:
      data_a: "..."
      data_b: "..."
    condition: |-
      # ...
```

### Variable
當觸發 `then` 時, 可以使用的變量.  
文檔中標注了哪個 unlocker 有哪些額外變量可用, 那麼在 kether 語句中就可以以 `{{ &variable }}` 的形式使用

::: tip
請不要忘記在使用 `&` 符號, 以及在語句前加上 `inline` 以能夠正確獲取變量.
:::

配置案例:
```yaml
unlocker:
  - type: "id"
    data:
      data_a: "..."
      data_b: "..."
    condition: |-
      # ...
    then: |-
      tell inline color "&a你完成了進度: &e{{ &title }}"
```

---

<div class="catalog-display-container">
  <Catalog base="/zh-TW/plugins/yuseries/YuIllustration/unlocker/"/>
</div>