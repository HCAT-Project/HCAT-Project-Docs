---
sidebar_position: 2
---
# send_group_msg
# 描述
发送群聊消息

**!!\[饼干需要\]!!**

| 请求地址 | 请求方式 |
| --- | --- |
| /api/chat/send_group_msg | GET |


|参数|类型|描述|
|---|---|---|
|group_id|String|群聊ID|
|msg|String|发送的消息|
|auth_data|\[Cookie\]String|存在\[饼干\]里面的数据|

|返回参数|类型|
|---|---|---|
|message|String|返回的信息|
|status|String|状态|