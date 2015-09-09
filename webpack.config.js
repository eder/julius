'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: 'js/main.js',
  resolve: {
    extensions: ['', '.js'],
    root: [
      __dirname
    ],
    alias: {
      jQuery: 'js/vendors/jquery.js',
      hotkeys: 'js/vendors/jquery.hotkey.js',
      //htmlstorage: 'js/vendors/htmlStorage.js'
    }
  },
  output: {
    path: __dirname,
    filename: 'js/julius.js'
  },
  module: {
    loaders: [
        { test: /\.html$/, loader: 'handlebars-loader'}    
    ]
  }
};
