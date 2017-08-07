/*
* 如何声明组件
* 组件的本质是一个类，类里面有一个render的方法，render的方法返回一个虚拟DOM
* 组件是有要求的
* 1、类名首字母大写
* 2、里边需要一个render方法，此render方法要返回一个react虚拟DOM元素
* */
//声明组件
var Message=React.createClass({
    render(){//相当于render:render(){...}  es6语法
        return  <h1>hello</h1>
    }
});
/*组件原理：
function Message() {}
Message.prototype={
    render(){
        return  <h1>hello</h1>
    }
};*/
/*
* 首先判断首字母大小写
* 如果是大写==>会把它当成一个react组件，通过此类创建一个实例，调用实例上的render方法，得到虚拟DOM元素，再转为真实DOM元素，插入到容器内部
* 如果是小写==>直接当做虚拟DOM插入，对于不存在的DOM也不会报错
* */
ReactDOM.render(
    <Message/>,//如果写<message/>,//不会报错
    document.getElementById('app')
);