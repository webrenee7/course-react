## 轮询
> 浏览器周期性的发出请求，如果服务器没有新数据需要发送就返回以空响应,这种方法问题很大,很快就被淘汰

- 大量无意义的请求造成网络压力
- 请求周期的限制不能及时地获得最新数据

## 长轮询
> 长轮询是在打开一条连接以后保持连接,等待服务器推送来数据再关闭连接 然后浏览器再发出新的请求，这能更好地管理请求数量，也能及时得到更新后的数据

## websocket
> WebSocket是HTML5开始提供的一种浏览器与服务器间进行`全双工`通讯的网络技术
  使用WebSocket，浏览器和服务器只需要要做一个握手的动作，然后，浏览器和服务器之间就形成了一条快速通道，两者之间就直接可以数据互相传送

- 节省资源：互相沟通的Header是很小的-大概只有 2 Bytes。
- 推送信息：不需要客户端请求,服务器可以主动传送数据给客户端

http：半双工

### 单工工
> 服务器可以向客户端发送信息

### 半双工
> 服务器可以向客户端发送信息，客户端也可以向服务器发送请求，但是不能同时进行

### 全双工
> 服务器可以向客户端发送信息，客户端也可以向服务器发送请求，可以同时进行
## 安装websocket
```bash
npm i ws --S
```

websocket没有跨域问题

## websocket服务器端
```js
var Server=require('ws').Server;//创建一个服务
var server=new Server({port:8080});//监听8080端口
//监听客户端请求，当有请求到来的时候，执行对应的函数，并且为每个客户端创建一个socket对象
server.on('connection',function (socket) {//socket-->插座
    //监听客户端的消息
    socket.on('message',function (message) {
        console.log(message);
        socket.send('server hello');
    })
});
```

## node客户端
```js
var Socket=require('ws');//得到Socket类
var socket=new Socket('ws://localhost:8080');//得到socket实例
//监听客户端连接服务器成功事件
socket.on('open',function () {
    socket.send('hello');
});
//客户端监听服务器端的请求
socket.on('message',function (message) {
   console.log(message);
});
```

## 网页客户端
```js
var socket=new WebSocket("ws://localhost:8080/");
//监听连接打开事件
socket.onopen=function () {
    console.log('open');
    socket.send('hello');
}
//监听服务器发过来的消息
socket.onmessage=function (event) {
    console.log(event.data);
}
```



