//jsx  javascript+xml
//表达式：变量和操作符组成，有返回值
//如果遇到<开头的认为是HTML代码，按HTML结构来处理
//如果遇到{开头则认为是JS表达式，按JS代码来处理
//ReactDOM只渲染一次，如果需要多次渲染，需要把ReactDOM放到定时器中，如果内容不变，只渲染一次
var arr=["张三","李四","王五"];
var style={color:'red'};
ReactDOM.render(
    <ul>
        {
            arr.map(function (item,index) {//map返回值：处理后的新数组
                return <li key={index} style={style}>{item}</li>
            })
        }
    </ul>,
    document.getElementById('app')
);


