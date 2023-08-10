---
sidebar_position: 2
---

# get_groups

# 描述

获取群聊信息

**!!\[饼干需要\]!!**

| 请求地址                  | 请求方式     |
|-----------------------|----------|
| /api/group/get_groups | GET/POST |

| 参数        | 类型               | 描述            |
|-----------|------------------|---------------|
| auth_data | \[Cookie\]String | 存在\[饼干\]里面的数据 |

| 返回参数    | 类型     | 描述    |
|---------|--------|-------|
| data    | Json   | 所有群聊  |
| message | String | 返回的信息 |
| status  | String | 状态    |

# 返回的json格式

```json
{
  "group1_id": {
    "remark": "备注",
    "group_name": "群聊名",
    "nick": "在群组中的昵称"
  },
  "group2_id": {
    "remark": "备注",
    "group_name": "群聊名",
    "nick": "在群组中的昵称"
  }
}
```
