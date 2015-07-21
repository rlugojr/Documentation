(function () {

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

    window.addEventListener("DOMContentLoaded", function () {
        var slideout = new Slideout({
            'panel'    : document.getElementById('wrapper'),
            'menu'     : document.getElementById('menu'),
            'padding'  : 256,
            'tolerance': 70,
            'touch'    : false
        });
        $("#mobilemenu").click(function () {
            slideout.toggle();
        });
    });
})();