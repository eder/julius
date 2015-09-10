'use strict';
var templateStart = require('js/templates/_start_screen.html');
var View = require('js/view');

module.exports = new function () {
    var objLayer = {
        "horizontal":0,
        "vertical":0,
        "path":"",
        "opacity": 1
    }, self;

    return {
        init : function () {
            self = this;
            this.render();
            this.closeScreen();
            this.getImage();
        },

        render : function () {
            if($('#julius-modal').length > 0) {
                return;
            }
            $('body').append(templateStart());
        },

        removeScreen : function () {
            $('#julius-modal').remove();
        },

        closeScreen : function () {
            $('.julius-close--screen').on('click', function (e) {
                e.preventDefault();
                self.removeScreen();
            });
        },
        getImage: function () {
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
                    reader.onloadend = function () { 
                        self.setImage(this.result);
                    };
                }

            });
        },
        setImage : function (image) {
            objLayer.path = image;
            View.init(objLayer);
            this.removeScreen() 
        }
    };
};

