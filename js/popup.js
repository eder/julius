document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.executeScript(null, {  file: 'js/julius.js'});
    window.close();
});
