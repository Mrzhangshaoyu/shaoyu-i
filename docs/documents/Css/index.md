
# css基本样式及布局

## 样式简单初始化
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: middle;
}
a {
    text-decoration: none;
}
ul {
    list-style: none;
}
```
## 滚动条样式
```css
::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}
/* 正常情况下滑块的样式 */
::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, .05);
    border-radius: 2px;
    -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, .1);
}
/* 鼠标悬浮在该类指向的控件上时滑块的样式 */
:hover::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, .2);
    border-radius: 2px;
    -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, .1);
}
/* 鼠标悬浮在滑块上时滑块的样式 */
::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, .4);
    -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, .1);
}
/* 正常时候的主干部分 */
::-webkit-scrollbar-track {
    border-radius: 2px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
    background-color: inherit;
}
/* 鼠标悬浮在滚动条上的主干部分 */
::-webkit-scrollbar-track:hover {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .4);
    background-color: inherit;
}
```
## flex布局
:::tip
请移步：[阮一峰Flex布局教程](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
:::
## grid布局
:::tip
请移步：[阮一峰Grid网格布局教程](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)
:::