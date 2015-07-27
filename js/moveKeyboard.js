'use strict';
define(['jQuery', 'hotkeys', 'js/storage'], function($, hotkeys, storage) {
    var objLayer, container = function () {
            return $('#container');
        };
      

    return {
        up : function () {
            $(document).bind('keydown', 'Shift+up', function () {
                objLayer = storage.read();
                objLayer.vertical += -1;
                storage.create(objLayer);
                container().css({'top' : objLayer.vertical });
            });
        },
        right : function (){
            $(document).bind('keydown', 'Shift+right', function () {
                objLayer = storage.read();
                objLayer.horizontal += 1 * 10;
                storage.create(objLayer);
                container().css({'left': objLayer.horizontal});
            });
        },
        down : function () {
            $(document).bind('keydown', 'Shift+down', function () {
                objLayer = storage.read();
                objLayer.vertical += 1;
                storage.create(objLayer);
                container().css({'top': objLayer.vertical});
            });
        },
        left : function () {
            $(document).bind('keydown', 'Shift+left', function () {
                objLayer = storage.read();
                objLayer.horizontal -= 1;
                storage.create(objLayer);
                container().css({'left': objLayer.horizontal});
            });
        },
            
        init : function () {
            this.up();
            this.right();
            this.down();
            this.left();
        }
    }
});
