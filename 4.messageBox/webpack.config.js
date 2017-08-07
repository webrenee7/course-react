var path=require('path');
var HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    entry:path.resolve('src/index.js'),//绝对路径和相对路径都可以
    output:{
        path:path.resolve('build'),//必须是绝对路径
        filename:'bundle.js'
    },
    devServer:{
        inline:true,
        port:8080,
        contentBase:'./build'
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'
            },
            {
                test:/\.(eot|ttf|svg|woff|woff2)$/,//图片也是url-loader
                loader:'url-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]

};