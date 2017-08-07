import React from 'react';
import {Link} from 'react-router';
export default class User extends React.Component{
    render(){
        return (
            <div className="row">
                <div className="col-md-2">
                    <ul className="nav nav-pills">
                        <li><Link to='/user/list'>用户列表</Link></li>
                        <li><Link to='/user/add'>新增用户</Link></li>
                    </ul>
                </div>
                <div className="col-md-10">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
