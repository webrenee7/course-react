//根据环境变量的有选择向控制台输出调试信息
// var debug=require('debug');//debug：工厂函数
var debug=require('./debug');//引入自己写的debug
var loggerA=debug('logger:a');//loggerA是一个函数，可以调用
loggerA('loggerA');//调用它可以去向控制台打印日志
var loggerB=debug('logger:b');
loggerB('loggerB');
/*
* 输出日志是选择性的
* 如果日志记录器的名字跟环境变量中的DEBUG这个属性值相匹配，则真正输出
* 设置：命令窗口临时设置 set DEBUG=logger:a  webstorm设置  系统环境变量设置
* 取值：echo %DEBUG%
* 输出：process.log(process.env.DEBUG);
* */
//debug：它的输出，可以根据改变环境变量来控制，而console.log()不能控制
// console.log(process.env.DEBUG);//输出


