/*
* 复合组件
* */
var Panel=React.createClass({render(){
        //console.log(this.props);//Object {head: "头部", body: "主体", footer: "底部", style: "success"}
        return (
            <div className={"panel panel-"+this.props.style}>
                <PanelHead content={this.props.head}></PanelHead>{/*<PanelHead content='头部'></PanelHead>*/}
                <PanelBody content={this.props.body}></PanelBody>
                <PanelFooter>{this.props.footer}</PanelFooter>{/*<PanelHead>底部</PanelHead>*/}
            </div>
        )
    }
});
var PanelHead=React.createClass({render(){
        //console.log(this.props);//Object {content: "头部"}
        return (
            <div className="panel-heading">{this.props.content}</div>
        )
    }
});
var PanelBody=React.createClass({
    render(){
        //console.log(this.props);//Object {content: "主体"}
        return (
            <div className="panel-heading">{this.props.content}</div>
        )
    }
});
var PanelFooter=React.createClass({ render(){
        //console.log(this.props);//Object {children: "底部"}
        return (
            <div className="panel-heading">{this.props.children}</div>
        )
    }
});
ReactDOM.render(
    <Panel head="头部" body="主体" footer="底部" style="success"/>,
    document.querySelector("#app")
);