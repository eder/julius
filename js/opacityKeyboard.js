'use strict';
define(['jQuery', 'hotkeys', 'js/storage'], function($, hotkeys, storage) {
    var objLayer, container = function () {
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
                objLayer = storage.read();
                lockScroll();
                if (objLayer.opacity >= 1) {
                    return
                }
                objLayer.opacity += 0.1
                storage.create(objLayer);
                container().css({'opacity': objLayer.opacity});
                unlockScroll();
            });
        },
        down : function () {
            $(document).bind('keydown', 'Alt+down', function () {
                lockScroll();
                objLayer = storage.read();
                if (objLayer.opacity == 0 ) {
                    return
                }
                objLayer.opacity = objLayer.opacity.toFixed(1);
                objLayer.opacity -= 0.1;
                storage.create(objLayer);
                container().css({'opacity': objLayer.opacity});
                unlockScroll();
            });
        },
        init: function () {
            this.up();
            this.down();
        }
    }

});
