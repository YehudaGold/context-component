const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      htmlWebpackPlugin = new HtmlWebpackPlugin({
          favicon: path.join(__dirname, 'example/src/favicon.ico'),
          filename: './index.html',
          inject: true,
          template: path.join(__dirname, 'example/src/index.html')
      });

module.exports = {
    devtool: 'eval-source-map',
    devServer: {
        open: true,
        port: 3000
    },
    entry: path.join(__dirname, 'example/src/App.jsx'),
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
    output: {
        path: path.join(__dirname, 'example/dist'),
        filename: 'bundle.js'
    },
    plugins: [htmlWebpackPlugin],
    resolve: {extensions: ['.js', '.jsx']}
};