const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

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
    postcss :[
      autoprefixer({
        browsers: ['last 2 version']
      })
    ],
    plugins : [
      // Extract css files
      new ExtractTextPlugin('[name].[hash].css'),
      // Only emit files when there are no errors
      new webpack.NoErrorsPlugin(),
      // Dedupe modules in the output
      new webpack.optimize.DedupePlugin(),
      // // Minify all javascript, switch loaders to minimizing mode
      new webpack.optimize.UglifyJsPlugin({
        mangle: {
            keep_fnames: true//it works
        },
        sourceMap: false,
        compress: {
          warnings: false, // Suppress uglification warnings
          pure_getters: false,
          keep_fnames: true,
          unsafe: true,
          unsafe_comps: true,
          screw_ie8: true
        },
        output: {
          comments: false,
        },
        exclude: [/\.min\.js$/gi] // skip pre-minified libs
      }),
      new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
      new webpack.NoErrorsPlugin(),
      new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
    ],
    resolve: {
      extensions: ['', '.webpack.js', '.web.js', '.js']
    },
    node: {
      console: 'empty',
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
    },
    externals: {
      'TweenLite': 'TweenLite',
    },
    devtool: "source-map",
};
