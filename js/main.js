'use strict';
window.jQuery = window.$ =  require('jquery/dist/jquery');
var Start   = require('js/start'),
    Move    = require('js/moveKeyboard'),
    Opacity = require('js/opacityKeyboard');

Start.init();
Move.init();
Opacity.init();
