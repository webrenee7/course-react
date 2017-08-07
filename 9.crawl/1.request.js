var request=require('request');//一个简单的HTTP请求工具,用来获取网页内容
var fs=require('fs');
var url='http://top.baidu.com/buzz?b=7&c=10&fr=topcategory_c10';
var iconv=require('iconv-lite');//把GBK编码转为UTF8编码
request({url,encoding:null},function (err,response,body) {//err-->错误对象  response-->响应对象  body-->响应体
    console.log(body);
    body=iconv.decode(body,'gbk');//gbk-->utf8
    fs.writeFile("./a.html",body);
    console.log(body);
});