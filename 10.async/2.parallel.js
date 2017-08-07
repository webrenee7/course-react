var async=require('async');

//parallel 并行
console.time('cost');
async.parallel([
    function (callback) {
        setTimeout(()=> {
            console.log(3);
            callback(null,'3');
        },3000);
    },
    function (callback) {
        setTimeout(()=> {
            console.log(1);
            callback(null,'1');
        },1000);
    },
    function (callback) {
        setTimeout(()=> {
            console.log(2);
            callback(null,'2');
        },2000);
    }
],function (err,result) {
    console.log(result);//[ '3', '1', '2' ]把执行结果放到一个数组里面
    //result中值的顺序永远和任务的排列顺序一致，跟任务的执行顺序无关
    console.timeEnd('cost');//3s
});