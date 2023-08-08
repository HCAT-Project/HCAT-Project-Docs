---
sidebar_position: 2
---

# get_profile

# 描述

获取用户信息

**!!\[饼干需要\]!!**

| 请求地址                     | 请求方式     |
|--------------------------|----------|
| /api/account/get_profile | GET/POST |

| 参数        | 类型               | 描述            |
|-----------|------------------|---------------|
| auth_data | \[Cookie\]String | 存在\[饼干\]里面的数据 |
| user_id   | String           | \[选填\]用户id    |

| 返回参数      | 类型     | 描述      |
|-----------|--------|---------|
| avatar    | String | 头像的哈希   |
| name      | String | 用户名     |
| id        | String | 用户id    |
| bio       | String | 用户bio   |
| status    | String | 用户在线情况  |
| is_friend | bool   | 是否为好友   |
| nick      | String | 昵称      |
| time      | Float  | 成为好友的时间 |
| message   | String | 返回的信息   |
| status    | String | 状态      |

注: `is_friend`只在已登录的情况下返回,且只有此值为`true`时,才会返回`nick`和`time`
