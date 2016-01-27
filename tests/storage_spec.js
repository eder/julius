'use strict';
var Storage = require('js/storage');

describe('Storage of data', function () {
    var objectTest = {
        "top":0,
        "left":0,
        "path":"",
        "opacity": 1,
        "fileName": ''
    };

    it('Should create a object with values pre-defined', function () {
        Storage.create(objectTest);
        expect(Storage.read()).toEqual(objectTest);
    });

    it('Should remove object in stoage', function () {
        Storage.remove()
        expect(Storage.read()).toBeNull();
    });
});


