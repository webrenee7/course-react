import React from 'react';
export default class MessageList extends React.Component{
    render(){
        return (
            <ul className="list-group">
                {
                    this.props.messages.map( (item,index) =>{
                        return <li key={index} className="list-group-item">{item.author}:{item.content}
                        <button className="btn btn-danger pull-right" onClick={()=>{this.props.removeMessage(item._id)}}>删除</button>
                        <span className="pull-right">{item.createAt.toLocaleString()}</span></li>
                    })
                }
            </ul>
        )
    }
}