var request=require('request');//一个简单的HTTP请求工具,用来获取网页内容
var fs=require('fs');
var iconv=require('iconv-lite');//把GBK编码转为UTF8编码
var cheerio=require('cheerio');//使用cheerio读取html，并转成一个jquery对象
var debug=require('debug')('crawl:read');
// var debug=require('debug')('crawl:*');

exports.movie=function (url,callback) {
    request({url,encoding:null},function (err,response,body) {
        body=iconv.decode(body,'gbk');//gbk-->utf8
        var $=cheerio.load(body);//读取html，是个jq对象
        var movies=[];
        $('.keyword .list-title').each(function () {
            var $me=$(this);
            var movie={
                name:$me.text(),
                url:$me.attr('href')
            };
            debug(`读到电影：'${movie.name}`);
            movies.push(movie);
        });
        callback(err,movies);
    });
};
