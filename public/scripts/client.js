/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {

  // xss protection
  const escape = str => {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

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
        <p>${escape(tweet.content.text)}</p><hr>
        <footer>
          <span>${timeago.format(tweet.created_at)}</span>
            <span class="icons">
              <i class="fas fa-flag" id="flag">
              </i><i class="fas fa-retweet" id="retweet">
              </i><i class="fas fa-heart" id="heart">
              </i></span>
        </footer>
      </article>
    `);

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
      return $('.error').attr('id', 'trigger').text('error: empty form - write something!');
    }
    if (input.length > 140) {
      return $('.error').attr('id', 'trigger').text('error: humming too long!');
    } // 140 is the charlimit for the app;

    // remove error message
    $('.error').attr('id', 'null');
    
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