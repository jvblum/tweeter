$(document).ready(() => {

  // initialize new tweet slide toggle;
  $('.new-tweet').slideUp(0);
  let slideToggle = false;

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
  // $('').click(() => {

  // });
  
});