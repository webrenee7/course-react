import  React from "react";
import SliderArrow from './SliderArrow';
import SliderDots from './SliderDots';
var $=require('jquery');
var imgUrl=require('../imgs/1.jpg');
export default class Slider extends React.Component{
    constructor(props){
        super(props);
        this.state={
            step:0
        }
    }
    Move(n){
        var len=this.props.imgData.length;
        var _n=this.state.step+n;
        if (_n === len + 1) {
            this.$bannerInner.css({
                left: 0
            });
            _n = 1;
        }
        if (_n < 0) {
            this.$bannerInner.css({
                left: -2800
            });
            _n =  len -1;
        }
        this.$bannerInner.animate({
            left: -700 * _n
        }, 500);
        this.setState({
            step: _n
        });
    }
    autoPlay(){
        this.timer&&clearInterval(this.timer);
        this.timer=setInterval(()=>{
            this.Move(1);
        },this.props.interval);
    }
    componentDidMount(){
        this.$bannerInner=$('.bannerInner');
        this.autoPlay();
    }
    render(){
        var arrowNode=this.props.arrow?<SliderArrow Move={this.Move.bind(this)}/>:null;
        var dotsNode=this.props.dots?<SliderDots len={this.props.imgData.length} step={this.state.step} Move={this.Move.bind(this)}/>:null;
        return (
            <div className="banner" onMouseOver={()=>{clearInterval(this.timer)}} onMouseOut={()=>{this.autoPlay()}}>
                <div className="bannerInner">
                    <ul>
                        {
                            this.props.imgData.map(function (img,index) {
                                return <li key={index}><img src={img.src}/></li>
                            })
                        }
                        <li><img src={imgUrl}/></li>
                    </ul>
                </div>
                {
                    arrowNode
                }
                {
                    dotsNode
                }
            </div>
        )
    }
}