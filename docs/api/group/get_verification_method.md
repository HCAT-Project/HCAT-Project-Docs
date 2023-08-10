---
sidebar_position: 2
---

# get_verification_method

# 描述

获取群聊验证情况

**!!\[饼干需要\]!!**

| 请求地址                               | 请求方式     |
|------------------------------------|----------|
| /api/group/get_verification_method | GET/POST |

| 参数        | 类型               | 描述            |
|-----------|------------------|---------------|
| group_id  | String           | 群聊ID          |
| auth_data | \[Cookie\]String | 存在\[饼干\]里面的数据 |

| 返回参数    | 类型     | 描述     |
|---------|--------|--------|
| data    | Json   | 群聊验证消息 |
| message | String | 返回的信息  |
| status  | String | 状态     |
