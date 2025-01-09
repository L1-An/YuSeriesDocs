---
title: Unlocker List
dir:
  link: true
  order: 5
---

If you do not find the unlocker you need in the list, please go to the [Discord Guild](https://discord.com/invite/SzPBHGttaR) to submit your request.

## Description

### Tags
All entries in this folder have tags indicating the plugin requirements, for example:

- `vanilla` means no additional plugin support is needed, it works with vanilla Minecraft.
- `MythicMobs` means the MythicMobs plugin is required.
- `Zaphkiel` means the Zaphkiel plugin is required.

### id
The id of the unlocker, to be filled in the configuration file as:

```yaml
unlocker:
  - type: "id"
    # ...
```

### Data
Corresponds to the `data` section in the configuration file. The unlocker will only trigger when the corresponding event is triggered and the `data` is satisfied.  
Each `data` is marked as required or optional.

Configuration example:
```yaml
unlocker:
  - type: "id"
    data:
      data_a: "..."
      data_b: "..."
```

### Condition
Corresponds to the `condition` section in the configuration file. After satisfying the `data` conditions, it will start to determine whether the `condition` is met. If it is, the unlocker will trigger.

Configuration example:
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
When triggering `then`, the available variables can be used. The document indicates which unlocker has additional variables available, which can be used in kether statements in the form of `{{ &variable }}`.

::: tip
Please do not forget to use the `&` symbol and add `inline` before the statement to correctly obtain the variable.
:::

Configuration example:
```yaml
unlocker:
  - type: "id"
    data:
      data_a: "..."
      data_b: "..."
    condition: |-
      # ...
    then: |-
      tell inline color "&aYou have completed the advancement: &e{{ &title }}"
```

---

<div class="catalog-display-container">
  <Catalog base="/plugins/yuseries/YuIllustration/unlocker/"/>
</div> 