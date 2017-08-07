import React from 'react';
import {hashHistory} from 'react-router';
export default class UserAdd extends React.Component{
    handleSubmit(){
        var username=this.refs.username.value;
        var user={username};
        var userStr=localStorage.getItem("users");
        var users=userStr?JSON.parse(userStr):[];
        user.id=users.length>0?users[users.length-1].id+1:1;
        users.push(user);
        localStorage.setItem("users",JSON.stringify(users));
        hashHistory.push('/user/list')
    }
    render(){
        return (
            <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label className="control-label col-md-1" htmlFor="username">用户名</label>
                    <div className="col-md-11">
                        <input type="text" className="form-control" ref="username"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-md-offset-1 col-md-11">
                        <button className="btn btn-primary" type="submit">提交</button>
                    </div>
                </div>
            </form>
        )
    }
}
