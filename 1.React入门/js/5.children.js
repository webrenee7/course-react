var Home=React.createClass({
    render(){
        //处理不是数组的情况
        var arr;
        if(Array.isArray(this.props.children)){
            arr=[this.props.children];//this.props.children是三个span组成的数组
        }else{
            arr=[];
        }
        return (
            <ul>
                {
                    arr.map(function (item,index) {
                        return <li key={index}>{item.props.children}</li>
                    })
                }
            </ul>
        )
    }
});
ReactDOM.render(
    <Home>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </Home>,
    document.querySelector("#app")
);
