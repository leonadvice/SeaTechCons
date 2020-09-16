(function ($) {
  'use strict';

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      $('.bg-white-custom').css('background', '#fff');
    } else {
      $('.bg-white-custom').css('background', 'transparent');
    }
  });
})(jQuery);
