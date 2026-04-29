# 米家 IoT 开发者 API 知识库

## 一、概述

米家 IoT 平台为开发者提供设备接入、控制、数据上报等能力。

### 1.1 开发流程

1. 注册小米开发者账号
2. 创建产品
3. 配置产品功能（Spec）
4. 开发调试
5. 提交审核
6. 上线发布

### 1.2 核心概念

- **Product ID (PID)**: 产品唯一标识
- **Device ID (DID)**: 设备唯一标识
- **Spec**: 设备功能规范定义
- **Action**: 设备可执行的动作
- **Property**: 设备属性
- **Event**: 设备事件

---

## 二、API 接口

### 2.1 设备控制

**接口**: `/miotspec/prop/set`

**请求参数**:
```json
{
  "did": "设备ID",
  "siid": "服务ID",
  "piid": "属性ID",
  "value": "属性值"
}
```

**响应示例**:
```json
{
  "code": 0,
  "message": "ok"
}
```

**常见错误**:
- `-1`: 参数错误
- `-4001`: 设备不在线
- `-4003`: 属性不可写
- `-4005`: 权限不足

### 2.2 设备查询

**接口**: `/miotspec/prop/get`

**请求参数**:
```json
{
  "did": "设备ID",
  "siid": "服务ID",
  "piid": "属性ID"
}
```

**响应示例**:
```json
{
  "code": 0,
  "value": "属性值"
}
```

### 2.3 设备列表

**接口**: `/home/device_list`

**请求参数**:
```json
{
  "getVirtualModel": false,
  "getHuamiDevices": 0
}
```

---

## 三、常见问题

### 3.1 设备离线

**症状**: 设备状态查询返回 `-4001`

**解决方案**:
1. 检查设备网络连接
2. 确认设备已绑定到账号
3. 检查设备固件版本
4. 重启设备

### 3.2 权限不足

**症状**: 控制设备返回 `-4005`

**解决方案**:
1. 确认已获取设备控制权限
2. 检查 OAuth Token 有效期
3. 确认账号已绑定设备

### 3.3 属性不可写

**症状**: 设置属性返回 `-4003`

**解决方案**:
1. 检查 Spec 定义中属性的 access 类型
2. 只读属性无法通过 API 设置
3. 确认使用正确的 siid 和 piid

---

## 四、最佳实践

### 4.1 错误处理

```javascript
async function controlDevice(did, siid, piid, value) {
  try {
    const result = await mijiaApi.propSet(did, siid, piid, value);
    if (result.code !== 0) {
      console.error(`控制失败: ${result.message}`);
      // 根据错误码进行处理
      switch (result.code) {
        case -4001:
          console.log('设备离线，请检查网络');
          break;
        case -4005:
          console.log('权限不足，请重新授权');
          break;
      }
    }
    return result;
  } catch (error) {
    console.error('请求异常:', error);
    throw error;
  }
}
```

### 4.2 重试机制

```javascript
async function controlWithRetry(did, siid, piid, value, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const result = await controlDevice(did, siid, piid, value);
      if (result.code === 0) return result;
      
      // 等待后重试
      await sleep(1000 * (i + 1));
    } catch (error) {
      if (i === maxRetries - 1) throw error;
    }
  }
}
```

### 4.3 批量控制

```javascript
async function batchControl(devices) {
  const promises = devices.map(d => 
    controlDevice(d.did, d.siid, d.piid, d.value)
  );
  return Promise.allSettled(promises);
}
```

---

## 五、资源链接

- [米家 IoT 开发者平台](https://iot.mi.com/)
- [API 文档](https://iot.mi.com/new/doc/home)
- [Spec 规范](https://iot.mi.com/new/doc/accessories/category/spec)
- [开发者论坛](https://iot.mi.com/new/forum)
