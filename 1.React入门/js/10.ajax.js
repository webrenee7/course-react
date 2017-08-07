/*
* 1、定义初始状态对象{words:[]}
* 2、给input框改变事件，当值改变的时候，先取出文本框的内容，然后调用百度JSON联想词接口，得到返回值，修改状态对象
* 3、用状态对象中的words渲染页面
* https://www.baidu.com/su?wd=b&cb=cc
* */
var Suggest=React.createClass({
    getInitialState(){
        return {words:[]}
    },
    handleChange(event){
        /*修改this的方法：
        * 1.箭头函数
        * 2.var that=this
        * 3.context:this
        * */
        //获取输入框的值
        var wd=event.target.value;
        console.log({wd})//Object {wd: "d"}
        $.ajax({
            url:'https://www.baidu.com/su?',
            type:"get",
            dataType:'jsonp',//返回数据转换为jsonp
            data:{wd},//{wd: wd}对象的扩张 es6的写法
            jsonp:'cb', //callback=fn  ===>   cb=fn
            context:this,//指定回调函数中的this指针
            success:function (result) {
                console.log(result);
                this.setState({words:result.s});
            }
        });
    },
    render(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <input type="text" className="form-group" onChange={this.handleChange}/>
                </div>
                <div className="panel-footer">
                    <ul className="list-group">
                        {
                            this.state.words.map(function (item,index) {
                                return <li key={index} className="list-group-item">{item}</li>;
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
});
ReactDOM.render(
    <Suggest/>,
    document.querySelector("#app")
);