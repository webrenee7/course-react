/*
* 留言板：一个组件
* */
var MessageBox=React.createClass({
    getInitialState(){
        return {message:[]};
    },
    handleSumbit(event){
        var msg=this.refs.msgTxt.value;
        this.state.message.push(msg);
        this.setState({message:this.state.message});
        event.preventDefault();//阻止表单的默认提交事件
    },
    render(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h1>留言板</h1>
                </div>
                <div className="panel-body">
                    <ul className="list-group">
                        {
                            this.state.message.map(function (item, index) {
                                return <li className="list-group-item" key={index}>{item}</li>;
                            })
                        }
                    </ul>
                </div>
                <div className="panel-footer">
                    <form className="form-inline">
                        <div className="form-group">
                            <input type="text" className="form-control" ref="msgTxt"/>
                        </div>
                        <button className="btn btn-info" onClick={this.handleSumbit}>提交</button>
                    </form>
                </div>
            </div>
        )
    }
});
ReactDOM.render(
    <MessageBox/>,
    document.querySelector("#app")
);