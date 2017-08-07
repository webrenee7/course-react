//debug原理：
module.exports=function (name) {
    return function (msg) {
        if(process.env.DEBUG==name){//如果环境变量跟我要输出的值一样，就输出
            console.log(msg);
        }
    }
};