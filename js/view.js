'use strict';
window.jQuery = window.$ =  require('jquery/dist/jquery');

var Storage              = require('js/storage'),
    Draggable            = require('js/dragMouse'),
    LayerContainer       = require('js/templates/_layer_container.html');

 module.exports = new function() {
    var target = {
        layer : '#julius-layer-container',
        body  : 'body'
    };

    return {
        layer : function () {
            $(target.layer).css({
                'position' : 'fixed',
                'display': 'block',
                'top':  Storage.read().top,
                'left': Storage.read().left,
                'right': 0,
                'margin': 'auto',
                'opacity': Storage.read().opacity,
                'z-index': 9999999999
            });
        },

        render : function () {
            $(target.body).append(LayerContainer());
        },

        insertImage : function () {
            $(target.layer).html($('<img>',{
                src: Storage.read().path
            }));
            var width =  $(target.layer + ' img').width();
            $(target.layer).css({'width': width})
        },

        init : function (object) {
            if (!Storage.read() || object.path !== Storage.read().path ) {
                Storage.create(object);
            }
            
            this.render();
            this.layer();
            this.insertImage();
            Draggable.init();
        }
    };
};
