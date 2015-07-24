(function ($) {

    $.each($('em'), function(i, em){
        $(em).parent().css("text-align", "center");
    });

})(jQuery);
