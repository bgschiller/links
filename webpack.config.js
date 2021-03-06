var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var extractCSS = new ExtractTextPlugin("bundle.css");

module.exports = {
    entry: './src/main.js',
    output: {
      path: __dirname,
      filename: 'bundle.js',
      chunkFilename: 'bundle.css',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react'],
                },
             },
            {
              test: /\.css$/,
              loader: extractCSS.extract("style-loader", "css-loader"),
            }
        ],
    },
    plugins: [
      extractCSS,
    ],
};
