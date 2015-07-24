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
                //opacity +=  1;
                var value = 1;
                container().css({'apacity': value });
            });
            
        },

        down : function () {
            $(document).bind('keydown', 'Alt+down', function () {
                lockScroll();
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
