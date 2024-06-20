# 若依项目搭建

## 搭建环境
### 系统需求
* JDK >= 1.8
* MySQL >= 5.7
* Maven >= 3.0
* Redis >= 3
* Node >= 12
:::tip
环境配置不做过多叙述，网上教程很多，安装好以后，配置下环境变量就可以使用了
:::
### 后端环境
:::tip
安装JDK,配置java环境；安装Navicat,管理数据库；安装phpstudy,链接数据库；安装Redis一般无需配置），后端启动，先链接数据库，启动Redis,运行项目
:::
### 前端环境
:::tip
安装nodejs,配置环境变量，运行项目即可
:::
## 项目搭建
### 克隆项目
:::tip
在gitee上下载若依项目，[快捷链接](https://gitee.com/y_project/RuoYi-Vue)
:::
![图片](/doc/tut/ruoyi_1.jpg)
:::tip
克隆项目：（win +R）,输入cmd, 点击确定，在弹出的窗口输入git clone + 你复制的链接，点击回车。
:::
![图片](/doc/tut/ruoyi_2.jpg)
![图片](/doc/tut/ruoyi_3.jpg)
### 项目目录结构
:::tip
项目下载完成后，找到文件夹 RuoYi-Vue
:::
![图片](/doc/tut/ruoyi_4.jpg)
### 运行后端服务
:::tip
使用IDEA打开项目，注意这两个文件，这是在Navicat执行的文件
:::
![图片](/doc/tut/ruoyi_5.jpg)
:::tip
打开MySOL，创建数据库
:::
![图片](/doc/tut/ruoyi_6.jpg)
:::tip
创建好后，把上面的两个 .sql 文件拖进去，运行，生成数据库表
:::
![图片](/doc/tut/ruoyi_8.jpg)
:::tip
修改数据库信息
:::
![图片](/doc/tut/ruoyi_7.jpg)
:::tip
修改项目基本配置信息：Redis
:::
![图片](/doc/tut/ruoyi_9.jpg)
:::tip
运行若依后端项目
:::
![图片](/doc/tut/ruoyi_10.jpg)
:::tip
项目运行成功
:::
![图片](/doc/tut/ruoyi_11.jpg)
### 运行前端项目
:::tip
把前端项目ruoyi-ui，用vscode打开，点击Ctrl + ` ，在终端执行
:::
```javascript
npm install // 下载项目依赖
npm run dev // 运行项目
```
![图片](/doc/tut/ruoyi_12.jpg)
:::tip
复制打开链接
:::
![图片](/doc/tut/ruoyi_13.jpg)
## 二次开发
:::tip
新建数据库表，注释最好写上,后边生成代码的时候用得到
:::
![图片](/doc/tut/ruoyi_14.jpg)
:::tip
在前端项目中，点击《代码生成》，在点击《导入》，然后选择导入你刚刚创建的数据库表，点击《确定》
:::
![图片](/doc/tut/ruoyi_15.jpg)
:::tip
点击《编辑》，信息编辑完成后，点击《提交》
:::
![图片](/doc/tut/ruoyi_16.jpg)
![图片](/doc/tut/ruoyi_17.jpg)
:::tip
点击《生成代码》，把生成的压缩包解压
:::
![图片](/doc/tut/ruoyi_18.jpg)
![图片](/doc/tut/ruoyi_19.jpg)
:::tip
把 .sql 文件导入数据库运行一遍，然后把压缩包后端代码放入到项目后端代码中，重启后端项目
:::
![图片](/doc/tut/ruoyi_20.jpg)
:::tip
把压缩包前端代码放入到项目前端代码中，重启前端项目
:::
![图片](/doc/tut/ruoyi_21.jpg)