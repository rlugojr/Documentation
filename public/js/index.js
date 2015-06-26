document.addEventListener('DOMContentLoaded', function(){

  if($(document.body).height() < $(window).height()){
      $('.footer').css('position', 'absolute');
  }

  if($('#wrapper').attr('class') === "error slideout-panel"){
      $(document.body).css("background-image", 'url("/img/pattern_ban_1.png")');
      $(document.body).css("background-repeat", "repeat");
  }
});