'use strict';

var Storage         = require('js/storage'),
    Draggable       = require('js/dragMouse'),
    LayerContainer  = require('js/templates/_layer_container.html');

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
                'z-index': 1000
            });
        },

        render : function () {
            $(target.body).append(LayerContainer());
        },

        insertImage : function () {
            $(target.layer).html($('<img>',{
                src: Storage.read().path
            }));
        },

        init : function (object) {
            if (!Storage.read()) {
                Storage.create(object);
            }

            this.render();
            this.layer();
            this.insertImage();
            Draggable.init();
        }
    };
};
