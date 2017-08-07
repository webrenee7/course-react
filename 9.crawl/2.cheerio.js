//2、在服务器端实现了jQuery中的DOM操作API
var cheerio=require('cheerio');
var html=require('./html');
var $=cheerio.load(html);//使用cheerio读取html，并转成一个jquery对象
$('.keyword .list-title').each(function (index,item) {
    var $this=$(item);
    var novel={
        name:$this.text(),
        url:$this.prop('href')
    };
    console.log(novel);
});