$(document).ready(() => {
  const composerEvent = $('#tweet-text');
  let charCount = 0;

  // callback for event listener; assign length of #tweet-text value
  const charCounter = () => {
    charCount = composerEvent.val().length;
    const charLimit = 140;

    const displayCount = charLimit - charCount;

    // toggle #red-counter
    if (displayCount < 0) {
      $('.char-counter').attr('id', 'red-counter');
    } else {
      $('.char-counter').attr('id', 'null');
    }

    // assign inner element value as displayCount (character limit subtracted by character count)
    $('.char-counter').text(displayCount);

  };

  // event listener
  composerEvent.on('keyup', charCounter);

});