/* eslint-disable max-len */
// eslint-disable-next-line no-unused-vars
const projectName = 'random-joke-machine';
let jokesData;

var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];
var currentJoke = ''
var currentPunchline = ''

function getJokes() {
  return $.ajax({
    headers: {
      Accept: 'application/json'
    },
    url:
      'https://raw.githubusercontent.com/SandorNagyGH/sandornagygh.github.io/refs/heads/main/jokes.json',
    success: function (jsonJokes) {
      if (typeof jsonJokes === 'string') {
        jokesData = JSON.parse(jsonJokes);
        console.log('jokesData');
        console.log(jokesData);
      }
    }
  });
}

function getRandomJoke() {
  return jokesData[
    Math.floor(Math.random() * jokesData.length)
  ];
}

function getJoke() {
  let randomJoke = getRandomJoke();

  currentJoke = randomJoke.joke;
  currentPunchline = randomJoke.punchline;
  var encodedJoke = encodeURIComponent(currentJoke + ' - ' + currentPunchline);

  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodedJoke}`;
  $('#facebook-joke').attr(
    'href',
    shareUrl
  );

  $('#tweet-joke').attr(
    'href',
    'https://twitter.com/intent/tweet?hashtags=jokes&related=freecodecamp&text=' +
    encodedJoke
  );

  $('#tumblr-joke').attr(
    'href',
    'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=jokes,freecodecamp&caption=' +
    '&content=' +
    encodedJoke +
    '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
  );

  $('.joke-text').animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $('#text').text(randomJoke.joke);
    $('#punchline').text(randomJoke.punchline);
  });

  var color = Math.floor(Math.random() * colors.length);
  $('html body').animate(
    {
      backgroundColor: colors[color],
      color: colors[color]
    },
    1000
  );
  $('.button').animate(
    {
      backgroundColor: colors[color]
    },
    1000
  );
}

$(document).ready(function () {
  getJokes().then(() => {
    getJoke();
  });

  $('#new-joke').on('click', getJoke);
});
