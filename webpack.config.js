const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: './client/index.js', // assumes your entry point is the index.js in the root of your project folder
    mode: 'development',
    output: {
        path: path.join(__dirname, 'docs'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    devtool: 'source-maps',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          
        }
      ]
    }
  }