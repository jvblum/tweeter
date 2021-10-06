/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// takes tweet json object; returns article (html) of tweet

$(document).ready(() => {

  const createTweetElement = tweet => {
    
    // write elements 
    const $avatars = $(`<img class="avatar" src="${tweet.user.avatars}">`);
    const $name = $('<span class="name">').text(tweet.user.name);
    const $handle = $('<span class="handle">').text(tweet.user.handle);
    const $content = $('<p>').text(tweet.content.text);
    const $timeago = $('<span>').text(timeago.format(tweet.created_at));

    const $flag = $('<i class="fas fa-flag" id="flag">');
    const $retweet = $('<i class="fas fa-retweet" id="retweet">');
    const $heart = $('<i class="fas fa-heart" id="heart"></i>');

    const $line = $('<hr>');

    // init containers
    const $tweet = $('<article>');

    const $header = $('<header>');
    const $user = $('<div class="user">');

    const $footer = $('<footer>');
    const $icons = $('<span class="icons">');

    // add elements to container
    $user.append($avatars, $name);
    $header.append($user, $handle);

    $icons.append($flag, $retweet, $heart);
    $footer.append($timeago, $icons);

    $tweet.append($header, $content, $line, $footer);
    
    return $tweet;
  };
  
  // 
  
  const renderTweets = tweets => {
    
    // clear out container
    const $container = $(".container");
    $container.empty();
    
    // render tweets
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $container.prepend($tweet);
    }
    
  }
  
  // Test / driver code (temporary)
  
  // example below
  // Fake data taken from initial-tweets.json
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
        "content": {
          "text": "Je pense , donc je suis"
        },
        "created_at": 1461113959088
      }
    ]
    
    renderTweets(data);
    
  });