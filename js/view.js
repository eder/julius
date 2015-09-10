'use strict';
var Storage = require('js/storage');
 module.exports = new function() {

    return {
        container : function () {
            var $body = $('body'),
                container = $('<div />', {
                    id: 'container'
                });
            $(container).css({
                'width' : 'auto',
                'height' : 'auto',
                'position' : 'fixed',
                'display': 'block',
                'top':  Storage.read().vertical,
                'left': Storage.read().horizontal,
                'right': 0,
                'margin': 'auto',
                'opacity': Storage.read().opacity,
                'z-index': 1000
            });
            $('#container').remove();
            $body.append(container);
        },
        insertImage : function () {
            $('#container').html($('<img>',{
                src: Storage.read().path
            }));
        },
        init : function (object) {
            console.log(object);
            if (!Storage.read()) {
                Storage.create(object);
            }

            if(object.path !== Storage.read().path) {
                Storage.create(object);
            }
            this.container();
            this.insertImage();
        }
    };
};

