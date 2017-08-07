# 爬虫
> 网络爬虫是一种自动获取网页内容的程序,功能如下

- 发出HTTP请求获取指定URL中的内容
- 使用jQuery的语法操作网页元素，提取需要的元素
- 将数据保存到mongodb数据库中
- 建立web服务器显示这些数据
- 使用计划任务自动执行更新任务
- 布署项目到阿里云中并配置反向代理

## 安装需要的模块
```bash
npm install request cheerio mongoose express ejs iconv-lite cron async debug --save
```

- request  一个简单的HTTP请求工具,用来获取网页内容
- cheerio  使用cheerio读取html，并转成一个jquery对象
- iconv-lite  把GBK编码转为UTF8编码
- cron  用来周期性的执行某种任务或等待处理某些事件的一个守护进程
- async  async是一个流程控制库,为我们带来了丰富的嵌套解决方案
- debug  根据环境变量的有选择向控制台输出调试信息

## request
```js
var request=require('request');//一个简单的HTTP请求工具,用来获取网页内容
var fs=require('fs');
var url='http://top.baidu.com/buzz?b=7&c=10&fr=topcategory_c10';
var iconv=require('iconv-lite');//把GBK编码转为UTF8编码
request({url,encoding:null},function (err,response,body) {//err-->错误对象  response-->响应对象  body-->响应体
    body=iconv.decode(body,'gbk');//gbk-->utf8
    fs.writeFile("./a.html",body);
    //console.log(body);
});
```

## cheerio

---------------服务器----------------
服务器：120.55.90.242
连接服务器的密码：201613Node
## 连接服务器
ftp://172.18.1.139/software/
- Xshell
- ssh
gitbash下执行
```bash
ssh root@[ip地址]
```

上传文件:Xftp

## 升级操作系统
```bash
apt-get update
```

## 安装npm
```bash
apt-get install npm
```

## 安装n
n是node模块
```bash
npm install n -g
n 7.5.0
```

## 安装git
```bash
apt-get install git
```

## 安装mongodb
apt-get安装的是操作系统软件
npm 安装的是包
```
apt-get install mongodb
```

## 设置环境变量
```
export DEBUG=crawl:*
```

## 克隆项目并安装依赖
```
git clone ""
npm init -y
npm install
```

## 启动服务
```
cd tasks
node main.js
cd ../
node server.js
```

## 永久启动服务
```
npm install pm2 -g
pm2 start server.js --name 'xuya-crawl'
```

-------------本地---------------

## 把当前项目变成一个git仓库
touch .gitignore
```
git init
git add -a
git commit -m "初始化提交"
git remote add origin ""
git push -u origin master
```

