import React from 'react';
import MessageList from './MessageList.js';
import MessageForm from './MessageForm.js';
export default class MessageBox extends React.Component{
    //props从何而来？是使用它的父组件给他传进来的属性封装的一个对象
    constructor(props){
        super(props);
        this.state={
            messages:[]
        }
    }
    componentDidMount(){
        // this.setState({messages:this.props.model.list()})
        this.props.model.list((messages)=> {
            this.setState({messages})
        })
    }
    removeMessage(_id){
        this.props.model.remove(_id,(messages)=> {
            this.setState({messages})
        })
    }
    addMessage(message){
        //不管新增留言，还是删除留言，都要返回最新的留言列表
        /*var messages=this.props.model.add(message);
        this.setState({messages});*/
        this.props.model.add(message,(messages)=>{
            this.setState({messages});
        });

        /*let messages=this.state.messages;
        //添加id
        message.id=messages.length>0?messages[messages.length-1].id+1:1;
        //添加时间
        message.createAt=new Date();
        //添加到数组里去
        messages.push(message);
        //更新状态
        this.setState({messages});*/
    }
    render(){
        return (
            <div className="panel panel-default">
               <div className="panel-heading">
                   <h3 className="text-center">珠峰留言板</h3>
               </div>
               <div className="panel-body">
                   <MessageList messages={this.state.messages} removeMessage={this.removeMessage.bind(this)}></MessageList>
               </div>
               <div className="panel-footer">
                   <MessageForm addMessage={this.addMessage.bind(this)}></MessageForm>
               </div>
            </div>
        )
    }
}