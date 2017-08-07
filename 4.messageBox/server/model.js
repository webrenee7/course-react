var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/messagebox');//连接数据库
mongoose.Promise=Promise;//使用Es6自带的Promise
//定义骨架模型Schema
var MessageSchema=new mongoose.Schema({
    author:String,
    content:String,
    createAt:{type:Date,default:Date.now}
});
//定义模型
var Message=mongoose.model('Message',MessageSchema);
exports.Message=Message;