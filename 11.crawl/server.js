var express=require('express');
var path=require('path');
var Movie=require('./model').Movie;
var app=express();
app.set('view engine',"html");
app.set('views',path.resolve('.'));
app.engine("html",require('ejs').__express);
app.use(express.static('node_modules'));
app.get('/',function (req,res) {
    Movie.find({},function (err,movies) {
        res.render('index',{movies});
    })
});
app.listen(80);