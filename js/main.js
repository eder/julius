'use strict';
window.jQuery = window.$ =  require('jquery/dist/jquery');

var Screen   = require('js/screen'),
    Move    = require('js/moveKeyboard'),
    Opacity = require('js/opacityKeyboard');

Screen.init();
Move.init();
Opacity.init();
