//async是一个异步控制框架，可以帮助我们编写异步流程代码,控制任务的执行顺序
var async=require('async');
/*
* series  串行
* parallel  并行
* waterfall  瀑布
* */

//series  串行
console.time('cost');
async.series([
    //数组中的都是异步任务
    function (callback) {
        setTimeout(function () {
            console.log(1);
            //参数1：错误对象
            //参数2：本函数的执行结果
            //调用callback表示本任务执行完毕，可以继续执行
            callback(null,'1');
        },1000);
    },
    function (callback) {
        setTimeout(function () {
            console.log(2);
            callback(null,'2');
        },2000);
    },
    function (callback) {
        setTimeout(function () {
            console.log(3);
            callback(null,'3');
        },3000);
    }

],function (err,result) {
    console.log(result);//[ '1', '2', '3' ]把执行结果放到一个数组里面
    console.timeEnd('cost');//6s
});