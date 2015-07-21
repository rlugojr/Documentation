(function ($) {

    $('.tag').click(function (e) {
        var tagName = this.getAttribute('data-name');

        $('.fileTitle.'+ tagName).fadeIn();
        $('.fileTitle:not(.' + tagName + ')').fadeOut();
    });

})(jQuery);
