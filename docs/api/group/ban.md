---
sidebar_position: 2
---

# ban

# 描述

禁言

**!!\[饼干需要\]!!**

| 请求地址           | 请求方式     |
|----------------|----------|
| /api/group/ban | GET/POST |

| 参数        | 类型               | 描述            |
|-----------|------------------|---------------|
| group_id  | String           | 群聊ID          |
| member_id | String           | 成员ID          |
| ban_time  | Int              | 禁言时间(单位秒)     |
| auth_data | \[Cookie\]String | 存在\[饼干\]里面的数据 |

| 返回参数    | 类型     | 描述    |
|---------|--------|-------|
| message | String | 返回的信息 |
| status  | String | 状态    |
