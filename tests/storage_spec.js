'use strict';
var Storage = require('js/storage');

describe('Storage of data', function () {
    var objectTest = {
        "top":0,
        "left":0,
        "path":"",
        "opacity": 1,
        "fileName": 'test0.jpg'
    };


    it('Should create a object with values pre-defined', function () {
        Storage.create(objectTest);
        expect(Storage.read()['test0.jpg']).toEqual(objectTest);
    });

    it('Should remove a  object in storage', function () {
        Storage.removeItem('test0.jpg')
        expect(Storage.read()).toEqual({});
    });

    it('Should remove all object in storage', function () {
        Storage.clear();
        expect(Storage.read()).toBeNull();
    });
});

