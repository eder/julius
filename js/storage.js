'use strict';
define(['jQuery','js/vendors/htmlstorage'], function ($, htmlstorage) {
    var storage_name = 'juliusLayer', index;
    return {
        create: function (data) {
            if(this.isDiference(data)) {
                $.localStorage.setItem(storage_name, JSON.stringify(data));
            }
        },
        read: function () {
            var  result = $.localStorage.getItem(storage_name);
            console.log(result);
            return JSON.parse(result);
        },
        remove: function () {
            $.sessionStorage.removeItem(storage_name);
        },
        isDiference: function (data) {
            var res = this.read(data);
             if (res) {
                return this.compareJSON(res, data);
             }
        },
        compareJSON : function(oldValue, newValue) {
            for( index in newValue) {
                if(oldValue[index] !== newValue[index]) {
                    return true;
                }
            }
        }
    };
});
