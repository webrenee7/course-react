//这是留言列表在localStorage里的key
let MESSAGES='MESSAGES';
module.exports={
    //查询所有的留言
    list(){
        var messages=localStorage.getItem(MESSAGES);//获取本地存储的数据，是json字符串
        return messages?JSON.parse(messages):[];//如果获取到，转为json对象，否则赋值为[]
    },
    //增加一条新的留言
    add(message){
        var messages=this.list();//先获取老的留言列表数组
        message.id=messages.length>0?messages[messages.length-1].id+1:1;
        message.createAt=new Date();
        messages.push(message);
        localStorage.setItem(MESSAGES,JSON.stringify(messages));
        return messages;
    }
};