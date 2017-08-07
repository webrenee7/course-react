/*
* 属性
* 1、一般用来存放初始化后就不能改变的东西
* 2、一般由父组件传入
* */
var Person=React.createClass({
    propTypes:{//属性类型，是否必填
        age:React.PropTypes.number.isRequired//age这个属性必填，并且是number类型，如果不填或类型不是number，会报错
    },
    getDefaultProps(){//指定默认属性
        return {gender:'女',age:23}
    },
    render(){
        return (//括号是个整体
            <div>
                姓名：{this.props.name}{/*this指的就是Person的实例*/}
                性别：{this.props.gender}
                年龄：{this.props.age}
            </div>
        )
    }
});
ReactDOM.render(//组件渲染到容器内部
    <Person name="张三" {/*age=5*/} age={age} gender="男"/>,//属性有两种来源，一种默认，一种外界定义
    document.querySelector('#app')
);
/*
var i=0;
var a=(i++,++i,i);//从左往右计算，最后一个值返回给a
console.log(a);*/
