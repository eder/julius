'use strict';
var locked;
require('js/vendors/jquery.hotkey');
var Storage = require('js/storage');

module.exports = new function () {
    var objLayer, container = function () {
            return $('#julius-layer-container');
        };

    return {
        up : function () {
            $(document).bind('keydown', 'Shift+up', function () {
                objLayer = Storage.read();
                objLayer.top += -1;
                Storage.create(objLayer);
                container().css({'top' : objLayer.top });
            });
        },

        right : function (){
            $(document).bind('keydown', 'Shift+right', function () {
                objLayer = Storage.read();
                objLayer.left += 1;
                Storage.create(objLayer);
                container().css({'left': objLayer.left});
            });
        },

        down : function () {
            $(document).bind('keydown', 'Shift+down', function () {
                objLayer = Storage.read();
                objLayer.top += 1;
                Storage.create(objLayer);
                container().css({'top': objLayer.top});
            });
        },

        left : function () {
            $(document).bind('keydown', 'Shift+left', function () {
                objLayer = Storage.read();
                objLayer.left -= 1;
                Storage.create(objLayer);
                container().css({'left': objLayer.left});
            });
        },

        hide : function () {
            $(document).bind('keydown', 'Shift+H', function () {
                container().css({'display' : 'none'});
            });
        },

        show : function () {
            $(document).bind('keydown', 'Shift+J', function () {
                container().css({'display' : 'block'});
            });
        },

        clear : function () {
            $(document).bind('keydown', 'Shift+C', function () {
                Storage.remove();
            });
        },

        lock : function () {
            $(document).bind('keydown', 'Shift+L', function () {
                objLayer = Storage.read();
                if(objLayer.PointerEvents === 'none') {
                    objLayer.PointerEvents = 'auto';
                } else {
                    objLayer.PointerEvents = 'none';
                    locked = true;
                    Storage.create(objLayer);
                }

                Storage.create(objLayer);
                container().css({'pointer-events': Storage.read().PointerEvents});
            });
        },

        init : function () {
            this.up();
            this.right();
            this.down();
            this.left();
            this.hide();
            this.show();
            this.clear();
            this.lock();
        }
    };
};
