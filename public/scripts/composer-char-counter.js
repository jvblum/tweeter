$(document).ready(() => {
  const composerEvent = $('#tweet-text');
  let charCount = 0;

  // callback for event listener; assigns the length of the value of #tweet-text
  const charCounter = (e) => {
    charCount = composerEvent.val().length;
    charLimit = 140;

    displayCount = charLimit - charCount;

    // assigns value of inner element as displayCount (character limit subtracted by character count)
    $('.char-counter').text(displayCount);
    console.log(charCount);
    console.log(displayCount);
  };

  composerEvent.on('keyup', charCounter);

});


// const composerEvent = document.querySelector('#tweet-text');
// let charCount = 0;

// // callback for event listener; assigns the length of the value of #tweet-text
// const charCounter = (e) => {
//   charCount = composerEvent.value.length;
//   console.log(charCount);
// };

// composerEvent.addEventListener('keyup', charCounter);