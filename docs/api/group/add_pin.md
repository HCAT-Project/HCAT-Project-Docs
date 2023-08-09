---
sidebar_position: 2
---

# add_pin

# 描述

添加群聊置顶消息

**!!\[饼干需要\]!!**

| 请求地址               | 请求方式     |
|--------------------|----------|
| /api/group/add_pin | GET/POST |

| 参数        | 类型               | 描述            |
|-----------|------------------|---------------|
| group_id  | String           | 群ID           |
| rid       | String           | 事件随机id        |
| auth_data | \[Cookie\]String | 存在\[饼干\]里面的数据 |

| 返回参数    | 类型     | 描述    |
|---------|--------|-------|
| message | String | 返回的信息 |
| status  | String | 状态    |
