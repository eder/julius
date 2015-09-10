'use strict';
var $ = require('jquery/src/core');
var templateStart = require('js/templates/_start_screen.html');
var View = require('js/view');

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
                var files = !!this.files ? this.files : [];
                // no file selected, or no FileReader support
                if (!files.length || !window.FileReader)  {
                    return;
                }
                if (/^image/.test( files[0].type)){ // only image file
                    var reader = new FileReader(); // instance of the FileReader
                    reader.readAsDataURL(files[0]); // read the local file
                    reader.onloadend = function(){ // set image data as background of div
                        objLayer.path = this.result;
                        View.init(objLayer);
                        $('#julius-modal').remove();
                    };
                }

            });
        }
    };
};

