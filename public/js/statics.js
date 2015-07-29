(function ($) {

    $('.tag').click(function () {
        var tagName = this.getAttribute('data-name');

        $('.tag').removeClass('active');
        $(this).addClass('active');

        $('.fileTitle:not(.' + tagName + ')').fadeOut();
        $('.fileTitle.'+ tagName).fadeIn();

        if($('.fileTitle:visible').length == 0){
            $('.fileList').append($('<p>', { text : 'nothing in this category :('}));
        }
    });

})(jQuery);
