const path = require('path').resolve;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports= {
    entry: {
        index: path(__dirname, '..', 'frontend', 'src', 'index.js'),
    },
    output: {
        filename: '[name].[contenthash:6].js',
        path: path(__dirname, '..', 'build'),
    },
    module: {
        rules: [
            {
               test: /\.(js|jsx)$/,
               exclude: /node_modules/,
               use: ['babel-loader']
            },
            {
                test: /\.mp4$/,
                use: ['file-loader']
             },
             {
                test: /\.(png|jpe?g|gif)$/i,
                use: ['file-loader'],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path(__dirname, '..', 'frontend', 'public', 'index.html'),
            publicPath: '/'
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer()
                ]
            }
        }),
    ]
}
