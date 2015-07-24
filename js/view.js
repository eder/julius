'use strict';

define(['jQuery'], function ($) {
    
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
                'top': 0,
                'left': 0,
                'right': 0,
                'margin': 'auto'
            })
            $('#container').remove();
            $body.append(container);
        },
        insertImage : function () {
           $('#container').html($('<img>',{
               src: object.path
           }));
        },
        centerContainer : function () {
           var width =  $('#container > img').width();
           $('#container').css({'width': width + 'px'});
        },
        init : function () {
            this.container();
            this.insertImage();
            this.centerContainer();
        }
    }
});

