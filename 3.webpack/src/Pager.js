import React from 'react';
export default class Message extends  React.Component{
    //ES6状态
    constructor(props){
        super(props);//在子类构造函数中必须首先调用父类的构造函数
        //初始化状态对象，对应ES5中的getInitialState
        this.state={
            currentPage:this.props.currentPage
        }
    }
    render(){
        var lis=[];
        for(let i=0;i<=this.props.totalPage;i++){//循环总页数
            //如果i和状态对象中的当前页相同的话，那么此li高亮
            lis.push(<li key={i} className={i==this.state.currentPage?"active":""} onClick={()=>{this.setState({currentPage:i})}}><a href="#">{i}</a></li>)
        }
        return (
            <nav aria-label="Page navigation">
                <ul className="pagination">
                    {
                        this.state.currentPage>1?
                            <li>
                                <a href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>:null
                    }
                    {
                        lis
                    }
                    {
                        this.state.currentPage<this.props.totalPage?
                            <li>
                                <a href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>:null
                    }
                </ul>
            </nav>
        )
    }
}
