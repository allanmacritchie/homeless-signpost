$('#searchbutton').click(function () {
    if ($('#searchbar').css('display') == "none") {
        $('#searchbar').fadeIn();
        $('.caret').css('transform', 'rotate(180deg)');
    } else {
        $('#searchbar').fadeOut();
        $('.caret').css('transform', 'rotate(0deg)');
    }
});