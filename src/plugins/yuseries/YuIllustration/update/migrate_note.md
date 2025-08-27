---
title: Upgrading from 2.0 to 2.1
order: 1
---

Due to breaking changes in version 2.1, please ensure you:  
- Backup your original database
- Perform migration in a non-production environment
- Verify data correctness after migration

## config.yml
Version 2.1 has removed some settings from `config.yml` and added new ones. Please **backup and delete** your existing `config.yml` file, then start the server once to auto-generate the new configuration file.

## unlocker
Version 2.1 completely redesigned the unlocker functionality, so you need to **rewrite** all unlocker settings in your entries (we sincerely apologize for the inconvenience).  
Your original settings should look similar to this:  
```yaml
unlock:
  - type: "break block"
    data:
      type: "STONE"
    condition: |-
      check break-block total-amount >= 5
```
In version 2.1, we removed the `data` setting and replaced it with `condition`. The original `condition` was renamed to `goal`, meaning `condition` is the criteria for triggering this unlocker's corresponding event, while `goal` is the total count or other specific conditions for successfully triggering this unlocker.  
Additionally, we completely removed the use of Kether scripts to define conditions, instead using fixed key-value pairs to avoid script instability. (Following the design approach of [Chemdah](../../../partner/Chemdah/README.md))  
So the unlocker settings in version 2.1 should look like this:
```yaml
unlock:
  - type: "break block"
    condition:
      material: "stone"
    goal:
      amount: 5
```
For specific condition and goal keys provided by each unlocker, please refer to their corresponding documentation pages. You can find the directory index [here](../unlocker/README.md).

## cache
Due to the new manager system, you need to rebuild the cache data. Follow these steps:  
- Find the `cache` folder in your server root directory (same level as `plugins`)
- Open the `cache` folder and locate `taboolib/com.github.l1an.yuillustration` folder
- Delete it completely
- Restart the server

::: tip

Thanks to @soraniko for suggesting this update reminder

:::