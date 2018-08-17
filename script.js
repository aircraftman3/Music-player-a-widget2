function changeImage() {
  var image = document.getElementById("center-btnId");
  if (image.src.match("./images/btn-pause.png")) {
    image.src = "./images/btn-play.png";
  } else {
    image.src = "./images/btn-pause.png";
  }
}

$(document).ready(function () {
  $("#menu-btn").click(function () {
    $(".player").fadeOut();
    $(".player-list").fadeIn();
  });
  $("#return-btn").click(function () {
    $(".player-list").fadeOut();
    $(".player").fadeIn();
  });
});

var songs = [{
  songNumber: 1,
  artist: "Icona Pop",
  title: "Still Don't Know",
  duration: "3:16\xa0\xa0|\xa0\xa0"
}, {
  songNumber: 2,
  artist: "Icona Pop",
  title: "I Love It",
  duration: "2:35\xa0\xa0|\xa0\xa0"
}, {
  songNumber: 3,
  artist: "Icona Pop",
  title: "Girlfriend",
  duration: "2:50\xa0\xa0|\xa0\xa0"
}, {
  songNumber: 4,
  artist: "Icona Pop",
  title: "We Got the World",
  duration: "3:07\xa0\xa0|\xa0\xa0"
}, {
  songNumber: 5,
  artist: "Icona Pop",
  title: "Nights Like This",
  duration: "3:24\xa0\xa0|\xa0\xa0"
}, {
  songNumber: 6,
  artist: "Icona Pop",
  title: "Sun Goes Down",
  duration: "3:14\xa0\xa0|\xa0\xa0"
}, {
  songNumber: 7,
  artist: "Icona Pop",
  title: "Flashback",
  duration: "2:49\xa0\xa0|\xa0\xa0"
}, {
  songNumber: 8,
  artist: "Icona Pop",
  title: "Lovers to Friends",
  duration: "3:01\xa0\xa0|\xa0\xa0"
}, {
  songNumber: 9,
  artist: "Icona Pop",
  title: "Top Rated",
  duration: "2:59\xa0\xa0|\xa0\xa0"
}, {
  songNumber: 10,
  artist: "Icona Pop",
  title: "Wanna B With Somebody",
  duration: "3:01\xa0\xa0|\xa0\xa0"
}, {
  songNumber: 11,
  artist: "Icona Pop",
  title: "Light Me Up",
  duration: "3:20\xa0\xa0|\xa0\xa0"
}, {
  songNumber: 12,
  artist: "Icona Pop",
  title: "In the Stars",
  duration: "3:16\xa0\xa0|\xa0\xa0"
}];

document.querySelector("#current-artist").innerHTML = songs[0].artist;
document.querySelector("#current-song-title").innerHTML = songs[0].title;

$('#songs-container').on('click', 'li', function () {
  var song = songs[$(this).data('index')];
  $('#current-artist').html(song.artist);
  $('#current-song-title').html(song.title);
  $(".player-list").fadeOut();
  $(".player").fadeIn();
});

var f = function () {
  for (var i = 0; i < songs.length; i++) {
    $('#songs-container').append('<li class="first-row" data-index="' + i + '">' +
      songs[i].duration + songs[i].artist + '</li>' +
      '<img class="first-image" ' +
      'src="./images/btn-share-small.png" ' +
      'alt="Share">' + '<img class="second-image" ' +
      'src="./images/btn-heart-small.png" ' +
      'alt="Like">' + '<li class="second-row" data-index="' + i + '">' + songs[i].title +
      '</li>' + '<div class="border-div"></div>');
  }
};

f();