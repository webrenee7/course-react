import React from 'react';
export default class MessageForm extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        var authorInput=this.refs.author;
        var contentInput=this.refs.content;
        var message={
            author:authorInput.value,
            content:contentInput.value
        };
        this.props.addMessage(message);
        contentInput.value='';
    }
    render(){
        return (
            <form className="form-horizontal" role="form" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label className="control-label col-md-1" htmlFor="author">姓名：</label>
                    <div className="col-md-11"><input type="text" className="form-control" ref="author"/></div>
                </div>
                <div className="form-group">
                    <label className="control-label col-md-1" htmlFor="content">内容：</label>
                    <div className="col-md-11"><input type="text" className="form-control" ref="content"/></div>
                </div>
                <div className="form-group">
                    <div className="col-md-offset-1 col-md-11"><button className="btn btn-info" type="submit">提交</button></div>
                </div>
            </form>
        )
    }
}