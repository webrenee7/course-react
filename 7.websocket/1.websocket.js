//轮询
var express=require('express');
var app=express();
app.use(express.static(__dirname));
app.get('/clock',function (req,res) {
    res.send(new Date());
});
app.listen(8080);
