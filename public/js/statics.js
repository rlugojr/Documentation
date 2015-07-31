(function ($) {

    $('.tag').click(function () {
        var tagName = this.getAttribute('data-name');

        $('.tag').removeClass('active');
        $(this).addClass('active');

        $('.fileTitle:not(.' + tagName + ')').fadeOut(toggleEmptyDiv);
        $('.fileTitle.' + tagName).fadeIn(toggleEmptyDiv);
    });

    function toggleEmptyDiv(){
        if ($('.fileTitle:visible').length == 0) $('.emptyList').fadeIn();
        else $('.emptyList').fadeOut();
    }
})(jQuery);
