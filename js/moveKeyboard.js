'use strict';
require('js/vendors/jquery.hotkey');
var Storage = require('js/storage');



module.exports = new function () {
    var objLayer, container = function () {
            return $('#container');
        };
      

    return {
        up : function () {
            $(document).bind('keydown', 'Shift+up', function () {
                objLayer = Storage.read();
                objLayer.vertical += -1;
                Storage.create(objLayer);
                container().css({'top' : objLayer.vertical });
            });
        },
        right : function (){
            $(document).bind('keydown', 'Shift+right', function () {
                objLayer = Storage.read();
                objLayer.horizontal += 1 * 10;
                Storage.create(objLayer);
                container().css({'left': objLayer.horizontal});
            });
        },
        down : function () {
            $(document).bind('keydown', 'Shift+down', function () {
                objLayer = Storage.read();
                objLayer.vertical += 1;
                Storage.create(objLayer);
                container().css({'top': objLayer.vertical});
            });
        },
        left : function () {
            $(document).bind('keydown', 'Shift+left', function () {
                objLayer = Storage.read();
                objLayer.horizontal -= 1;
                Storage.create(objLayer);
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
};
