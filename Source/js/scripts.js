$('#searchbutton').click(function () {
    if ($('#searchbar').css('display') == "none") {
        $('#searchbar').fadeIn();
    } else {
        $('#searchbar').fadeOut();
    }
});