---
sidebar_position: 2
---

# send_friend_msg

# 描述

私信

**!!\[饼干需要\]!!**

| 请求地址                      | 请求方式     |
|---------------------------|----------|
| /api/chat/send_friend_msg | GET/POST |

| 参数        | 类型               | 描述            |
|-----------|------------------|---------------|
| friend_id | String           | 好友ID          |
| msg       | String           | 发送的消息         |
| auth_data | \[Cookie\]String | 存在\[饼干\]里面的数据 |

| 返回参数    | 类型     | 描述    |
|---------|--------|-------|
| message | String | 返回的信息 |
| status  | String | 状态    |
