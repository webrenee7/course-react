/*
* DOM操作
* */
var Focus=React.createClass({
    handleClick(){
        //console.log(this.refs);//{myTxt: input}
        //this.refs是一个对象，属性是引用名，也就是虚拟DOM元素ref属性的值，值是此参数名对应的DOM对象
        this.refs.myTxt.focus();
    },
    render(){
        return (
            <div>
                <input type="text" ref="myTxt" name="a"/>
                <button onClick={this.handleClick}>得到焦点</button>
            </div>
        )
    }
});
ReactDOM.render(
    <Focus/>,
    document.querySelector("#app")
);