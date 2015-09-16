'use strict';
window.jQuery = window.$ =  require('jquery/dist/jquery');

var localStorage = require('js/vendors/htmlstorage');
var storage_name = 'juliusLayer', index, dataObject = {};

module.exports = (function () {
    return {
        create: function (data) {
            if(this.isDiference(data)) {
                dataObject[data.fileName] = data;
                $.localStorage.setItem(storage_name, JSON.stringify(dataObject));
            }
        },

        read: function () {
            var  result = $.localStorage.getItem(storage_name);
            return JSON.parse(result);
        },

        removeItem : function (itemName) {
            var data = JSON.parse($.localStorage.getItem(storage_name));
            delete data[itemName];
            $.localStorage.setItem(storage_name, JSON.stringify(data));
        },

        clear: function () {
            $.localStorage.removeItem(storage_name);
        },

        isDiference: function (data) {
            var result = this.read(data);
            if (result) {
                return this.compareJSON(result, data);
            }
            return true;
        },

        compareJSON : function(oldValue, newValue) {
            for( index in newValue) {
                if(oldValue[index] !== newValue[index]) {
                    return true;
                }
            }
        }
    };
})();
