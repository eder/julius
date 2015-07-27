'use strict';
define(['jQuery'], function ($) {
    window.jQuery = $;
    return window.jQuery;

});

define(['js/view', 'js/moveKeyboard', 'js/opacityKeyboard'], function (view, move, opacity) {
    view.init();
    move.init();
    opacity.init();
});
