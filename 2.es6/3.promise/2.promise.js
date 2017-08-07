//resolve:解决成功
//reject:解决失败
var fs=require('fs');
var promise=new Promise(function (resolve,reject) {
    //可以在函数内写一个异步的任务
    fs.readFile('1.txt','utf8',function (err,result) {
        if(err){//如果错误对象有值，则认为是失败了，那么调用reject把此promise标记为失败
            reject(err);
        }else{//否则调用resolve表示此任务成功
            resolve(result);
        }
    })
});
//promise只有一个方法，就是then，指定两个参数，分别是成功和失败的回调
/*promise.then(function (data) {
    console.log(data);
},function (err) {
    console.log(result);
});*/

readFile('1.txt').then(function (data) {
    return readFile(data);
}).then(function (data) {
    return readFile(data);
});



//封装
function readFile(filename) {
    //当创建promise实例的时候，里面的函数会立刻执行
    return new Promise(function (resolve,reject) {
        //可以在函数内写一个异步的任务
        fs.readFile(filename,'utf8',function (err,result) {
            if(err){//如果错误对象有值，则认为是失败了，那么调用reject把此promise标记为失败
                reject(err);
            }else{//否则调用resolve表示此任务成功态，并执行成功的回调
                resolve(result);
            }
        })
    });
}