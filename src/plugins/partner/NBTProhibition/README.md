---
title: NBTProhibition
icon: hugeicons:tools
dir:
  link: true
  order: 4
---

## About

A lightweight NBT removal plugin based on **TabooLib**, supporting multiple matching modes

## Price

|Duration|Price|
|:-:|:-:|
|Permanent|3.99EUR|

To purchase, please join [Yu's Studio](https://discord.com/invite/SzPBHGttaR), or contact me via [Discord](https://discord.com/users/1092505635767205948)

## Features

- Precise NBT path matching system
- Support for multiple NBT matching formats
- Real-time detection and removal of prohibited NBT
- Configurable removal notifications and penalties
- Support for Kether script execution
- Complete event system support
- Detailed debug information output

## Preview

### Supported Formats

#### Simple Path
```yaml
# Direct matching of top-level NBT
Unbreakable: true
# Configuration: "Unbreakable"
```

#### Nested Path
```yaml
# Use dot notation to access nested NBT
display:
  Name: "Item Name"
# Setting: "display.Name"
```

#### Array Index
```yaml
# Use square brackets to access specific array positions
ench: [
  {id: 0s, lvl: 1s},
  {id: 1s, lvl: 1s}
]
# Config: "ench[0].id" - Matches the id of the first enchantment
# Config: "ench[*].id" - Matches the id of all enchantments
```

#### Value Matching
```yaml
# Use colon to match specific values
CustomPotionEffects: [
  {Id: 6, Amplifier: 1}
]
# Setting: "CustomPotionEffects[0].Id:6"
```

#### Combined Usage
```yaml
# The above rules can be combined
ench: [
  {id: 1s, lvl: 5s},
  {id: 34s, lvl: 3s}
]
# Config: "ench[0].id:1s" - Matches first enchantment with id 1s
# Config: "ench[*].id:1s" - Matches any enchantment with id 1s
```

### Debug Mode

Enable debug mode in `config.yml` to see detailed NBT processing information:

```yaml
# Debug mode will output more messages
debug: true
```

Debug information includes:

- NBT path matching process
- Item NBT content
- Detailed steps of removal operations
- Script execution status

## Detailed Information

For more detailed information, please check the [Official Documentation](https://wiki.bingzi.online/zh/NBTProhibition/Index)