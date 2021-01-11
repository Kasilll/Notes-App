const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports  = {
    mode:'development',
    entry: './src/app.js',
    output: {
        filename: "bundle.[hash].js",
        path: path.resolve(__dirname,'./public'),
        publicPath: ""
    },
    devServer: {
        open: true,
        port: 8080,
    },
    plugins: [
        new HTMLPlugin({
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
    ],
    module : {
        rules : [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use:  ['file-loader']
            }
        ]
    }
}