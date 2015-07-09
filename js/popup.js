document.addEventListener('DOMContentLoaded', function () {
    $('#button-send').on('click', function () {
        //var $input = $('#input-path').val();
        //app.view.container();
        chrome.tabs.executeScript(function () {
            alert("its Works");
        });
    });
});
