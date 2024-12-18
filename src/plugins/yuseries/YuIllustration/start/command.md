---
title: Commands
order: 4
---

::: tip
Content wrapped in <span style="color: green;">**[]**</span> is optional, while content wrapped in <span style="color: red;">**<>**</span> is required.
:::

## Admin Commands

`/yui debug` - Toggle debug mode  
`/yui reload` - Reload the plugin  
`/yui version` - Check plugin version  

## Unlock Related Commands

`/yui unlock <category> <entry> [player]` - Unlock a specific entry in a category for a specified player  
`/yui deunlock <category> <entry> [player]` - Cancel unlocking a specific entry in a category for a specified player

## Query Commands

`/yui query unlocked <category/total> <player> [page]` - Query unlocked entries  
`/yui query list entry [page]` - List all entries  
`/yui query list category [page]` - List all categories  

## Interface Commands

`/yui open [player] [category]` - Open the main illustration interface or a specific category interface

## Data Migration Commands

`/yui migrate v1` - Migrate v1 data to v2  
`/yui migrate mmoitems <type> <id> <category>` - Migrate an item of a specified type and id from MMOItems to a specified entry  
`/yui migrate zaphkiel <id> <category>` - Migrate an item with a specified id from Zaphkiel to a specified entry

## API Commands

`/yui api eval <content>` - Execute a kether script  
`/yui api advancements` - Get all advancements' key