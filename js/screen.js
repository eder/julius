'use strict';
var templateStart       = require('js/templates/_start_screen.html');
var templateLatestImage = require('js/templates/_latest_image.html');
var View    = require('js/view');
var Storage = require('js/storage');

module.exports = new function () {
    var target = {
        modal       : '#julius-modal',
        buttonClose : '.julius-close--screen',
        lastImage   : '.julius-last-images',
        popup : '.julius-popup-container',
        input       : '#input-path',
        inputFake   : '#input-fake',
        imageContainer : '#julius-layer-container'
    };
    var objLayer = {
        "top":0,
        "left":0,
        "path":"",
        "opacity": 1,
        "fileName": ''
    }, self;

    return {

        render : function () {
            var $body = $('body');
            if($(target.modal).length > 0 || $(target.imageContainer).length > 0) {
                alert('Ops! Inspect your HTML. An image layer was already created.')
                return;
            }

            $body.scrollTop();
            $body.append(templateStart());
            var imageUrl = chrome.extension.getURL('/images/bg-popup.png');
            $(target.popup).css('background-image', 'url(' + imageUrl + ')');
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
        },

        lastImage : function () {
            if (!Storage.read()) {
                return;
            }
            $(target.popup).append(templateLatestImage(Storage.read()));

            $(target.lastImage).on('click', function (e) {
                e.preventDefault();
                View.render(Storage.read());
                self.removeScreen();
            });
        },

        init : function () {
            self = this;
            this.render();
            this.closeScreen();
            this.getImage();
            this.lastImage();
        },
    };
};

