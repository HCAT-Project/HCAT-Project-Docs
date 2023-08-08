---
sidebar_position: 2
---

# get_user_name

# 描述

获取用户名

| 请求地址                       | 请求方式 |
|----------------------------|------|
| /api/account/get_user_name | GET  |

| 参数        | 类型               | 描述            |
|-----------|------------------|---------------|
| user_id   | String           | 用户名           |
| auth_data | \[Cookie\]String | 存在\[饼干\]里面的数据 |

| 返回参数    | 类型     | 描述    |
|---------|--------|-------|
| data    | String | 用户名   |
| message | String | 返回的信息 |
| status  | String | 状态    |
