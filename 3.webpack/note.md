## 全局安装
在命令行中使用

优点：
- 不管在哪装，装到的目的地都一样
- 不管在哪装，在哪都能用

缺点：
- 所有项目通用，容易引起版本冲突

## 本地安装
当需要在项目中通过require加载模块的时候，需要装本地

优点：
- 版本不会冲突
- 重复安装
- 不能在命令行中用



# webpack
什么是webpack?
> webpack是一款强大的`模块加载器`兼`打包工具`，它能把各种资源，例如JS（含JSX）、coffee、样式（含less/sass）、图片等都作为模块来使用和处理

webpack 的优势
- webpack 是以commonJS的形式来书写，但对AMD/CMD的支持也很全面,方便旧项目进行代码迁移
- 能被模块化的不仅仅是JS,还包括各种资源文件
- 开发便捷，能替代部分gulp的工作，比如打包、混淆压缩、图片转base64等
- 扩展性强，插件机制完善，特别是支持React热插拔

## 初始化
```
npm init -y
```
## 安装
```bash
npm install webpack webpack-dev-server babel-core babel-loader html-webpack-plugin open-browser-webpack-plugin babel-preset-es2015 babel-preset-react css-loader style-loader less-loader file-loader url-loader --save
```
- webpack
- webpack-dev-server
是一个Web服务器,可以预览项目，并且当修改源码后可以实时刷新页面
- babel-core
- babel-loader  转码es6-->es5  jsx-->js
- html-webpack-plugin
- open-browser-webpack-plugin
- babel-preset-es2015
- babel-preset-react
- css-loader
- style-loader
- less-loader
- file-loader
- url-loader

- react
- react-dom
- babel

## 在项目根目录下创建src和build目录
src目录存放源码，build目录存放编译打包之后的资源

## 配置文件
在根目录新建webpack.config.js，必须为这个名字
自己指定配置文件
"build-route":"webpack --config webpack.route.js",
"dev-route":"webpack-dev-server --config webpack.route.js"
配置文件的作用：把什么文件打包到什么地方去
```js
var path=require('path');
var HtmlWebpackPlugin=require('html-webpack-plugin');//可以自动将src中的文件生成到build中
// var OpenBrowserWebpackPlugin=require('open-browser-webpack-plugin');
module.exports={
    //配置入口文件和输出文件
    entry:path.resolve('src/index.js'),//入口文件路径
    output:{//设置输出的文件路径
        path:path.resolve('build'),//设置打包到哪个目录下
        filename:'bundle.js'//打包后保存的文件名
        // filename:'all[hash].js'//打包后保存的文件名根据哈希值变化
    },

    //配置开发服务器
    devServer:{
        inline:true,//源文件发生修改后，会触发重新打包，并自动刷新浏览器
        port:8080,
        //指定此静态文件服务器的文件根目录
        contentBase:'./build'
    },

    //设置模块加载器
    module:{
        //为了兼容各种各样的源文件，那么需要把它们全部转成js模块，那么每个源文件都需要一个转换器loader
        loaders:[
            {
                //当加载一个文件的时候，先判断其后缀，如果是.js结尾的，那么会交给babel-loader来进行转译
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules///排除掉node_modules文件
            },
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'
                //把css源文件作为style标签，插入到页面中
            },
            {
                test:/\.(eot|ttf|svg|woff|woff2)$/,
                //把此文件作为静态资源文件来处理。图片也是用此加载器
                loader:'url-loader'
            }
        ]
    },
    //配置插件
    plugins:[
        //根据模板在build下自动产生html文件，并且在其中插入生成的脚本和资源
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        //在打包完成后自动打开浏览器，并访问指定的url地址
        /*new OpenBrowserWebpackPlugin({
            url:'http://localhost:8080'
        })*/
    ]
};

```

## package.json中修改脚本
```
"scripts": {
    "build": "webpack",//会去找webpack这个模块，然后打包
    "dev":"webpack-dev-server"
},
```





## 打包
```
npm run build
```

build下会生成bundle.js打包文件



## webpack工作流程
- 执行`npm run build`脚本，找到package.json文件找到这个脚本，从而找到对应的命令
- 按命令的名字去当前目录的node_modules下面去寻找webpack.cmd文件执行
- 会去当前目录下找`webapck.config.js`文件，找到里面的入口文件，把入口文件以及入口文件依赖的模块全部打包到目录路径的目标文件里去




