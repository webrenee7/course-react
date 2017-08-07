/*
 * 打包的时候，webpack会去读取入口文件，然后把入口文件以及入口文件依赖的其他文件全部打包到目标文件里去
 * */
//es5导入
/*var name=require('./component');
console.log(name);*/

//es6导入
//解构赋值
/*import {name,age,fn} from './component.js';
console.log(name);*/
//Message等于导入模块中的默认导出对象
/*import Message from './component';//不使用是灰色
import React from 'react';
import ReactDOM from 'react-dom';//只要使用react-dom的地方，必须先引入react
ReactDOM.render(
    <Message></Message>,
    document.querySelector("#app")
);*/

import Pager from './Pager.js';//不使用是灰色
import React from 'react';
import ReactDOM from 'react-dom';//只要使用react-dom的地方，必须先引入react
//bootstrap指的是node_modules下的目录

require('bootstrap/dist/css/bootstrap.css');
ReactDOM.render(
    <Pager
        totalPage={5}
        currentPage={2}
    />,
    document.querySelector('#app')
);

