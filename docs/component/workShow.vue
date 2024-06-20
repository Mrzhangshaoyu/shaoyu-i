<template>
    <div class="container">
        <div class="item" v-for="i in list" :key="i.index">
            <img :src="i.img" :alt="i.img">
            <h2>{{ i.title }}</h2>
        </div>
    </div>
</template>
<script setup>
    const list = [
        { title: '3D换肤',img:'/works/peeling.gif' },
        { title: '后台管理系统',img:'/works/ht.gif' },
        {title: '3D视差网站',img:'/works/parallax.gif' },
        { title: '3D模型切换',img:'/works/points.gif' },
        { title: '个人网站',img:'/works/person.gif' },
        { title: '3D网站嵌入',img:'/works/implant.gif' },
        { title: '3D鞋架',img:'/works/shoes.gif' },
        { title: 'NodeJs聊天室',img:'/works/chatroom.gif' },
        { title: '3D音频可视化',img:'/works/yp.gif' },
    ]
</script>
<style scoped>
    .container {
        max-width: calc(1440px - 64px);
        margin: 0 auto;
        box-sizing: border-box;
        padding: 20px 0;
        display: grid;
        justify-content: space-evenly;
        gap: 10px;
        grid-template-columns: repeat(3,450px);
    }
    .item  img{
        width: 100%;
        height: auto;
    }
    .item h2 {
        font-family: '楷体';
        font-weight: bold;
        font-size: 20px;
        box-sizing: border-box;
        padding: 5px 0 15px 0;
        text-align: center;
    }
    @media (max-width: 1350px) {
        .container {
            grid-template-columns: repeat(4,260px);
        }
    }
    @media (max-width: 1100px) {
        .container {
            grid-template-columns: repeat(3,260px);
        }
    }
    @media (max-width: 850px) {
        .container {
            grid-template-columns: repeat(2,260px);
        }
    }
    @media (max-width: 675px) {
        .container {
            grid-template-columns: repeat(1,260px);
        }
    }
    @media (max-width: 450px) {
        .container {
            grid-template-columns: repeat(1,1fr);
        }
    }
</style>