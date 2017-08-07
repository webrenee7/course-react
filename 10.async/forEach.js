var files=[
    {filename:'1.txt',content:'1.txt'},
    {filename:'2.txt',content:'2.txt'},
    {filename:'3.txt',content:'3.txt'}
];
var fs=require('fs');
//需求：循环files，保存到文件里，并且当所有的文件全部保存完毕之后，执行一个回调
/*for循环，计数器
var count=0;
for(var i=0;i<files.length;i++){
    fs.writeFile(files[i].filename,files[i].content,function (err,result) {
        count++;
        if(count==files.length){
            console.log('全部保存完毕');
        }
    });
}*/

var async=require('async');
/*
* forEach
* 参数1：要迭代的数组
* 参数2：用来操作每个元素的函数
* 参数3：最终全部元素迭代完成之后的回调函数
* */
async.forEach(files,function (item,callback) {
    fs.writeFile(item.filename,item.content,callback)
},function (err,result) {
    console.log(result);//undefined
});