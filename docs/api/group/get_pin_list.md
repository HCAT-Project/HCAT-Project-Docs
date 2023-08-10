---
sidebar_position: 2
---

# get_pin_list

# 描述

获取置顶消息列表

**!!\[饼干需要\]!!**

| 请求地址                      | 请求方式     |
|---------------------------|----------|
| /api/group/get_permission | GET/POST |

| 参数        | 类型               | 描述            |
|-----------|------------------|---------------|
| group_id  | String           | 群聊ID          |
| auth_data | \[Cookie\]String | 存在\[饼干\]里面的数据 |

| 返回参数    | 类型     | 描述    |
|---------|--------|-------|
| data    | List   | 消息列表  |
| message | String | 返回的信息 |
| status  | String | 状态    |
