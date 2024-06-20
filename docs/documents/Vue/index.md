# Vue 组件通讯
:::tip
Vue组件之间的通讯方式
:::
## 1.props/$emit 适用于父子组件通信

## 2.ref与$parent/$children 适用于父子组件通信 
> ref：如果在普通dom元素上使用，引用指向
> $parent / $children  访问父 / 子 实例

## 3.EventBus($emit/$on)适用于父子、隔代、兄弟组件通信
> 这种方法通过一个空的Vue实例作为中央事件总线(事件中心)，用它来触发事件和监听事件，从而实现任何组件间的通信，包括父子、隔代、兄弟组件

## 4.$attrs/$listeners适用于隔代组件通信
> $attrs：包含了父作用域中不被prop所识别（且获取）的特性绑定（class和style除外）。当一个组件没有声明任何prop时，这里会包含所有父作用域的绑定（class和style除外），并且可以通过v-bind=“$attes”传入内部组件。通常配合inheritAttrs选项一起使用。

> $listeners：包含了父作用域中的（不含 .native修饰器的）v-on事件监听器，它可以通过v-on=“$listeners”传入组件内部

## 5.provide/inject适用于隔代组件通信
> 祖先组件中通过provide来提供变量，然后再子孙组件中通过inject来注入变量。perovide/inject API主要解决了跨级组件间的通信问题，不过它的使用场景，主要是子组件获取上级组件的状态，跨级组件间建立了一种主动提供与依赖注入的关系。

## 6.Vuex适用于父子、隔代、兄弟组件通信
> Vuex是一个专为Vue.js应用程序开发的状态管理模式。每一个Vuex应用的核心就是store(仓库)。store基本上就是一个容器，它包含着你的应用中大部分的状态（state）。

> Vuex的状态存储是响应式的。当Vue组件从store中度权益状态的时候，若store中的状态发生变化，那么相应的组件也会相应的得到更新。

> 改变store中的状态的唯一途径就是显示地提交（commit）mutation。这样使得我们可以方便的跟踪每一个状态的变化。

## 7.消息订阅与发布
1. 安装pubsub：npm i pubsub-js
2. 引入：import pubsub from ‘pubsub.js'
3. 接收数据：A组件想接受数据，则在A组件订阅消息，订阅回调留在A组件自身    pubsub.subscribe('xxxx',res=>{})  
4. 提供数据：pubsub.publish('xxxx',data)
