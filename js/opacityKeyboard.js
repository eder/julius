'use strict';

require('js/vendors/jquery.hotkey');
var Storage = require('js/storage');

module.exports = new function () {
    var  self, objLayer, container = function () {
            return $('#julius-layer-container');
    };

    return {
        up: function () {
             
            $(document).bind('keydown', 'Alt+up', function () {
                objLayer = Storage.read();
                self.lockKeyPress();
                if (objLayer.opacity >= 1) {
                    return
                }
                objLayer.opacity += 0.1
                Storage.create(objLayer);
                container().css({'opacity': objLayer.opacity});
            });
        },
        down : function () {
            $(document).bind('keydown', 'Alt+down', function () {
                self.lockKeyPress();
                objLayer = Storage.read();
                if (objLayer.opacity == 0 ) {
                    return
                }
                objLayer.opacity = objLayer.opacity.toFixed(1);
                objLayer.opacity -= 0.1;
                Storage.create(objLayer);
                container().css({'opacity': objLayer.opacity});
            });
        },
        
        lockKeyPress : function () {
            var ar=new Array(33,34,35,36,37,38,39,40);
            $(document).keydown(function(e) {
                var key = e.which;
                if($.inArray(key,ar) > -1) {
                    e.preventDefault();
                    return false;
                }
                return true;
            });
        },
        
        init: function () {
            self = this;
            this.up();
            this.down();
        }
    }

};
