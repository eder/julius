'use strict';
var $ = require('js/vendors/jquery');
var templateStart = require('js/templates/_start_screen.html'); 
module.exports = new function () {
    var objLayer = {
        "horizontal":0,
        "vertical":0,
        "path":"",
        "opacity": 1
    };
    
    return {
        init : function () {
            this.render();
            this.getPath();
        },

        render : function () {
            $('body').append(templateStart());
        },
        
        getPath: function () {
            var $input = $('#input-path');
            $input.change(function () {
                console.log(this.files);
            });

            //$input.on('click', function (e) {
                ////e.preventDefault();
                //var inputValue = $(this).val();
                 
                //$('#input-fake').val(inputValue);
            //});

        
        }
    }
};
