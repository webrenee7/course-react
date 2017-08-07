import React from 'react';
import {Link} from 'react-router';
export default class UserList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            users:[]
        }
    }
    //组件加载完成后会执行此函数
    componentDidMound(){
        var userStr=localStorage.getItem("users");
        var users=userStr?JSON.parse(userStr):[];
        this.setState({users});
    }
    render(){
        return (
            <ul className="list-group">
                {
                    this.state.users.map(function (user,index) {
                        return (
                            <li className="list-group-item">
                                <Link to={"/user/detail/"+user.id}>{user.username}/></Link>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
