/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {


  // takes tweet object; returns html article of tweet
  const createTweetElement = tweet => {
    
    return $(`
      <article>
        <header>
          <div class="user">
            <img class="avatar" src="${tweet.user.avatars}">
            <span class="name">${tweet.user.name}</span>
          </div>
          <span class="handle">${tweet.user.handle}</span>
        </header>
        <p>${tweet.content.text}</p><hr>
        <footer>
          <span>${timeago.format(tweet.created_at)}</span>
            <span class="icons">
              <i class="fas fa-flag" id="flag">
              </i><i class="fas fa-retweet" id="retweet">
              </i><i class="fas fa-heart" id="heart">
              </i></span>
        </footer>
      </article>`
    );

    // // write elements
    // const $avatars = $(`<img class="avatar" src="${tweet.user.avatars}">`);
    // const $name = $('<span class="name">').text(tweet.user.name);
    // const $handle = $('<span class="handle">').text(tweet.user.handle);
    // const $content = $('<p>').text(tweet.content.text);
    // const $timeago = $('<span>').text(timeago.format(tweet.created_at));

    // const $flag = $('<i class="fas fa-flag" id="flag">');
    // const $retweet = $('<i class="fas fa-retweet" id="retweet">');
    // const $heart = $('<i class="fas fa-heart" id="heart"></i>');

    // const $line = $('<hr>');

    // // init containers
    // const $tweet = $('<article>');

    // const $header = $('<header>');
    // const $user = $('<div class="user">');

    // const $footer = $('<footer>');
    // const $icons = $('<span class="icons">');

    // // add elements to container
    // $user.append($avatars, $name);
    // $header.append($user, $handle);

    // $icons.append($flag, $retweet, $heart);
    // $footer.append($timeago, $icons);

    // $tweet.append($header, $content, $line, $footer);
    
    // return $tweet;
  };

  const renderTweets = tweets => {
    
    // clear out container
    const $container = $(".tweets");
    $container.empty();
    
    // render tweets
    for (const tweet of tweets) {
      
      const $tweet = createTweetElement(tweet);
      $container.prepend($tweet);

    }
    
  };

  const $form = $('.new-tweet');

  // new-tweet post request
  $form.on('submit', function(event) {

    // stops refresh
    event.preventDefault();

    // init submitted data
    const input = $('#tweet-text').val();
    const serializedData = $(this).serialize();

    // bad requests
    if (!input) {
      return alert('write something!');
    }
    if (input.length > 140) {
      return alert('tweet too long');
    }
    
    // clears textarea
    $('#tweet-text').val('');

    // submits input to database; then renders page;
    $.post('/tweets', serializedData, (response) => {

      loadTweets();

    });

  });

    
  // gets data from tweets then renders them
  const loadTweets = () => {

    $.get('/tweets', null, (data) => {

      renderTweets(data);

    });

  };

  loadTweets();

});