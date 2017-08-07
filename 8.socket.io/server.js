var express=require('express');
var Message=require('./model').Message;
var path=require('path');
var app=express();
app.get('/',function (req,res) {
    res.sendFile(path.resolve('index.html'));
});
app.use(express.static(__dirname));
//http和websocket都是一种协议



var server=require('http').createServer(app);//创建http服务
var io=require('socket.io')(server);//得到一个io的实例
//声明一个全局变量，key是用户名，value是一个用户名对应的socket
var clients={};
io.on('connection',function (socket) {
    var username;//私有变量，每个用户都有自己的昵称
    var currentRoom;
    // console.log('客户端连接到服务器');
    socket.send({username:'系统消息',content:'请输入您的昵称'});
    socket.on('message',function (message) {//监听客户端的消息

        // console.log("服务器说："+message);//给客户端发消息
        //广播给所有的客户端
        // io.emit('message','广播给所有客户端的消息');
        // io.emit('message',message);
        if(username){//有值
            var reg=/@([^ ]+) (.+)/;
            var result=message.match(reg);
            if(result){//符合正则的要求，就是私聊
                var toUser=result[1];//私聊的用户名
                var content=result[2];//私聊的内容
                clients[toUser].send({username,content});//向目标用户发消息
            }else{//否则就是匿名聊天
                Message.create({username,content:message},function (err,doc) {
                    if(currentRoom){
                        io.in(currentRoom).emit('message',doc);
                    }else{
                        io.emit('message',doc);
                    }
                });
                // io.emit('message',{username,content:message});
            }
        }else{//没有值
            username=message;//把客户端发过来的消息当做用户名
            clients[username]=socket;//在用户名和socket对象之间建立关联
            io.emit('message',{username:'系统消息',content:'欢迎加入'+username+'聊天室'});//现在服务器向客户端发送的是对象
        }
    });
    //响应客户端要求的返回历史数据的请求
    socket.on('getAllMessages',function () {
        Message.find({})
            .sort({createAt:-1})
            .limit(20)
            .exec(function (err,docs) {
                docs.reverse();//重新排序，是为了让时间从旧到新
                socket.emit('allMessages',docs);
            })
    });
    //监听客户端发过来的要求加入某个房间的消息
    socket.on('join',function (roomName) {
        if(currentRoom){//如果当前在某个房间内
            socket.leave(currentRoom);//则离开当前的房间
        }
        //把新的房间名赋值给当前房间
        currentRoom=roomName;
        socket.join(roomName);//让当前socket加入某个房间
    })
    socket.on('del',function (_id) {
        Message.remove({_id},function (docs) {
            socket.emit('del',docs);
        })
    })
});
server.listen(8080);
/*
* 1、匿名聊天
* 1>.给表单增加提交事件，当提交表单的时候取消默认事件，得到文本域的值，把它作为消息，发送给服务器
* 2>.服务器收到消息后，广播给所有的客户端
* 3>.客户端监听服务器的消息，接到消息后取得消息内容并添加一个li到ul里
*
* 2、私聊
* 1>.给用户名增加点击事件，点击用户名的时候在文本域中添加@用户名再输入你想私聊的内容
* 2>.把此内容发给服务器，服务器提取出你想私聊的用户和私聊的内容，然后把内容单独发给对应的用户
*
* 3、数据持久化
* 1>.把消息发送给服务器后，服务器要负责存储到数据库中
* 2>.每当页面打开加载完成之后都要获取历史数据，取最近的20条即可
* */