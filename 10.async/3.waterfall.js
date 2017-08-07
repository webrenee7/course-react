var async=require('async');

//waterfall 瀑布:上一个函数的输出会变成下一个函数的输入参数，最后一个函数的输出，会变成整个任务队列的结果
console.time('cost');
async.waterfall([
    function (callback) {
        setTimeout(()=> {
            console.log("买菜");
            callback(null,'土豆');
        },1000);
    },
    function (data,callback) {
        setTimeout(()=> {
            console.log("炒"+data);
            callback(null,'炒'+data);
        },1000);
    }
],function (err,result) {//result==>最后一个任务的返回值
    console.log(result);
    console.timeEnd('cost');
});
