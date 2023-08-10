---
sidebar_position: 2
---

# change_remark

# 描述

修改对群组的备注

**!!\[饼干需要\]!!**

| 请求地址                     | 请求方式     |
|--------------------------|----------|
| /api/group/change_remark | GET/POST |

| 参数        | 类型               | 描述            |
|-----------|------------------|---------------|
| member_id | String           | 成员ID          |
| remark    | String           | 备注            |
| auth_data | \[Cookie\]String | 存在\[饼干\]里面的数据 |

| 返回参数    | 类型     | 描述    |
|---------|--------|-------|
| message | String | 返回的信息 |
| status  | String | 状态    |
