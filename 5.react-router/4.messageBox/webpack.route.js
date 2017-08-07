var path=require('path');
var HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    entry:path.resolve('./app/index.js'),
    output:{
        path:path.resolve('build'),
        filename:"bundle.js"
    },
    devServer:{
        inline:true,
        port:8080,
        contentBase:"./build"
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:"babel-loader",
                exclude:/node_modules/
            },
            {
                test:/\.css/,
                loader:"style-loader!css-loader"
            },
            {
                test:/\.(eot|ttf|svg|woff|woff2)$/,
                loader:"url-loader"
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./app/index.html"
        })
    ]
};