let jokesData;
var currentJoke = ''
var currentPunchline = ''

function getJokes() {
  return $.ajax({
    headers: {
      Accept: 'application/json'
    },
    url:
      'https://raw.githubusercontent.com/SandorNagyGH/sandornagygh.github.io/refs/heads/main/JokeMachine/jokes.json',
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
  $('#x-joke').attr(
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

  $('#bubble').animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $('#text').text(randomJoke.joke);
    $('#punchline').text(randomJoke.punchline);
  });

}

$(document).ready(function () {
  getJokes().then(() => {
    getJoke();
  });

});