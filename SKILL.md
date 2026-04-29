---
name: mimo-free-100t
description: MIMO 限时免费100T FREE TOKEN - 小米开发者智能助手。基于 MiMo-V2.5 的米家 API 问题解答工具，帮助开发者解决米家 IoT 开发问题。当用户询问米家 API、小米开发者、IoT 设备控制、MiMo 模型使用、Token Plan 订阅等问题时使用。
---

# MIMO 限时免费100T FREE TOKEN

小米开发者智能助手，基于 MiMo-V2.5 的米家 API 问题解答工具。

## 核心功能

1. **米家 API 问答** — 解答设备控制、错误码、权限等问题
2. **MiMo 模型指导** — 模型选择、API 调用、参数配置
3. **Token Plan 咨询** — 套餐价格、额度计算、优惠活动
4. **代码生成** — 自动生成米家 API 调用代码

## 快速使用

```bash
cd ~/mimo-devhelper
node src/index.js
```

## 知识库位置

- `src/knowledge/mijia-api.md` — 米家 API 文档
- `src/knowledge/mimo-platform.md` — MiMo 平台文档

## API 配置

```bash
# 配置 MiMo API Key
export MIMO_API_KEY="your-api-key"

# 或使用 Token Plan Key
export MIMO_API_KEY="tp-xxxxx"
```

## 常见问题示例

- 设备控制返回 -4001 错误怎么办？
- 如何批量控制多个设备？
- MiMo-V2.5 和 Pro 版本有什么区别？
- Token Plan 套餐怎么选？
- 如何申请百万亿 Token 计划？
