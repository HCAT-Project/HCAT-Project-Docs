---
sidebar_position: 2
---

# del_pin

# 描述

删除置顶信息

**!!\[饼干需要\]!!**

| 请求地址               | 请求方式     |
|--------------------|----------|
| /api/group/del_pin | GET/POST |

| 参数        | 类型               | 描述            |
|-----------|------------------|---------------|
| group_id  | String           | 群组ID          |
| rid       | String           | 事件随机ID        |
| auth_data | \[Cookie\]String | 存在\[饼干\]里面的数据 |

| 返回参数    | 类型     | 描述    |
|---------|--------|-------|
| message | String | 返回的信息 |
| status  | String | 状态    |
