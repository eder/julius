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

        render : function (data) {
            if ($(target.layer).length > 0) return;

            $(target.body).append(LayerContainer(data));
            var width = $(target.layer + ' ' +  'img').width();
            $(target.layer).css({'width': width});
            Draggable.init();

        },

        init : function (object) {
            if (!Storage.read() || object.path !== Storage.read().path ) {
                Storage.create(object);
            }

            this.render(Storage.read());
        }
    };
};
