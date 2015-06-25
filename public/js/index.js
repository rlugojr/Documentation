document.addEventListener('DOMContentLoaded', function(){
    if($(document.body).height() < $(window).height()){
        $('.footer').css('position', 'absolute');
    }
});