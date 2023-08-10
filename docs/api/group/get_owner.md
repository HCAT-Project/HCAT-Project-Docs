---
sidebar_position: 2
---
# get_owner
# 描述
获得群聊群主

**!!\[饼干需要\]!!**


| 请求地址 | 请求方式 |
| --- | --- |
| /api/group/get_owner | GET/POST |
|auth_data|\[Cookie\]String|存在\[饼干\]里面的数据|

|参数|类型|描述|
|---|---|---|
|group_id|String|群聊ID|


|返回参数|类型|描述|
|---|---|---|
|data|String|群主ID|
|message|String|返回的信息|
|status|String|状态|
