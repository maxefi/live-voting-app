var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8090',
        'webpack/hot/only-dev-server',
        './src/index.jsx',
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                use: [
                    {loader: 'react-hot-loader'},
                    {loader: 'babel-loader'}
                ],
                exclude: /node_modules/
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
        publicPath: '/'
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        compress: true,
        port: 8090
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
