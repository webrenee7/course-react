import $ from 'jquery';
let HOST='http://localhost:9090';
//接收ajax返回值：then

//跨域资源共享:在服务器端加请求头
module.exports={
    //查询所有的留言
    list(callback){
        $.get(`${HOST}/messages`)
            .then(function (data) {
                callback(data);
            })
    },
    //增加一条新的留言
    add(message,callback){
        $.post(`${HOST}/messages`,message)
            .then(function (data) {
                callback(data);
            })
    },
    //删除留言
    remove(_id,callback){
        $.ajax({
            url:`${HOST}/messages`,
            // type:'DELETE'
            method:'DELETE',
            data:{_id}
        }).then(function (messages) {
            callback(messages);
        })
    }
};