var express=require('express');
var bodyParser=require('body-parser');
var Message=require('./model').Message;
var app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(function (req,res,next) {
    res.setHeader('Access-Control-Allow-Origin','*');//允许所有的来源访问此服务器
    res.setHeader('Access-Control-Allow-Methods','GET,POST,DELETE');//允许所有的来源访问此服务器
    next();
});
//声明路由的方式：
app.route('/messages')
    .get(function (req,res) {
        Message.find().then(function (message) {
            res.send(message);
        },function (err) {
            res.send([]);
        })
    })
    .post(function (req,res) {
        var message=req.body;
        Message.create(message)
        .then(function (message) {
            return Message.find()
        })
        .then(function (messages) {
            res.send(messages);
        })
    })
    .delete(function (req,res) {
        var _id=req.body._id;
        Message.remove({_id}).then(function (result) {
            return Message.find();
        })
        .then(function (messages) {
            res.send(messages);
        })
    });
app.listen(9090);