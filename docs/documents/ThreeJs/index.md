# ThreeJs初始化
```js
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
var scene, camera, renderer,
const init = () => {
    // 场景
    scene = new THREE.Scene()
    // 照相机
    camera = new THREE.PerspectiveCamera(
        40,
        window.innerWidth/window.innerHeight,
        0.1,
        100
    )
    camera.position.set(0,0,15)
    // 渲染器
    renderer = new THREE.WebGLRenderer({antialias: true, alpha: true})
    renderer.setSize(window.innerWidth,window.innerHeight)
    document.body.appendChild(renderer.domElement)
    // 控制器
    const controls = new OrbitControls(camera, renderer.domElement)
    // 辅助对象
    scene.add(new THREE.AxesHelper(5))
    // 渲染
    render()
}
const render = () => {
    requestAnimationFrame(render)
    renderer.render(scene, camera)
}
init()
```
![图片](/doc/three/init.gif)