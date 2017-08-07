/*
 * 留言板：三个组件
 * */
//定义MessageBox组件
var MessageBox=React.createClass({
    getInitialState(){//设置/获取初始状态的值
        return {message:this.props.message};
    },
    addMessage(msg){//添加留言
        this.state.message.push(msg);
        this.setState({message:this.state.message});
    },
    render(){//渲染页面
        return (
            <div className="container">
                <div className="row">
                    <div className={"panel panel-"+this.props.panelStyle}>
                        <PanelHead title={this.props.title}></PanelHead>
                        <PanelBody message={this.state.message}></PanelBody>
                        <PanelFooter addMessage={this.addMessage} msg={this.props.msg}></PanelFooter>
                    </div>
                </div>
            </div>
        )
    }
});
//定义PanelHead组件
var PanelHead=React.createClass({
    render(){
        return (
            <div className="panel-heading">
                <h1>{this.props.title}</h1>
            </div>
        )
    }
});
var PanelBody=React.createClass({
    render(){
        return (
            <div className="panel-footer">
                <ul className="list-group">
                    {
                        this.props.message.map(function (item,index) {
                            return <li className="list-group-item" key={index}>{item}</li>;
                        })
                    }
                </ul>
            </div>
        )
    }
});
//定义PanelFooter组件
var PanelFooter=React.createClass({
    handleKeyUp(event){
        event.preventDefault();
        var msg=this.refs.msgTxt.value;
        if(msg==""){
            alert('内容不能为空！');
            return;
        }
        this.props.addMessage(msg);
        this.refs.msgTxt.value="";
    },
    render(){
        var style={margin:"20px"};
        return (
            <form className="form" onSubmit={this.handleKeyUp}>
                <div className="form-group" style={style}>
                    <input type="text" className="form-control" ref="msgTxt" placeholder={this.props.msg}/>
                </div>
            </form>
        )
    }
});
var data={panelStyle:"success",title:'留言板',msg:'请输入留言内容,按回车进行发送',message:[]};
ReactDOM.render(
    <MessageBox {...data}/>,
    document.querySelector("#app")
);