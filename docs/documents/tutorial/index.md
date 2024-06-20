# vuepress博客搭建
## 博客搭建
### 搭建环境检测
win+R终端打开cmd，输入node -v，请确保你的 Node.js 版本号 >= 8.6。
```javascript
node -v
```
### 创建博客
```javascript
<!-- 安装脚手架工具 -->
npm install @vuepress-reco/theme-cli -g

<!-- 创建项目 -->
theme-cli init blog
```
上述命令执行后，在命令行窗口会进行信息配置
```javascript
<!-- 项目标题 -->
? What's the title of your project?

<!-- 项目描述 -->
? What's the description of your project?

<!-- 作者姓名 -->
? What's the author's name?

<!-- 选择博客风格 -->
? What style do you want your home page to be?(Select afternoon-grocery, if you 
want to download reco_luan's '午后南杂') (Use arrow keys)

❯ blog   
  doc 
  afternoon-grocery 
```

接下来进入您的工程目录，启动您的项目
```javascript
<!-- 进入项目目录 -->
cd blog 

<!-- 安装项目依赖 -->
npm install

<!-- 运行项目 -->
npm run dev
```
访问命令行输出的ip地址，一般为http://localhost:8080(若端口被占用则依次递增，以终端输出为准)，即可访问您的博客了！

![图片](/doc/tut/construct1.png)
### 上传Gitee
1. 创建仓库，并且打包上传代码（仓库名和个人空间地址一样，不一样的话，你最后的博客链接会多加 ‘/你的仓库’）
![图片](/doc/tut/construct0.jpg)
![图片](/doc/tut/construct01.jpg)
2. 点击仓库的服务 -> Gitee Pages
![图片](/doc/tut/construct3.jpg)
3. 没有申请开通的，申请开通；开通后，选择部署分支，部署目录。更新后点击5的链接即可访问
![图片](/doc/tut/construct4.jpg)

## 博客配置
### 工程结构
```javascript
├─ node_modules //存放着项目所需的依赖，我们不需要关心
├─ docs  //该目录下存放您编写的文档
│  └─ theme-reco
│     ├─ api.md
│     ├─ plugin.md
│     ├─ theme.md
│     └─ README.md
├─ blogs //该目录下存放您编写的博客文章
│     ├─ category1
│     │  ├─ 2018
│     │  │  └─ 121501.md
│     │  └─ 2019
│     │     └─ 092101.md
│     ├─ category2
│     │  ├─ 2016
│     │  │  └─ 121501.md
│     │  └─ 2017
│     │     └─ 092101.md
│     └─ other
│        └─ guide.md
├─ .vuepress // 该目录下存放项目配置文件与静态资源
│ 	├─ config.js //该文件用于配置项目
│   └─ public // 该目录下存放网页中所需的静态资源
│     ├─ hero.png // 首页大图
│     ├─ logo.png // 站点logo
│     ├─ favicon.ico //站点图标
│     └─ avatar.png //头像
├─ package.json //依赖管理文件
└─ README.md //这里存放着博客首页的内容
```
### 配置启动页
>启动页展示的内容为博客标题与描述，即您在创建工程时输入的内容<br />
您可以在.vuepress/config.js下找到如下内容，通过修改对应的字符来改变您的启动页
```javascript
module.exports = {
  "title": "test", 
  "description": "test",
}
```
### 配置首页
>首页即为启动页之后的主页面<br />
首页的内容由项目根目录下的README.md 配置生成，您可以通过更改其中的配置项来变更您的首页

```javascript
---
home: true  //指定该文件为您的首页，改为false则不作为首页
heroText: vuepress-theme-reco  //首页居中显示的文本
tagline: A simple and beautiful vuepress blog theme. // 首页显示的标语
// heroImage: /hero.png  //首页显示的主图，默认被注释，取消注释可显示图片
// heroImageStyle: {  // 首页主图的样式控制，默认被注释
//     maxWidth: '600px',
//     width: '100%',
//     display: block,
//     margin: '9rem auto 2rem',
//     background: '#fff',
//     borderRadius: '1rem',
// }
bgImageStyle: { //背景图片样式 / 可设置全屏
  height: '450px'
}
// 以下内容基本上不生效，可以不用关心
isShowTitleInHome: false 
actionText: Guide
actionLink: /views/other/guide
features:
- title: Yesterday
  details: 开发一款看着开心、写着顺手的 vuepress 博客主题
- title: Today
  details: 希望帮助更多的人花更多的时间在内容创作上，而不是博客搭建上
- title: Tomorrow
  details: 希望更多的爱好者能够参与进来，帮助这个主题更好的成长
---
```

>Tip:代码中所引用的图片，均以.vuepress/public 为根目录
### 其他配置
- 文章列表是根据您的文章自动生成的，一旦您发布的文章中的含有Front Matter，系统会自动将其收集至首页，默认按时间顺序展示
- 个人资料卡的头像和昵称由.vuepress/config.js进行配置，您可以找到如下内容，并进行修改配置。Category和Tag项则跟您的文章中标注的分类和标签自动生成
```javascript
"author": "xxx", //昵称
"authorAvatar": "/avatar.png", //头像
```
- Friend Link 则是您可以自由更改的，它的配置在.vuepress/config.js中，您可以找到如下内容，并对应进行修改配置
```javascript
    "friendLink": [
      {//每一个{}中为一个友链
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
```
- 底边栏展示了如主题、备案信息、版权、年份等信息，这些内容仍需要您前往.vuepress/config.js进行修改
```javascript
"author": "xxx", //版权信息，与昵称为同一数据
"record": "xxxx", //备案信息
"startYear": "xxxx" //开始年份
```
- logo,您需要前往.vuepress/config.js找到如下内容，修改您的logo图片，该图片存储在.vuepress/public中
```javascript
"logo": "/logo.png",
```
- 搜索,您需要前往.vuepress/config.js找到如下内容，修改搜索相关配置
```javascript
"search": true,  //是否开启搜索
"searchMaxSuggestions": 10,  //最多的搜索数量
```
- 导航，您需要前往.vuepress/config.js找到如下内容，修改导航相关配置
```javascript
    "nav": [  //如下代码中，每个{...}即为一个导航块
      {
        "text": "Home",       //导航文本
        "link": "/",          //路由地址
        "icon": "reco-home"   //图标
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Docs",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/recoluan",
            "icon": "reco-github"
          }
        ]
      }
    ],
```
>Tips:图标则为导航文本左边显示的图标，可以在[reco](https://vuepress-theme-reco.recoluan.com/views/1.x/configJs.html#图标)图标库中寻找您需要的图标，也可以不要图标
### 文档写作
> 在markdown文档的顶部插入配置代码

完整Front Matter案例：
```javascript
---
title: 标题
date: 2019-08-08
sidebar: 'auto'
categories:
 - xxx1
 - xxx2
tags:
 - xxx
 - xxx
keys:
 - 'xxxx'
publish: false
---
```
#### 上述字段含义：
<p><span style="color:#f00">title</span>：文章标题，放弃通过一级目录定义标题的方式，改在Front Matter中定义。</p>
<p><span style="color:#f00">date</span>：文章创建日期，格式 2019-08-08 或 2019-08-08 08:08:08。</p>
<p><span style="color:#f00">sidebar</span>：是否开启侧边栏。</p>
<p><span style="color:#f00">tags</span>：所属分类。</p>
<p><span style="color:#f00">keys</span>：所属分类。</p>
<p><span style="color:#f00">publish</span>：文章是否发布。</p>

>另外还有一些Vuepress 默认主题的变量例如prev, next，请移步 [ 官方文档 ](https://vuepress.vuejs.org/zh/guide/frontmatter.html#其他格式的-front-matter)

## 插件应用
> 举例（公告插件）
- 安装依赖
```javascript
npm i @vuepress-reco/vuepress-plugin-bulletin-popover
```
- 修改配置：在config.js下的module.exports的plugin下加入以下代码：
```javascript
['@vuepress-reco/vuepress-plugin-bulletin-popover', {
      title: '消息提示',
      body: [
        {
          type: 'title',
          content: 'welcome to my Blog',
          style: 'text-aligin: center;'
        },
        {
          type: 'image',
          src: '/avatar.jpg'
        }
      ],
      footer: [
        {
          type: 'button',
          text: '打赏',
          link: '/donate'
        }
      ]
    }]
```
![图片](/doc/tut/construct2.png)

> 注意和下一个插件之间有逗号间隔，打赏对应的超链接/donate，你可以在这里定义你自己的打赏页面

> 插件安装一定要注意和自己主题版本是不是兼容，更多插件，请移步官方[插件](https://vuepress.vuejs.org/zh/plugin/)

