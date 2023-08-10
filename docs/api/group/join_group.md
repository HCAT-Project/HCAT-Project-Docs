---
sidebar_position: 2
---

# join_group

# 描述

加入群聊

**!!\[饼干需要\]!!**

| 请求地址                  | 请求方式     |
|-----------------------|----------|
| /api/group/join_group | GET/POST |

| 参数        | 类型               | 描述            |
|-----------|------------------|---------------|
| group_id  | String           | 群组ID          |
| add_info  | String           | 进群验证消息(?)     |
| auth_data | \[Cookie\]String | 存在\[饼干\]里面的数据 |

| 返回参数    | 类型     | 描述    |
|---------|--------|-------|
| message | String | 返回的信息 |
| status  | String | 状态    |
