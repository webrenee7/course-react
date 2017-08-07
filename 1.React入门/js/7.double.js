/*
* 实现双向数据绑定
* */
var Foucs=React.createClass({
    getInitialState(){
        return {value:"初始值"};
    },
    handleChange(event){
        this.setState({value:event.target.value});
    },
   render(){
        var style={width:"100px", height:"30px",border:"1px solid red"};
       return (
           <div>
               <input style={style} type="text" value={this.state.value} onChange={this.handleChange}/>
               <p>{value}</p>
           </div>
       )
   }
});
ReactDOM.render(
    <Foucs/>,
    document.querySelector("#app")
);