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
    chrome.tabs.executeScript(null, {  file: 'js/julius.js'});
    window.close();
});
