const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, 'public/index.html'),
    filename: './index.html',
    favicon: path.join(__dirname, 'public/favicon.ico'),
    inject: true
});

module.exports = {
    entry: path.join(__dirname, 'src/App.js'),
    output: {
        path: path.join(__dirname, 'example/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif|ico|eot|svg|ttf|woff|woff2)$/,
                use: [{loader: 'url-loader'}]
            }
        ]
    },
    plugins: [htmlWebpackPlugin],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'eval-source-map',
    devServer: {
        hot: true,
        open: true,
        port: 3000
    }
};