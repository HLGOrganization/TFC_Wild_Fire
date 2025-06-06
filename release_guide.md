# 正式版本发布流程
- 修改pack.toml中的版本号，并提交mr合并入main分支
- 在github页面创建新的release并建立对应的版本号tag
  - 网址：https://github.com/HLGOrganization/TFC_Wild_Fire/releases/new
  - 在页面中创建一个新tag，tag名称对应版本号，例如：v1.0.16
  - target分支选择main，填写发布信息，点击发布
- 将改动推送到github上的 release 分支
  - vscode - 源代码管理 - 更多操作 - 签出到 - 创建新分支 - 输入 "release"回车 => 自动切换到release分支
  - vscode - 源代码管理 - 更多操作 - 推送 => 提示没有远端分支 => 点击创建并推送
- 到github下的action页面（https://github.com/HLGOrganization/TFC_Wild_Fire/actions）查收结果
- 检查action页面生成的整合包，如果没有问题，到release把这些内容上传

# 测试版本发布流程
- 将改动推送到github的test-release / test-client / test-server / test-patch 分支，对应不同的类型生成
  - 推送方式参考上面正式版发布流程的推送步骤
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
- 修改variables.txt中的`JVM_ARGS=`后面的内容