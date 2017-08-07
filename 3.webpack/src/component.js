//es5导出
// module.exports='zfpx';

//es6导出
// export default name='zfpx';//导出一个默认变量
/*export var name='zfpx';
export var age=8;*/

import React from 'react';
//默认导出一个类Message，继承Component
//在React中，所有的自定义组件都要继承自React.Component
export default class Message extends  React.Component{//固定写法
    render(){
        return (
            <div>hello</div>
        )
    }
}
