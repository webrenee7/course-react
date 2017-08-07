var fs=require('fs');
/*
* 同步方法：
* 优点：
* 1、可读性好，易于理解
* 缺点：
* 1、阻塞式IO，前面不读完后面无法执行
* node单线程
* */
var c1=fs.readFileSync('1.txt','utf8');
var c2=fs.readFileSync(c1,'utf8');
var c3=fs.readFileSync(c2,'utf8');
console.log(c3);
/*
* 异步方法
* 优点：
* 不阻塞主线程，效率高
* 缺点：
* 多层嵌套非常难看
* */
/*
var c3=fs.readFile('1.txt','utf8',function (err,c1) {
    
});*/
