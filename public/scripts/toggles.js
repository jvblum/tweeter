$(document).ready(() => {

  // initialize new tweet slide toggle;
  let slideToggle = true;

  // new tweet slide toggle
  $('#dDown').click(() => {
    
    if (slideToggle) {
      $('.new-tweet').slideUp();
      slideToggle = false;
    } else {
      $('.new-tweet').slideDown();
      slideToggle = true;
    }
    
    
  });

  // go to top
  $('.toTop').click(() => {
    console.log('clicked');
    $(window).scrollTop(0);
  });
  
});