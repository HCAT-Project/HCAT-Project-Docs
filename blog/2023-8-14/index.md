---
slug: 勉强能用（？）
title: HCAT 8.12 更新进展
authors: [ hsn8086 ]
tags: [ log ]
---

又好久没更了...
这几个月似乎都在摆烂..?

更新的内容大概如下吧:

- 部分任务又多线程while循环+time.sleep()改成了schedule.
- 克隆客户端由手写命令行换成了gitpython,并加入多线程.
- 更换了用于处理密码的哈希算法,现在换成`scrypt`啦!
- 框架更新!
- 删去了`RPDB`,加入了`DBAdapter`,默认是`mongo`(其实是现在只写了`mongo`的adapter(xb).
- 加入了根本没文档的插件系统!
- 加入了ws的支持.
- 加入了用户头像和bio!
- 群组现在可以pin消息啦!

  (其实上面两条前端还没支持)
- 以前一直没加的`—help`现在也支持啦!
