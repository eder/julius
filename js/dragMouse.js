'use strict';
require('jquery-ui/draggable');
var Storage = require('js/storage');
var target = {
    layer : '#julius-layer-container',
};
var layerPosition, self;

module.exports = new function () {
    return {
        draggable: function () {
            self = this;
            $(target.layer).draggable({
                drag: function(event, ui ) {
                    self.registerPosition(ui);
               }
            });
        },

        registerPosition : function (data) {
            layerPosition = Storage.read();
            layerPosition.top   = data.position.top;
            layerPosition.left  = data.position.left;
            Storage.create(layerPosition);
        },

        init : function () {
            this.draggable();
        }
    }
};
