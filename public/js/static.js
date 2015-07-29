(function ($) {
    $('.tocToggle').click(function(){
        $('.tocContent').toggle(600);

        $('.tocToggle i').attr('class',
             $('.tocToggle i').attr('class') === 'fa fa-arrow-up' ? 'fa fa-arrow-down' : 'fa fa-arrow-up'
        );
    });

    $('.tocContent a').click(function(evt){

    });
})(jQuery);
