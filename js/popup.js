var objLayer = {
    "horizontal":0,
    "vertical":0,
    "path":"",
    "opacity": 1
}, defaults = {
    button: '#button-send',
    input: '#input-path'
};



document.addEventListener('DOMContentLoaded', function () {
    $(defaults.button).on('click', function () {
        var $input = $(defaults.input).val();
        if (!$input) {
            return;
        }
        objLayer.path = $input;
        chrome.tabs.executeScript(null, {
            code: 'var object = ' + JSON.stringify(objLayer)
        }, function  () {
            chrome.tabs.executeScript(null, {  file: 'js/julius.js'});
        });
    });
});
