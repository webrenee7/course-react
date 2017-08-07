import React from 'react';
import {Link} from 'react-router';
export default class App extends React.Component{
    render(){
        let active={background:"blue",color:"white"};
        return (
            <div>
                <div className="container">
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a href="" className="navbar-brand">用户管理系统</a>
                            </div>
                            <div>
                                <ul className="nav navbar-nav">
                                    <li><Link to="/home" activeStyle={active}>首页</Link></li>
                                    <li><Link to="/user" activeStyle={active}>用户管理</Link></li>
                                    <li><Link to="/profile" activeStyle={active}>个人设置</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {this.props.children}
                </div>
            </div>
        )
    }
}