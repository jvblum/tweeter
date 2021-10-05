const composerEvent = document.querySelector('#tweet-text');
let charCount = 0;

// callback for event listener; assigns the length of the value of #tweet-text
const charCounter = (e) => {
  charCount = composerEvent.value.length;
  console.log(charCount);
};

composerEvent.addEventListener('keyup', charCounter);