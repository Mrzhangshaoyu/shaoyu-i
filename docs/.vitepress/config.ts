import { defineConfig } from 'vitepress'
export default defineConfig({
  base:'/shaoyu-i/',
  ignoreDeadLinks: true,
  title: "张小兔。",
  outDir: "./dist",
  head:[
    ['link',{rel:'icon',href:'/shaoyu-i/static/logo.png'}],
    ['script',{},
      `var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?c3c0d2c7726087a3f72dfc89ae36fdcf";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();`
    ]
  ],
  themeConfig: {
    logo:"/static/logo.png",
    siteTitle:"张小兔。",
    // carbonAds: { // 广告
    //   code: 'your-carbon-code',
    //   placement: 'your-carbon-placement'
    // },
    search: {
      provider: 'local'
    },
    nav: [
      { text: "文章", link: "/articles/"},   
      { text: "文档", 
        items: [
          {text: "Css",link: "/documents/Css/"},
          {text: "Vue",link: "/documents/Vue/"},
          {text: "NodeJs",link: "/documents/NodeJs/"},
          {text: "ThreeJs",link: "/documents/ThreeJs/"},
          {text: "教程",link: "/documents/tutorial/"},
        ]
      },  
      {text: "作品集",link: "/works/"}, 
      { text: "Gitee", link: "https://gitee.com/shaoyu-i"},
    ],
    sidebar: {
      '/articles/': [
        { 
          text:'文章',
          collapsed: true,
          items:[
            {text:'导读',link:'/articles/'},
            {text:'链接',link:'/articles/links'},
          ]
        }
      ],
      '/documents/': [
        {
          text:'Css', 
          collapsed: true,
          items: [
            {text:'css基本样式及布局',link:'/documents/Css/'},
            {text:'水滴效果',link:'/documents/Css/water'},
          ]
        },
        {
          text:'Vue', 
          collapsed: true,
          items: [
            {text:'Vue组件通讯',link:'/documents/Vue/'},
            {text:'Vue3 + Ts',link:'/documents/Vue/vueTs'},
          ]
        },
        {
          text:'NodeJs', 
          collapsed: true,
          items: [
            {text:'Node搭建webSocket',link:'/documents/NodeJs/'},
            {text:'Node搭建后台管理系统',link:'/documents/NodeJs/manage'},
          ]
        },
        {
          text:'ThreeJs', 
          collapsed: true,
          items: [
            {text:'ThreeJs初始化',link:'/documents/ThreeJs/'},
            {text:'VR看房',link:'/documents/ThreeJs/vr_room'},
            {text:'更多案例',link:'/documents/ThreeJs/more'},
          ]
        },
        {
          text:'教程', 
          collapsed: true,
          items: [
            {text:'vuepress博客搭建',link:'/documents/tutorial/'},
            {text:'vitepress博客搭建',link:'/documents/tutorial/vitepress'},
            {text:'若依项目搭建',link:'/documents/tutorial/ruoyi'},
            {text:'Stable Diffusion搭建教程',link:'/documents/tutorial/AI'},
          ]
        },
       
      ]
    },
    // footer: {
    //   copyright: 'Copyright © 2019-present Evan You'
    // }
  }
})
