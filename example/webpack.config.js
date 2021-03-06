/* eslint-disable max-lines-per-function */
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options = {}) => ({
    devtool: options.mode === 'production' ? 'source-map' : 'eval-source-map',
    devServer: {
        host: '0.0.0.0',
        hot: true,
        compress: true,
        open: true,
        public: 'localhost:8080',
        port: 8080,
        overlay: true
    },
    entry: './src/App.jsx',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/u,
                exclude: /node_modules/u,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.js$/u,
                enforce: 'pre',
                use: 'source-map-loader'
            },
            {
                test: /\.css$/u,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif|ico|eot|svg|ttf|woff|woff2)$/u,
                type: 'asset'
            }
        ]
    },
    output: {
        path: path.resolve('dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: './src/favicon.ico',
            filename: './index.html',
            inject: true,
            template: './src/index.html'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        symlinks: false
    }
});