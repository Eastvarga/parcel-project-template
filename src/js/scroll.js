$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 679) {
      $('.navigation__link').css('color', '#D41443');
    }
    if ($(window).scrollTop() < 679) {
      $('.navigation__link').css('color', 'white');
    }
  });
});
