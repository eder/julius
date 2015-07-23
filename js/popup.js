document.addEventListener('DOMContentLoaded', function () {
    $('#button-send').on('click', function () {
        var $input = $('#input-path').val();
        if (!$input) {
            return;
        }
        var object = { 'path' : $input };
        chrome.tabs.executeScript(null, {
            code: 'var object = ' + JSON.stringify(object)
        }, function  () {
            chrome.tabs.executeScript(null, {  file: 'js/julius.js'});
        });
    });
});
