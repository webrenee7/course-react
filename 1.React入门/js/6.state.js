/*
* 组件的状态
* */
var Clock=React.createClass({
    //组件内，需要变化的用状态，不需要变化的用属性
    getInitialState(){//获取初始状态的值
        return {time:new Date()};
    },
    handleClick(){
        //修改状态对象并重新渲染视图（调用render方法）
        this.setState({time:new Date()});
        // this.state.time=new Date();//这样不会自动调用render方法更新视图
    },
    render(){
        return (
            <p>
                {this.state.time.toLocaleString()}{/*time是个对象需要转换为字符串*/}
                <button onClick={this.handleClick}>更新</button>
                /*
                 * 常用的事件：
                 剪贴板事件 onKeyDown onKeyPress onKeyUp
                 键盘事件 onFocus onBlur
                 焦点事件 onChange onInput onSubmit
                 鼠标事件 onClick onDoubleClick onMouseDown onMouseEnter onMouseLeave
                 * */
            </p>
        )
    }
});
ReactDOM.render(
    <Clock/>,
    document.querySelector("#app")
);