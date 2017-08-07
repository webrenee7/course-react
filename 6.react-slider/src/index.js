import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './components/Slider';
require('./css/style.css');
var data={
    imgData:[
        {src:require('./imgs/1.jpg')},
        {src:require('./imgs/2.jpg')},
        {src:require('./imgs/3.jpg')},
        {src:require('./imgs/4.jpg')}
    ],
    arrow:true,
    dots:true,
    interval:2000
};
ReactDOM.render(
    <Slider {...data}/>,
    document.querySelector("#container")
);