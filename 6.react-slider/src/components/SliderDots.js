import React from "react";
export default class SliderArrow extends React.Component{
    constructor(props){
        super(props);
    }
    handleClick(i){
        i=i-this.props.step;
        this.props.Move(i);
    }
    render(){
        var lis=[];
        var step=this.props.step==4?0:this.props.step;
        for(var i=0;i<this.props.len;i++){
            lis.push(<li key={i} className={i==step?'selected':''} onClick={this.handleClick.bind(this,i)}></li>);
        }
        return (
            <div className="focusList">
                <ul>
                    {
                        lis
                    }
                </ul>
            </div>
        )
    }
}
