//WebSocket服务器

//ws:可以创建websocket服务
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

