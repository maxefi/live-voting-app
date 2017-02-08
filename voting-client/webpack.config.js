module.exports = {
    entry: './src/index.js',
    module: {
        rules: [{
            test: /\.(js|jsx)?$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
        publicPath: '/'
    },
    devServer: {
        contentBase: './dist',
        compress: true,
        port: 8090
    }
};
