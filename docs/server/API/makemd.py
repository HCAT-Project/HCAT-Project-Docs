api = input("输入api:")
father = input("father:")
with open(api + ".md", 'w',encoding="UTF-8") as f:
    f.write("""---
sidebar_position: 2
---
""")
    f.write(f"# {api}\n")
    intro = input("intro:")
    a = input("cookie(y/n)?")
    if a == 'y':
        cookie = '**!!\\[饼干需要\\]!!**'
    elif a=='n':
        cookie = "\n"
    f.write(f"""# 描述
{intro}\n\n{cookie}\n
| 请求地址 | 请求方式 |
| --- | --- |
""")
    pog = input("p/g")
    if pog == "p":
        mode = "POST"
    elif pog == "g":
        mode = "GET"
    f.write(f"""| /api/{father}/{api} | {mode} |\n\n
|参数|类型|描述|
|---|---|---|
""")
    while True:
        canshu=input("参数")
        if canshu == 'end':
            if a == 'y':
                f.write("|auth_data|\\[Cookie\\]String|存在\\[饼干\\]里面的数据|")
            f.write("\n")
            break
        leixing=input("类型")
        if leixing == 's':
            leixing="String"
        elif leixing == "i":
            leixing="Int"
        elif leixing== 'l':
            leixing="List"
        else:
            leixing=leixing
        miaoshu=input("描述")
        f.write(f"|{canshu}|{leixing}|{miaoshu}|\n")

    f.write("""
|返回参数|类型|
|---|---|---|""")
    l2=input("老两样？(y/n)")
    while True:
        canshu = input("参数")
        if canshu == 'end':
            if l2 == "y":
                f.write("""|message|String|返回的信息|
|status|String|状态|""")
            f.write("\n")
            break
        leixing = input("类型")
        if leixing == 's':
            leixing = "String"
        elif leixing == "i":
            leixing = "Int"
        elif leixing == 'l':
            leixing = "List"
        else:
            leixing = leixing
        miaoshu = input("描述")
        f.write(f"|{canshu}|{leixing}|{miaoshu}|\n")
