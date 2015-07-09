'use strict';
var app = {};
app.view = new function () {
    return {
        container : function () {
            var $body = $('body'),
                container = $('<div />', {
                    id: 'container'
                });
            $body.append(container);
        }
    }
};
