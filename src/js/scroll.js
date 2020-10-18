document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function (e) {
    if (window.scrollY > 679) {
      document.getElementsByClassName('page-header')[0].style.background =
        '#FFB8CA';
    } else {
      document.getElementsByClassName('page-header')[0].style.background =
        'transparent';
    }
  });
});
