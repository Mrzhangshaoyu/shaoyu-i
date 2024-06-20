# Node搭建webSocket
:::tip
简单使用nodejs ws模块搭建socket
:::
> 1. 新建文件夹server，执行npm init初始化，文件夹新增package.json
```json
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```
> 2. 执行 npm install ws
```js
npm install ws
```
> 3. 在server文件夹下新建index.js
```js
/1.导入ws
const Ws = require("ws")
// 2.建立立即执行函数
;((Ws) => {
    //实例化server ,
    const server = new Ws.Server({port : 8000})
    // 初始化
    const init = () => {
        bindEvent()
    }
    // 绑定ws函数
    function bindEvent() {
        server.on("open",handleOpen)
        server.on("close",handleClose)
        server.on("error",handleError)
        server.on("connection",handleConnection)
    }
    function handleOpen () {
        console.log("后端：open")
    }
    function handleClose () {
        console.log("后端：close")
    }
    function handleError () {
        console.log("后端：error")
    }
    function handleConnection (ws) {
        console.log("后端：connectionn")
        ws.on("message",handleMessage)
    }
    function handleMessage (msg) {
        // 不转一下，前端会显示乱码
        console.log(JSON.parse(msg))
        let t = JSON.parse(msg)
        server.clients.forEach(c => {
            c.send(JSON.stringify(t))
        })
    }
    init()
})(Ws);
```
> 4. 在package.json中添加 "dev": "node index.js"
```json
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "node index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "ws": "^8.8.1"
  }
}
```
> 5. 终端运行 npm run dev
```js
    npm run dev
```
> 6. 测试： 新建张三html,复制李四html,同时打开两个html,张三发送的信息李四即可接收，反之同理
```html
    // 张三
    <script>
        const ws = new WebSocket("ws://localhost:8000")
        var app = new Vue({
            el: '#app',
            data: {
                msg: '',
                msgList:[]
            },
            watch:{
                'msgList':{
                    handler() {
                        setTimeout(() => {
                            this.$refs.message.scrollTop = this.$refs.message.scrollHeight
                        },0)
                    },
                    deep:true,
                }
            },
            methods:{
                up() {
                    const file = this.$refs.file.files[0]
                    var reader = new FileReader()
                    reader.readAsDataURL(file)
                    reader.onload = () => {
                        ws.send(JSON.stringify({
                            name:'张三',
                            imgSrc:reader.result,
                            dateTime:new Date().getTime()
                        }))
                    }
                },
                sendMsg() {
                    if(!this.msg.trim().length) return
                    // socket 发送
                    ws.send(JSON.stringify({
                        name:'张三',
                        msg:this.msg,
                        dateTime:new Date().getTime()
                    }))
                },
                handleWsOpen(e) {
                    console.log("前端：open", e)
                },
                handleWsClose(e) {
                    console.log("前端：close", e)
                },
                handleWsError(e) {
                    console.log("前端：error", e)
                },
                handleWsMessage(e) {
                    this.msgList.push(JSON.parse(e.data))
                    this.msg = ''
                    console.log("前端：message", JSON.parse(e.data))
                },
            },
            mounted() {
                ws.addEventListener("open",this.handleWsOpen.bind(this),false)
                ws.addEventListener("close",this.handleWsClose.bind(this),false)
                ws.addEventListener("error",this.handleWsError.bind(this),false)
                ws.addEventListener("message",this.handleWsMessage.bind(this),false)
                document.addEventListener("keyup", e => {
                    if(e.code == 'Enter'||e.code == 'NumpadEnter') {
                        this.sendMsg()
                    }
                })
            }
        })
    </script>

```