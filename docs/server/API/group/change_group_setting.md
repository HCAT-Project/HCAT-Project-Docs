---
sidebar_position: 2
---
# change_group_setting
# 描述
修改群聊设置

**!!\[饼干需要\]!!**

| 请求地址 | 请求方式 |
| --- | --- |
| /api/group/change_group_setting | GET |


|参数|类型|描述|
|---|---|---|
|group_id|String|群聊ID|
|setting|String|设置项|
|auth_data|\[Cookie\]String|存在\[饼干\]里面的数据|

|返回参数|类型|
|---|---|---||message|String|返回的信息|
|status|String|状态|
