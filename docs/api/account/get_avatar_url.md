---
sidebar_position: 2
---

# get_avatar_url

# 描述

获取头像的URL

**!!\[饼干需要\]!!**

| 请求地址                        | 请求方式     |
|-----------------------------|----------|
| /api/account/get_avatar_url | GET/POST |

> 不会真有人用POST获取吧?不会吧不会吧?

| 参数        | 类型               | 描述            |
|-----------|------------------|---------------|
| auth_data | \[Cookie\]String | 存在\[饼干\]里面的数据 |
| user_id   | String           | \[选填\]用户id    |
| hash_     | String           | \[选填\]文件哈希    |

注: `user_id`和`hash_`不能同时为空

| 返回参数    | 类型     | 描述     |
|---------|--------|--------|
| url     | String | 头像的url |
| message | String | 返回的信息  |
| status  | String | 状态     |

注: 返回的url是`相对url`,请自行拼接.
