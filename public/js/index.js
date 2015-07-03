(function ($) {
    document.addEventListener('DOMContentLoaded', function () {

        if ($(document.body).height() < $(window).height()) {
            $('.footer').css('position', 'absolute');
        }

        if ($('#wrapper').attr('class') === "error slideout-panel") {
            $(document.body).css("background-image", 'url("/img/pattern_ban_1.png")');
            $(document.body).css("background-repeat", "repeat");
        }
    });


    //-----------------
    //-- Action on banner
    //-----------------
    $("#home").click(function () {
        window.location = "/";
    });
    $("#whatsnew").click(function () {
        window.location = "/whats-new";
    });
    $("#tutorials").click(function () {
        window.location = "/tutorials";
    });
    $("#exporters").click(function () {
        window.location = "/exporters";
    });
    $("#extensions").click(function () {
        window.location = "/extensions";
    });
    $("#classes").click(function () {
        window.location = "/classes";
    });


    // ----------------------
    // LEFT MENU FOR MOBILE
    // ----------------------

    var slideout = new Slideout({
        'panel'    : document.getElementById('wrapper'),
        'menu'     : document.getElementById('menu'),
        'padding'  : 256,
        'tolerance': 70
    });
    $("#mobilemenu").click(function () {
        slideout.toggle();

        if (!slideout.isOpen()) {
            $('#menu').css("display", "none");
        } else {
            $('#menu').css("display", "block");
        }
    });
})(jQuery);