'use strict';

define(['jQuery', 'js/storage' ], function ($, storage) {
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
                'top':  storage.read().vertical,
                'left': storage.read().horizontal,
                'right': 0,
                'margin': 'auto',
                'opacity': storage.read().opacity,
                'z-index': 1000
            });
            $('#container').remove();
            $body.append(container);
        },
        insertImage : function () {
            $('#container').html($('<img>',{
                src: storage.read().path
            }));
        },
        init : function () {
            if (!storage.read()) {
                storage.create(object);
            }

            if(object.path !== storage.read().path) {
                storage.create(object);
            }
            this.container();
            this.insertImage();
        }
    };
});

