$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 350) {
      $('.page-header').css('background', '#ffb8ca');
    }
    if ($(window).scrollTop() < 350) {
      $('.page-header').css('background', 'transparent');
    }
  });
});
