import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App.js';
import {Router,Route,hashHistory} from 'react-router';//Router是路由容器,Route是路由,hashHistory用哈希值管理历史
import {App,Home,Profile,User} from './components';
require('bootstrap/dist/css/bootstrap.css');
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="home" component={Home}></Route>
            <Route path="user" component={User}>
                <Route path="list" component={User.UserList}></Route>
                <Route path="add" component={User.UserAdd}></Route>
                <Route path="detail/:id" component={User.UserDetail}></Route>
            </Route>
            <Route path="profile" component={Profile}></Route>
        </Route>
    </Router>,
    document.querySelector("#container")
);


