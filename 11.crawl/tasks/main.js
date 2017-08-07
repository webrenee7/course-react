//1.写read模块，传入url地址，返回读取后的对象数组
//2.把对象数组存储在数据库中
//3.建立web服务器显示保存的数据库
//4.开启一个计划任务，每半小时更新一次数据库
//5.把此项目发布到github，并且部署到阿里云上
var read=require('./read').movie;
var write=require('./write').movie;
var async=require('async');
var debug=require('debug')('crawl:main');
var Movie=require('../model').Movie;
var url="http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1";
async.waterfall([
    function (callback) {
        Movie.remove({},callback);//在保存前全部清空数据
    },
    function (data,callback) {
        read(url,callback);
    },
    function (movies,callback) {
        write(movies,callback);
    }
],function (err,result) {
    console.log('全部任务执行完毕');
});