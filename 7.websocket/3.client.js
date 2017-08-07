//Node客户端
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