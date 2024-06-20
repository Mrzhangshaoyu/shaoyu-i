# VR看房

:::tip
<p style="text-indent:2em;">
我们的原理就是把这个3d视图的房子搭建好，把我们的眼睛放到这个房子里面去。我们眼睛观察的位置不一样，看到的场景就不一样。<br />
长方体(假如你拍了房子的前后左右上下六张照片，六张照片组合起来的长方体就是房子的3d视图)；<br />
球体(假如你拍了一张360°的全景图，那把全景图首尾连起来，也是房子的3d视图(地球仪))
</p>
:::
> 以长方体为例

1. 创建观察的长方体

```javascript
window.onload = init//初始化执行
function init() {
    scene = new THREE.Scene()
    const geometry = new THREE.BoxGeometry(100,100,100)
    const material = new THREE.MeshBasicMaterial({color:0xffff00})
    mesh = new THREE.Mesh(geometry,material)
    scene.add(mesh)

    camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,0.1,1000)
    camera.position.set(200,200,200)
    camera.lookAt(0,0,0)
    renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth,window.innerHeight)
    document.getElementById("webgl").appendChild(renderer.domElement)
    renderer.render(scene,camera)
}
```

2. 创建移动视角

```javascript
function init() {
    ...

    var controls = new THREE.OrbitControls( camera, renderer.domElement );
    controls.addEventListener('change',function() {
        renderer.render(scene,camera)
    })

}
```

![图片](/doc/three/vr_room1.gif)

3. 给长方体贴图（图片反转先注释，看效果，反转后不设置相机，会不显示）

```javascript
function Room_pic() {
    var roomPic = []
    var roomPic_left = new THREE.TextureLoader().load('./imgs/scene_left.jpeg')
    roomPic.push(new THREE.MeshBasicMaterial({map:roomPic_left}))
    var roomPic_right = new THREE.TextureLoader().load('./imgs/scene_right.jpeg')
    roomPic.push(new THREE.MeshBasicMaterial({map:roomPic_right}))
    var roomPic_top = new THREE.TextureLoader().load('./imgs/scene_top.jpeg')
    roomPic.push(new THREE.MeshBasicMaterial({map:roomPic_top}))
    var roomPic_bottom = new THREE.TextureLoader().load('./imgs/scene_bottom.jpeg')
    roomPic.push(new THREE.MeshBasicMaterial({map:roomPic_bottom}))
    var roomPic_front = new THREE.TextureLoader().load('./imgs/scene_front.jpeg')
    roomPic.push(new THREE.MeshBasicMaterial({map:roomPic_front}))
    var roomPic_back = new THREE.TextureLoader().load('./imgs/scene_back.jpeg')
    roomPic.push(new THREE.MeshBasicMaterial({map:roomPic_back}))
    mesh = new THREE.Mesh(new THREE.BoxGeometry(100,100,100),roomPic)
    mesh.geometry.scale(1,1,-1)//图片反转
    scene.add(mesh)
}
```

4. 视角内置

```javascript
function init() {
    ...
    camera.position.set(0,0,0.01)
    ...
}
```

> 生成的gif太大，有卡顿，实际效果不会有这个问题

![图片](/doc/three/vr_room2.gif)

> 球体效果一样

```javascript
function Room_pic() {
    var texture = new THREE.TextureLoader().load('./imgs/scene.jpeg')
    var meshBasicMaterial = new THREE.MeshBasicMaterial({map:texture})
    var sphereGeometry =new THREE.SphereGeometry( 1,50,50 );
    mesh = new THREE.Mesh(sphereGeometry,meshBasicMaterial)
    mesh.geometry.scale(1,1,-1)
    scene.add(mesh)
}
```

