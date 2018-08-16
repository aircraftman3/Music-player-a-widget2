// changing play/pause button
function changeImage() {
  var image = document.getElementById("center-btnId");
  if (image.src.match("./images/btn-pause.png")) {
    image.src = "./images/btn-play.png";
  } else {
    image.src = "./images/btn-pause.png";
  }
}

// fading out of player window and fading in of playlist window
$(document).ready(function () {
  $("#menu-btn").click(function () {
    $(".player").fadeOut();
    $(".player-list").fadeIn();
  });
});

// fading out of playlist window and fading in of player window
$(document).ready(function () {
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

// initial value
document.querySelector("#current-artist").innerHTML = songs[0].artist;
document.querySelector("#current-song-title").innerHTML = songs[0].title;






// function createPlaylist(object, id) {
//   var para = document.createElement("p");
//   var node = document.createTextNode(object);
//   para.appendChild(node);
//   var element = document.getElementById(id);
//   element.appendChild(para);
// }
//
// function createPlaylist2(id) {
//   var img = document.createElement("img");
//   img.src = "./images/btn-share-small.png";
//   img.className = "first-image";
//   document.getElementById(id).appendChild(img);
// }
//
// function createPlaylist3(id) {
//   var img = document.createElement("img");
//   img.src = "./images/btn-heart-small.png";
//   img.className = "second-image";
//   document.getElementById(id).appendChild(img);
// }


// createPlaylist(songs[0].duration, "song1");
// createPlaylist(songs[0].artist, "song1");
// createPlaylist(songs[0].title, "song1.1");
// createPlaylist2("song1")
// createPlaylist3("song1")
// createPlaylist(song2.duration, "song2");
// createPlaylist(song2.artist, "song2");
// createPlaylist(song2.title, "song2.1");
// createPlaylist2("song2")
// createPlaylist3("song2")
// createPlaylist(song3.duration, "song3");
// createPlaylist(song3.artist, "song3");
// createPlaylist(song3.title, "song3.1");
// createPlaylist2("song3")
// createPlaylist3("song3")
// createPlaylist(song4.duration, "song4");
// createPlaylist(song4.artist, "song4");
// createPlaylist(song4.title, "song4.1");
// createPlaylist2("song4")
// createPlaylist3("song4")
// createPlaylist(song5.duration, "song5");
// createPlaylist(song5.artist, "song5");
// createPlaylist(song5.title, "song5.1");
// createPlaylist2("song5")
// createPlaylist3("song5")
// createPlaylist(song6.duration, "song6");
// createPlaylist(song6.artist, "song6");
// createPlaylist(song6.title, "song6.1");
// createPlaylist2("song6")
// createPlaylist3("song6")
//
// createPlaylist(song7.duration, "song7");
// createPlaylist(song7.artist, "song7");
// createPlaylist(song7.title, "song7.1");
// createPlaylist2("song7")
// createPlaylist3("song7")
// createPlaylist(song8.duration, "song8");
// createPlaylist(song8.artist, "song8");
// createPlaylist(song8.title, "song8.1");
// createPlaylist2("song8")
// createPlaylist3("song8")
// createPlaylist(song9.duration, "song9");
// createPlaylist(song9.artist, "song9");
// createPlaylist(song9.title, "song9.1");
// createPlaylist2("song9")
// createPlaylist3("song9")
// createPlaylist(song10.duration, "song10");
// createPlaylist(song10.artist, "song10");
// createPlaylist(song10.title, "song10.1");
// createPlaylist2("song10")
// createPlaylist3("song10")
// createPlaylist(song11.duration, "song11");
// createPlaylist(song11.artist, "song11");
// createPlaylist(song11.title, "song11.1");
// createPlaylist2("song11")
// createPlaylist3("song11")
// createPlaylist(song12.duration, "song12");
// createPlaylist(song12.artist, "song12");
// createPlaylist(song12.title, "song12.1");
// createPlaylist2("song12")
// createPlaylist3("song12")



$('#songs-container').on('click', 'li', function() {
  // Get the clicked person's information
  var song = songs[$(this).data('index')];

  // Set info in the corresponding elements
  /* $('#song-duration').html(song.duration); */
  $('#current-artist').html(song.artist);
  $('#current-song-title').html(song.title);
});

var f = function() {
  for (var i = 0; i < songs.length; i++) {
    $('#songs-container').append('<li class="first-row" data-index="' + i + '">' +
      songs[i].duration + songs[i].artist + '</li>' +
      '<li class="second-row" data-index="' + i + '">' + songs[i].title +
      '</li>' + '<img class="first-image" ' +
      'src="./images/btn-share-small.png" ' +
      'alt="Share">' + '<img class="second-image" ' +
      'src="./images/btn-heart-small.png" ' +
      'alt="Like">' + '<div class="border-div"></div>');
}
};
f();

