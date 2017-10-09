const webpack = require('webpack');
const path = require('path');

module.exports = {
    debug: true,
    entry: {
        main: './src/js/entry'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath : '/dist/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
              test: /\.svg$/,
              loader: 'raw-loader'
            },
            {
              test: /\.(eot|svg|ttf|woff|woff2)$/,
              loader: 'file?name=public/fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
    ],
  externals: {
    'TweenLite': 'TweenLite',
  },
    devtool: "source-map",
};
