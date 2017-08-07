ReactDOM.render(
    // <h1 class="red">hello</h1>,//nknown DOM property class. Did you mean className?
    <h1 className="red">hello</h1>,
    document.querySelector('#app')
);

//ReactDOM原理：
//babel 的作用是将JSX语法转为以下的JavaScript语法
render(
    {type:'h1',props:{className:'red'},children:'hello'},
    document.querySelector('#app')
);
//1、通过元素对象转换得到DOM元素
//2、把此DOM元素追加到container中
//React元素不等于DOM元素，但是ReactDOM元素和DOM元素有一一对应的关系
//React元素(虚拟DOM)==》相当于一个模型
function render(element,container) {
    var ele=document.createElement(element.type);//创建元素节点
    for(var attr in element.props){
        ele[attr]=element.props[attr];
    }
    ele.innerHTML=element.children;
    container.appendChild(ele);
}