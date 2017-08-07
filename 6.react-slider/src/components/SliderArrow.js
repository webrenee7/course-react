import React from "react";
export default class SliderArrow extends React.Component{
    constructor(props){
        super(props);
    }
    handleLeftClick(){
        this.props.Move(-1);
    }
    handleRightClick(){
        this.props.Move(1);
    }
    render(){
        return (
            <div className="arrow">
                <a href="javascript:void 0" className="prev" onClick={this.handleLeftClick.bind(this)}></a>
                <a href="javascript:void 0" className="next" onClick={this.handleRightClick.bind(this)}></a>
            </div>
        )
    }
}
