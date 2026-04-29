# 小米 MiMo 开放平台知识库

## 一、平台概述

Xiaomi MiMo 开放平台提供 MiMo 大模型的 API 调用服务，支持 OpenAI API 和 Anthropic API 两种主流格式。

**官网**: https://platform.xiaomimimo.com/

---

## 二、MiMo-V2.5 系列模型

### 2.1 模型列表

| 模型名称 | 特点 | 上下文窗口 |
|----------|------|------------|
| MiMo-V2.5-Pro | 长程推理能力强，Agent 效率高 | 1M |
| MiMo-V2.5 | 原生全模态，支持文本/图像/视频/音频 | 1M |
| MiMo-V2.5-TTS | 语音合成，音色克隆+细粒度指令控制 | - |
| MiMo-V2-Pro | 全球顶级 Agent 能力 | 256k |
| MiMo-V2-Omni | 全模态理解 | 256k |

### 2.2 模型能力

- **推理能力**: AIME 2025、GPQA-Diamond 榜单 Top 2
- **编码能力**: SWE-bench Verified 开源模型第一
- **Agent 能力**: 支持工具调用、长程任务
- **多模态**: 文本、图像、视频、音频理解

---

## 三、API 调用

### 3.1 支持的 API 格式

- **OpenAI API 兼容格式**
- **Anthropic API 兼容格式**

### 3.2 获取 API Key

1. 登录小米开发者账号
2. 访问控制台: https://platform.xiaomimimo.com/console
3. 创建 API Key（格式: `sk-xxxxx`）

### 3.3 API Base URL

**OpenAI 兼容协议:**
- 中国集群: `https://api.xiaomimimo.com/v1`
- 新加坡集群: `https://api-sgp.xiaomimimo.com/v1`
- 欧洲集群: `https://api-ams.xiaomimimo.com/v1`

**Anthropic 兼容协议:**
- 中国集群: `https://api.xiaomimimo.com/anthropic`
- 新加坡集群: `https://api-sgp.xiaomimimo.com/anthropic`
- 欧洲集群: `https://api-ams.xiaomimimo.com/anthropic`

### 3.4 系统提示词

**中文版:**
```
你是MiMo（中文名称也是MiMo），是小米公司研发的AI智能助手。
今天的日期：{date} {week}，你的知识截止日期是2024年12月。
```

**英文版:**
```
You are MiMo, an AI assistant developed by Xiaomi.
Today's date: {date} {week}. Your knowledge cutoff date is December 2024.
```

### 3.5 Python SDK 示例

**OpenAI API 格式:**
```python
import os
from openai import OpenAI

client = OpenAI(
    api_key=os.environ.get("MIMO_API_KEY"),
    base_url="https://api.xiaomimimo.com/v1"
)

completion = client.chat.completions.create(
    model="mimo-v2.5-pro",
    messages=[
        {"role": "system", "content": "You are MiMo, an AI assistant developed by Xiaomi."},
        {"role": "user", "content": "please introduce yourself"}
    ],
    max_completion_tokens=1024,
    temperature=1.0,
    top_p=0.95,
    stream=False
)

print(completion.model_dump_json())
```

**Anthropic API 格式:**
```python
import os
from anthropic import Anthropic

client = Anthropic(
    api_key=os.environ.get("MIMO_API_KEY"),
    base_url="https://api.xiaomimimo.com/anthropic"
)

message = client.messages.create(
    model="mimo-v2.5-pro",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "please introduce yourself"}
    ]
)

print(message.content)
```

---

## 四、Token Plan 订阅

### 4.1 套餐类型

| 套餐 | 月付 | 年付 | Credits 额度 |
|------|------|------|--------------|
| Lite | ¥39/月 | ¥411.84/年 | 60M Credits |
| Standard | ¥99/月 | ¥1045.44/年 | 200M Credits |
| Pro | ¥329/月 | ¥3474.24/年 | 700M Credits |
| Max | ¥659/月 | ¥6959.04/年 | 1600M Credits |

### 4.2 支持的模型

所有套餐均支持:
- MiMo-V2.5-Pro
- MiMo-V2.5
- MiMo-V2.5-TTS 系列
- MiMo-V2-Pro
- MiMo-V2-Omni
- MiMo-V2-TTS

### 4.3 额度消耗规则

| 模型 | 消耗系数 |
|------|----------|
| MiMo-V2.5 | 1x |
| MiMo-V2.5-Pro | 2x |
| MiMo-V2.5-TTS 系列 | 0x（限时免费） |
| MiMo-V2-Pro | 2x |
| MiMo-V2-Omni | 2x |

### 4.4 优惠活动

- **夜间优惠**: 0:00-8:00 (北京时间) 0.8x 消耗
- **首购优惠**: 首次购买享 88 折
- **自动续费**: 新用户 77 折，老用户 7 折
- **连续包年**: 88 折

---

## 五、Token Plan 快速接入

### 5.1 接入步骤

1. **订阅 Token Plan**: 选择适合的套餐
2. **获取凭证**: 
   - API Key（格式: `tp-xxxxx`）
   - Base URL
3. **接入工具**: 配置 AI 编程工具

### 5.2 Token Plan Base URL

**OpenAI 兼容协议:**
- 中国集群: `https://token-plan-cn.xiaomimimo.com/v1`
- 新加坡集群: `https://token-plan-sgp.xiaomimimo.com/v1`
- 欧洲集群: `https://token-plan-ams.xiaomimimo.com/v1`

**Anthropic 兼容协议:**
- 中国集群: `https://token-plan-cn.xiaomimimo.com/anthropic`
- 新加坡集群: `https://token-plan-sgp.xiaomimimo.com/anthropic`
- 欧洲集群: `https://token-plan-ams.xiaomimimo.com/anthropic`

### 5.3 验证接入

**curl 验证（OpenAI 格式）:**
```bash
curl --location --request POST 'BASE_URL/chat/completions' \
--header "api-key: $MIMO_API_KEY" \
--header "Content-Type: application/json" \
--data-raw '{
  "model": "mimo-v2.5-pro",
  "messages": [
    {"role": "system", "content": "You are MiMo, an AI assistant developed by Xiaomi."},
    {"role": "user", "content": "please introduce yourself"}
  ],
  "max_completion_tokens": 1024
}'
```

**curl 验证（Anthropic 格式）:**
```bash
curl --location --request POST 'BASE_URL/v1/messages' \
--header "api-key: $MIMO_API_KEY" \
--header "Content-Type: application/json" \
--data-raw '{
  "model": "mimo-v2.5-pro",
  "max_tokens": 1024,
  "messages": [
    {"role": "user", "content": "please introduce yourself"}
  ]
}'
```

---

## 六、Orbit 百万亿 Token 计划

### 6.1 计划概述

- **名称**: MiMo Orbit - 创造者百万亿 Token 激励计划
- **Token 总量**: 100 万亿（100T）
- **活动时间**: 2026年4月28日 ~ 5月28日（30天）
- **参与方式**: 申请制（100t.xiaomimimo.com）
- **最高权益**: Max 档位，16 亿 Credits（价值 ¥659）

### 6.2 申请方式

- 申请网址: https://100t.xiaomimimo.com/
- 需要填写申请材料
- 小米会评估使用场景和需求

---

## 七、常见问题

### 7.1 API Key 区分

- **按量付费 API Key**: `sk-xxxxx` 格式
- **Token Plan API Key**: `tp-xxxxx` 格式
- 两种 Key 相互独立，不可混用

### 7.2 额度查询

访问订阅管理页面查看当前套餐的额度及用量。

### 7.3 模型选择建议

- **MiMo-V2.5**: 通用任务，性价比高
- **MiMo-V2.5-Pro**: 复杂推理、Agent 任务
- **MiMo-V2.5-TTS**: 语音合成场景

---

## 八、资源链接

- 开放平台: https://platform.xiaomimimo.com/
- 控制台: https://platform.xiaomimimo.com/console
- API 文档: https://platform.xiaomimimo.com/docs/
- Token Plan: https://platform.xiaomimimo.com/docs/zh-CN/tokenplan/subscription
- Orbit 计划: https://100t.xiaomimimo.com/
- 模型权重: https://huggingface.co/collections/XiaomiMiMo/mimo-v25
