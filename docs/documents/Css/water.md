# Css3 阴影制作水滴效果

:::tip
主要使用 box-shadow和border-radius属性
:::
![图片](/doc/css/water.jpg)
## html部分
```html
// html 部分
<div class="drops">
    <div class="drop"></div> 
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
</div>
```
## css部分
```css
// css 部分
.drops {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.drop {
    position: absolute;
    width: 150px;
    height: 150px;
    background: transparent;
    border-radius: 53% 47% 34% 66% / 45% 63% 37% 55%;
    box-shadow: inset 10px 10px 10px rgba(0,0,0,0.05),
                15px 25px 10px rgba(0,0,0,0.1),
                15px 20px 20px rgba(0,0,0,0.05),
                inset -10px -10px 15px rgba(255,255,255,0.9);
}
.drop::before {
    content: '';
    position: absolute;
    top: 25px;left: 35px;
    background: #fff;
    width: 20px;
    height: 20px;
    border-radius: 64% 36% 70% 30% / 64% 30% 70% 36%;
}
.drop::after {
    content: '';
    position: absolute;
    top: 25px;left: 65px;
    background: #fff;
    width: 10px;
    height: 10px;
    border-radius: 64% 36% 70% 30% / 64% 55% 45% 36%;
}
.drop:nth-child(2) {
    transform: scale(0.5) translate(-200px,180px);
    border-radius: 49% 51% 31% 69% / 38% 55% 45% 62%;
}
.drop:nth-child(3) {
    transform: scale(0.5) translate(280px,10px);
    border-radius: 57% 43% 45% 55% / 38% 55% 45% 62% ;
}
.drop:nth-child(4) {
    transform: scale(0.35) translate(120px,-350px);
    border-radius: 57% 43% 30% 70% / 68% 55% 45% 32%;
}
```

