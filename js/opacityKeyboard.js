'use strict';
define(['jQuery', 'hotkeys'], function($, hotkeys) {
    var opacity = 1;
    container = function () {
            return $('#container');
    },
    lockScroll = function () {
        $('body').css({'overflow': 'hidden'});
    },
    unlockScroll = function () {
        $('body').css({'overflow': 'auto'});
    };
    return {
        up: function () {
            $(document).bind('keydown', 'Alt+up', function () {
                lockScroll();
                if (opacity >= 1) {
                    return 
                }
                opacity += 0.1
                container().css({'opacity': opacity});
            });
            
        },

        down : function () {
            $(document).bind('keydown', 'Alt+down', function () {
                lockScroll();
                if (opacity == 0.0 ) {
                    return
                }
                opacity = opacity.toFixed(1);
                opacity -= 0.1;
                container().css({'opacity': opacity});
            });
        },
        
        init: function () {
            this.up();
            this.down();
        }
    }

});
