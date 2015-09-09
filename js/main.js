'use strict';
define(['jQuery'], function ($) {
    window.jQuery = $;
    return window.jQuery;

});

var Start = require('js/start');

Start.init();

//define(['js/view', 'js/moveKeyboard', 'js/opacityKeyboard'], function (view, move, opacity) {
    //view.init();
    //move.init();
    //opacity.init();
//});
