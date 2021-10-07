$(document).ready(() => {
  // fix nav elements in position;

  // get nav & toTop
  const nav = $('nav');
  const toTop = $('.toTop');

  // get nav offset position
  const sticky = nav.offset().top;

  const fixNav = () => {

    // toggle .sticky & .toTop
    if (window.pageYOffset > sticky) {
      toTop.show();
      nav.addClass('sticky');
    } else {
      toTop.hide();
      nav.removeClass('sticky');
    }
  };

  $(document).scroll(fixNav);
});