'use strict';
window.jQuery = window.$ =  require('jquery/dist/jquery');

var localStorage = require('js/vendors/htmlstorage');

module.exports = new function () {
    var storage_name = 'juliusLayer', index;
    return {
        create: function (data) {
            if(this.isDiference(data)) {
                $.localStorage.setItem(storage_name, JSON.stringify(data));
            }
        },
        read: function () {
            var  result = $.localStorage.getItem(storage_name);
            return JSON.parse(result);
        },
        remove: function () {
            $.localStorage.removeItem(storage_name);
        },
        isDiference: function (data) {
            var res = this.read(data);
            if (res) {
                return this.compareJSON(res, data);
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
};
