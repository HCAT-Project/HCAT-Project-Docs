---
sidebar_position: 2
---

# change_avatar

# 描述

更改头像

**!!\[饼干需要\]!!**

| 请求地址                       | 请求方式     |
|----------------------------|----------|
| /api/account/change_avatar | GET/POST |

| 参数        | 类型               | 描述                                     |
|-----------|------------------|----------------------------------------|
| auth_data | \[Cookie\]String | 存在\[饼干\]里面的数据                          |
| file_hash | String           | 文件的哈希值,请先[上传文件](/docs/api/file/upload) |

| 返回参数    | 类型     | 描述    |
|---------|--------|-------|
| message | String | 返回的信息 |
| status  | String | 状态    |
