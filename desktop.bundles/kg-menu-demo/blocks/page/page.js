modules.require(['jquery'], function($){
  $('.page__generate').click(function(){
    var config = $.extend(
      JSON.parse($('.page__menu-config').val()),
      { button : $('.page__menu-button') }
    );
    
    $('.page__menu-container').kgMenu(config);
  })
});