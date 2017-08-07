/*
* 组件的周期
* */
var Counter=React.createClass({
    getDefaultProps(){//获取默认属性
        console.log('getDefaultProps');
    },
    getInitialState(){//获取初始状态
        console.log('getInitialState');
        return {count:1}
    },
    handleClick(){//处理点击事件
        console.log('handleClick')
    },
    //组件将将要被挂载
    componentWillMount(){
        console.log('componentWillMount')
    },
    render(){
        return (
            <div>
                {this.state.count}
                <button onClick={this.handleClick} id="clock">加</button>
            </div>
        )
    },
    //组件已经挂载到页面当中
    componentDidMount(){
        console.log(document.querySelector("#clock"));
        console.log('componentDidMount')
    }
});
ReactDOM.render(
    <Counter/>,
    document.querySelector("#app")
);