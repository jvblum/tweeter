$(document).ready(() => {
  console.log('nav-sticky.js');
  // fix nav elements in position;

  // get nav
  // const nav = $('nav');
  const nav = document.querySelector('nav');


  // get nav offset position
  const sticky = nav.offsetTop;

  const fixNav = () => {

    // nav sticky class toggle
    console.log(window.pageYOffset, '?>', sticky);
    if (window.pageYOffset > sticky) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  }

  $(document).scroll(fixNav);
});