# 正式版本发布流程
- 修改pack.toml中的版本号，并提交mr合并入main分支
- 使用git给main分支上修改版本号的这个commit打上对应版本的tag（vx.x.x），并将tag推送到github上
- 把main分支最新commit（即版本修改commit）推送到github上的 release 分支
- 在github的[tags](https://github.com/HLGOrganization/TFC_Arduous_Trek/tags)页面从新版本的tag创建release，并填写改动信息

# 测试版本发布流程
- 将代码推送到github的test-release分支
- 到 https://github.com/HLGOrganization/TFC_Arduous_Trek/actions 查收结果

# 增加客户端mod
- 为了方便生成服务端包，请在增加后更新.clientonlymodlist文件

# 发包使用的工具
- packwiz https://packwiz.infra.link/tutorials/creating/getting-started/
- 因为原始repo的发布文件已经过期，使用了个人fork的版本：https://github.com/wanquanw/packwiz-build

# 修改整合包内的默认配置
- 直接修改整合包内的options.txt文件即可，发包时会将这个作为整合包的默认配置
- 包括但不限于：键位设置、加载的资源包和加载顺序

# 修改整合包服务器jvm参数配置
- 修改variables.txt中的`JAVA_ARGS=`后面的内容