var mongoose=require('mongoose');
mongoose.Promise=Promise;
mongoose.connect("mongodb://localhost/zhufengchat");
var MessageSchema=new mongoose.Schema({
    username:String,
    content:String,
    createAt:{type:Date,default:Date.now}
});
var Message=mongoose.model('Message',MessageSchema);
exports.Message=Message;