低版本浏览器==》轮询
高版本浏览器==》websocket

# socket.io
什么是socket.io？
> Socket.IO是一个WebSocket库，包括了客户端的js和服务器端的nodejs，它的目标是构建可以在不同浏览器和移动设备上使用的实时应用。

## 安装socket.io
```js
npm i socket.io -S
```

## 创建服务
```js
var express=require('express');
var path=require('path');
var app=express();
app.get('/',function (req,res) {
    res.sendFile(path.resolve('index.html'));
});
app.listen(8080);
```