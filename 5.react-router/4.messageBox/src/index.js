import React from 'react';
import ReactDOM from 'react-dom';
import MessageBox from './MessageBox.js';
require('bootstrap/dist/css/bootstrap.css');
// var local=require('./local');
var local=require('./api');
ReactDOM.render(
    <MessageBox model={local}/>,//组件尽量不修改，数据从外界传递
    document.querySelector("#app")
);