//配置文件的作用：把什么文件打包到什么地方去
var path=require('path');
var HtmlWebpackPlugin=require('html-webpack-plugin');//可以自动将src中的文件生成到build中
// var OpenBrowserWebpackPlugin=require('open-browser-webpack-plugin');
module.exports={
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
                //把此文件作为静态资源文件来处理
                loader:'url-loader'
            }
        ]
    },
    //配置插件
    plugins:[
        //根据模板自动产生html文件，并且在其中插入生成的脚本和资源
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        //在打包完成后自动打开浏览器，并访问指定的url地址
        /*new OpenBrowserWebpackPlugin({
            url:'http://localhost:8080'
        })*/
    ]
};