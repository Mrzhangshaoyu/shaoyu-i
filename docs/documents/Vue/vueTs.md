# Vue3 + ts

## Vue-Ts开发环境搭建
:::tip
基于vite创建vue-ts开发环境
:::
```cmd
npm create vite@latest vue-ts-pro -- --template vue-ts
/*
说明：
    1. npm create vite@latest 基于最新版本的vite进行项目创建
    2. vue-ts-pro 项目名称
    3. -- --template vue-ts 选择Vue + Ts 的开发模板
    4. 也可以执行 npm create vite，然后选择ts模板
*/
```
:::tip
和 .vue 文件Ts环境相关的工具职责说明：
:::
- 开发阶段
    - Volar工具对.vue文件进行实时的类型错误反馈。
    - TypeScript Vue Plugin 工具用于支持在TS中 import *.vue文件。
- 打包阶段
    - vue-tsc工具负责打包时最终的类型检查。（packjson中运行命令自带）
## ref定义类型注解
:::tip
场景和好处：为ref标注类型之后，即可以在给ref对象的value赋值时校验数据类型，同时在使用value的时候可以获得代码提示。
:::
```ts
type ListItem = {
    id: number
    name: string
}
const list = ref<ListItem[]>([])
list.value = [{
    id: 1,
    name: '张少宇'
}]
// 说明：本质上时给ref对象的value属性添加类型约束。
const str = ref('') // 类型推论  str只能赋值字符串
```
:::tip
如何标注类型：ref函数和Ts的配合通常分为俩种情况，类型推导和泛型指定类型。
:::
1. 如果是简单的数据，推荐使用类型推导。
```ts
const count = ref(100)
```
2. 如果是复杂的数据，推荐使用泛型指定类型。
```ts
const year = ref<string | number>(2008)
year.value = '2020'
year.value = 2023
```
> 说明：通过泛型指定类型之后除了修改value做了类型约束，ref函数的初始值也有了类型约束。
## reactive标注类型
:::tip
场景和好处：为reactive标注类型之后，即可以在响应式对象在修改属性值的时候约束类型，也可以在使用时获得代码提示。
:::
:::tip
如何标注类型：reactive函数和Ts的配合通常分为俩种情况，类型推导和类型别名。
:::
1. 如果根据默认参数对象推导的类型符合要求，推荐使用类型推导。
```ts
const form = reactive({
    username:'',
    password:''
})
```
2. 如果根据默认对象推导不出我们响应的类型，推荐使用类型别名给变量显示注解对应类型。
```ts
type form = {
    username: string
    password: string
    isAgree?: boolean
}
const LoginForm = reactive<form>({
    username:'',
    password:'',
    isAgree: false
})
```
> 说明：显示注解变量之后除了对属性赋值的时候做了类型约束，而且要求reactive的成功初始值也满足类型要求。
## computed标注类型
:::tip
计算属性通常由已知的响应式数据计算得到，所以依赖的数据类型一旦确定通过自动推导就可以知道计算属性的类型，另外根据最佳实践，计算属性多数情况下是只读的，不做修改，所以配合Ts一般只做代码提示。
:::
1. 语法： computed<返回值类型>（）
```ts
count = ref(0)
const doubleCount = computed(() => count.value * 2) // 自动推导出doubleCount是数字类型
```
2. 更复杂的例子
```ts
// 需求：给ref函数标注类型，接收后端返回的对象列表，然后使用计算属性做过滤计算，计算得到单价大于500的商品。
type Item = {id:string;name:string;price:number}
const list = ref<Item[]>([
    { id:'1001', name:'男鞋', price: 888 },
    { id:'1002', name:'女鞋', price: 500 },
    { id:'1003', name:'衬衫', price: 200 }
])
const filterList = computed<Item[]>(() => {
    return list.value.filter(item => item.price > 500)
})
```
## 事件函数标注类型
1. 为什么为事件处理函数需要标注类型：
> 原声dom事件处理函数的参数默认会自动标注为any类型，没有任何类型提示，为了获得良好的类型提示，需要手动标注类型。
```vue
<template>
    <div>
        <input type="text" @change="inputChange">
    </div>
</template>
<script setup lang="ts">
    const inputChange = (e) => {
        // e自动推断为any类型    
    }
</script>
```
2. 如何为事件处理函数标注类型：
> 事件处理函数的类型标注主要做两个事：
- 给事件对象形参e标注为Event类型，可以获得事件对象的相关类型提示：
```ts
const inputChange = (e:Event) => {
    //e 输入e会获取事件提示
}
```
- 如果需要更加精确的DOM类型提示可以使用断言(as)进行操作。
```ts
const inputChange = (e:Event) => {
    console.log((e.target as HTMLInputElement). 提示)
}
```
## 模板标注类型
1. 为什么给模板引用标注类型：
> 给模板引用标注类型，本质上是给ref对象的value属性添加了类型约束，约定value属性中存放的特定类型的DOM对象，从而在使用的时候获得相应 的代码提示。
```vue
<template>
    <div>
        <input type="text" ref="elRef">
    </div>
</template>
<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    const elRef = ref(null)
    onMounted(() => elRef.value.focus()) // elRef.value. 不会提示后续方法
</script>
```
2. 如何进行类型标注：
> 通过具体的DOM类型联合null作为泛型参数，比如我们想获取一个input  dom元素：
```vue
<template>
    <div>
        <input type="text" ref="elRef">
    </div>
</template>
<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    const elRef = ref<HTMLInputElement | null>(null)
    onMounted(() => elRef.value.focus()) // elRef.value. 会提示后续方法
</script>
```
## 组件标注类型
- InstanceType<typeof 组件>   ---> 获取组件类型
- InstanceType 是 Ts 内置泛型，用来检测想知道的类型。
```vue
//语法
<XXX ref="refxx" />
improt XXX form './XXX.vue'
const refxx = ref<InstanceType<typeof XXX> | null>(null)
```
```vue
// father.vue
<template>
    <button @click="show">点击</button>
    <Child ref="refChild" />
</template>
<script setup lang="ts">
    import { ref } from 'vue'
    improt  Child from './Child.vue'
    const refChild = ref<InstanceType<typeof Child>|null>(null)
    const show = () => {
        refChild.value. // 会自动提示子组件中的方法、数据   
        refChild.value?.changeNum() // 调用子组件的方法 
    }
</script>
// Child.vue
<template>
    <div class="child-page">Child</div>
</template>
<script setup lang="ts">
    import { ref } from 'vue'
    const num = ref(20)
    const changeNum = () => {
        num.value += 20    
    }
    // num 和 changeNum 暴露出去，父组件通过ref引用
    defineExpose({
        num,
        changeNum    
    })
</script>
```
## 可选链操作符和非空断言
1. 空值场景说明：
> 当对象的属性可能是 null 或 undefined 的时候，被称之为“空值”，尝试访问空值身上的属性或方法会发生类型错误。
2. 可选链方案：
> 可选链 ?. 是一种访问嵌套对象属性的安全的方式，可选链前面的值为 undefined 或者 null 时，它会停止运算。
```ts
const userInfo = ref({})
usserInfo = res.data
const m = userInfo?.data?.name
```
3. 逻辑判断方案：
> 通过逻辑判断，只有有值的时候才继续执行后面的属性访问语句。
```ts
const userInfo = ref({})
usserInfo = res.data
if(userInfo.data) {
    const m = userInfo?.data?.name
}
```
4. 非空断言方案：
> 非空断言（ ！）是指我们开发这明确知道当前的值一定不是null或者undefined，让Ts通过类型校验。
```ts
const inputRef = ref<HTMLInputElement | null>(null)
onMounted(() => {
    inputRef.value!.focus()
})
```
> 注意：使用非空断言要该外小心，它没有实际的JS判断逻辑，只是通过了TS的类型校验，容易直接把空值出现在实际的执行环境里。
## defineProps标注类型（给组件的Props标注类型）
1. 为什么给Props标注类型
- 确保给组件传递的prop是类型安全的
```vue
// 正确
<Button color="red"></Button>
//错误
<Button :color="100"></Button>
```
- 在组件内部使用props和为组件传递prop属性的时候会有良好的代码提示。

![图片](/doc/vue/vue_ts_1.jpg)

2. Props类型标注基础使用
> 语法：通过defineProps宏函数对组件的props进行类型标注。
```ts
// 按钮组件由俩个prop参数，color类型为string且必填，size类型为string且可选，怎么定义类型

// 1. 使用别名类型或者接口定义Props类型
type Props = {
    color: string
    size?: string
}
// 2. 使用defineProps注解类型
const props = defineProps<Props>()

// 说明：按钮组件传递prop属性的时候必须满足color是必传项且类型为string，size为可选属性，类型为string。
```
3. Props默认值设置
> 场景：Props中的可选参数通常除了指定类型之外还需要提供默认值，可以使用withDefaults宏函数来进行设置。
```ts
type Props = {
     color: string
     size?: string 
 }
 const props = withDefaults(defineProps<Props>(), {
     size: 'middle' 
 })
```
![图片](/doc/vue/vue_ts_2.jpg)

![图片](/doc/vue/vue_ts_3.jpg)

## defineEmits标注类型（给组件的emits标注类型）
1. 为什么给组件的emits标注类型
> 作用：可以约束事件名称并给出自动提示，确保不会拼写错误，同时约束传参类型，不会发生参数类型错误。
2. 如何为组件的emits标注类型
> 语法： 通过 definEmits 宏函数进行类型标注。
```vue
// 需求： 子组件触发一个名称为“get-msg”的事件，并且传递一个类型为string的参数。
// fater.vue
<template>
    <Son @get-msg="get-msg" />
</template>
<script setup lang="ts">
import Son from './Son.vue'
const get-msg = (val) => {
    console.log(val)
}
</script>
```
```vue
// Son.vue
<template>
    <button @click="send"></button>
</template>
<script setup lang="ts">
    // js
    const send = () => {
        $emit('get-msg','张少宇')    
    }
    // ts
    // 1.定义事件类型Emits
    type Emits = {
        (e: 'get-msg',msg:string):void    
    }
    // 2.给泛型参数传参
    const emit = defineEmits<Emits>() 
    // 3.调用
    emit('get-msg','张少宇')
</script>
```
![图片](/doc/vue/vue_ts_4.jpg)

## 类型声明文件
>在Ts中以d.ts为后缀的文件就是类型声明文件，主要作用是为Js模块提供类型信息支持，从而获得类型提示。
1. d.ts是如何生效的？

    在使用Js的某些模块的时候，Ts会自动导入模块对应的d.ts文件，以提供类型提示。
2. d.ts是怎么来的？

    库如果本身是使用Ts编写的，在打包的时候经过配置自动生成对应的d.ts文件(axios本身就是Ts编写的)
> 第三方包类型问题
1. 使用 DefinitelyTyped 提供类型声明文件

    场景：有些库本身并不是采用Ts编写的，无法直接生成配套的d.ts文件，但是也想获得类型提示，此时需要 Definitely Typed 提供类型声明文件。
![图片](/doc/vue/vue_ts_5.jpg)
    DefinitelyTyped 是一个Ts类型定义的仓库，专门为Js编写的库可以提供类型声明，比如安装 @types/jquery 为jquery提供类型提示。
    > 注意：在npmjs.com中搜索  @types/包名 专门用于给包增加声明文件
## 内置类型声明
> Ts为Js运行时可用的所以标准化内置API都提供了声明文件，这些文件即不需要编译生成，也不需要第三方提供。一般不需管。
## 自定义类型-共享类型-给JS添加类型
1. 自定义声明类型文件

d.ts文件在项目中是可以进行自定义创建的，通常有两种作用，第一个时共享Ts类型(重要)，第二种是给Js文件提供类型(了解)。

2. 共享Ts类型

![图片](/doc/vue/vue_ts_6.jpg)
> 说明： 哪个业务组件需要用到类型导入即可，为了区分普通模块，可以加上type关键词。
3. 给Js提供类型

![图片](/doc/vue/vue_ts_7.jpg)
> 说明：通过 declare关键词 可以为js文件中的变量声明对应类型，这样js导出的模块在使用的时候也会获得类型提示。
:::tip
**  针对Js，了解即可  **
:::
## 列表渲染 - 定义axios的返回数据类型
> 定义axios的返回数据类型需要配合一个 axios的request 方法通过泛型指定。
```ts
axios.request<根据后端接口定义的数据类型>
```
> 具体操作
1. 定义data.d.ts文件
```ts
// data.d.ts
// 0.默认数据解构
{
    msg:'success',
    code:200,
    data: [
        {id:1,name:'张少宇'},
        ...    
    ]
}
// 1. 列表对象类型
export type Item = {
    id: number
    name: string
}
// 2. 获取服务器端返回数据类型
export type ListRes = {
    msg: string
    code: number
    data: {
        list: Item[]    
    }
}
```
2. 在List.vue中引用
```vue
// List.vue
import type { Item, ListRes } from './data.d.ts'
const list = ref<Item[]>([])
const getList = async() => {
    const res = await axios.request<ListRes>({
        url: 'xxx'
    })
    list.value = res.data.data.list
}
onMounted(() => {
    getList()
})
```
## 渲染数据的过程
1. 定义类型：根据接口来定义返回数据的类型、变量的数据的类型、提交的数据类型。
2. 定义变量：使用类型（变量的数据的类型）。
3. 定义方法：axios使用类型（返回数据的类型）。
4. 调用方法：
5. 渲染数据：自动有提示功能效果。
## VsCode ts插件
![图片](/doc/vue/vue_ts_8.jpg)
> 说明：自动把接口数据转化为Ts类型解构

> Ctrl +C 复制接口数据，然后直接在VsCode中，直接Ctrl + Alt + V粘贴即可。














