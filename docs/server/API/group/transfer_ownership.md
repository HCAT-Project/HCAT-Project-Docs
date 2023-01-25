---
sidebar_position: 2
---
# transfer_ownership
# 描述
转让群主

**!!\[饼干需要\]!!**

| 请求地址 | 请求方式 |
| --- | --- |
| /api/group/transfer_ownership | GET |


|参数|类型|描述|
|---|---|---|
|group_id|String|群聊ID|
|member_id|String|用户ID|
|auth_data|\[Cookie\]String|存在\[饼干\]里面的数据|

|返回参数|类型|
|---|---|---|
|message|String|返回的信息|
|status|String|状态|
