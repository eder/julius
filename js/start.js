'use strict';
var templateStart = require('js/templates/_start_screen.html');
var View = require('js/view');

module.exports = new function () {
    var target = {
        modal       : '#julius-modal',
        buttonClose : '.julius-close--screen',
        input       : '#input-path',
        inputFake   : '#input-fake'
    };
    var objLayer = {
        "top":0,
        "left":0,
        "path":"",
        "opacity": 1,
        "fileName": ''
    }, self;

    return {
        init : function () {
            self = this;
            this.render();
            this.closeScreen();
            this.getImage();
        },

        render : function () {
            var $body = $('body');
            if($(target.modal).length > 0) {
                return;
            }

            $body.scrollTop();
            $body.append(templateStart());
            $(target.modal).css({
                width   : window.screen.width,
                height  : window.screen.height
            });
        },

        removeScreen : function () {
            $(target.modal).remove();
        },

        closeScreen : function () {
            $(target.buttonClose).on('click', function (e) {
                e.preventDefault();
                self.removeScreen();
            });
        },
        getImage: function () {
            var $input = $(target.input);
            $input.change(function () {
                var files = !!this.files ? this.files : [];
                // no file selected, or no FileReader support
                if (!files.length || !window.FileReader)  {
                    return;
                }
                if (/^image/.test( files[0].type)){        // only image file
                    var reader = new FileReader();       // instance of the FileReader
                    reader.readAsDataURL(files[0]);      // read the local file
                    reader.onloadend = function () { 
                        objLayer.fileName = files[0].name;
                        self.setImage(this.result);
                    };
                }

            });
        },
        setImage : function (image) {
            objLayer.path = image;
            View.init(objLayer);
            this.removeScreen();
        }
    };
};

