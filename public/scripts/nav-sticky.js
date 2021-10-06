$(document).ready(() => {
  // fix nav elements in position;

  // get nav
  const nav = $('nav');

  // get nav offset position
  const sticky = nav.offset().top;

  const fixNav = () => {

    // nav sticky class toggle
    if (window.pageYOffset > sticky) {
      nav.addClass('sticky');
    } else {
      nav.removeClass('sticky');
    }
  }

  $(document).scroll(fixNav);
});

// dev-only

// const nav = document.querySelector('nav');
// const sticky = nav.offsetTop;
// window.document.addEventListener('scroll', fixNav);
// nav.classList.add("sticky");
// nav.classList.remove("sticky");