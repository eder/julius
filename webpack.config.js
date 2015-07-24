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
      jQuery: 'js/jquery.js',
      hotkeys: 'js/jquery.hotkey.js'
    }
  },
  output: {
    path: __dirname,
    filename: 'js/julius.js'
  }
};
