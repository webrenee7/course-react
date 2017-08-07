import React from 'react';
export default class UserDetail extends React.Component{
    constructor(props){
        super(props);
        // console.log(this.props);
        this.id=this.props.routeParams.id;
    }
    render(){
        return (
            <div>UserDetail</div>
        )
    }
}
