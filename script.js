
function changeImage() {
  var image = document.getElementById("center-btnId");
  if (image.src.match("./images/btn-pause.png")) {
    image.src = "./images/btn-play.png";
  } else {
    image.src = "./images/btn-pause.png";
  }
}

$(document).ready(function(){
  $("#menu-btn").click(function(){
    $(".player").fadeOut();
    $(".player-list").fadeIn();
  });
});

$(document).ready(function(){
  $("#return-btn").click(function(){
    $(".player-list").fadeOut();
    $(".player").fadeIn();
  });
});

var song1 = {
  artist: "Icona Pop",
  title: "Still Don't Know",
  duration: "3:16\xa0\xa0|\xa0\xa0"
}

var song2 = {
  artist: song1.artist,
  title: "I Love It",
  duration: "2:35\xa0\xa0|\xa0\xa0"
}

var song3 = {
  artist: song1.artist,
  title: "Girlfriend",
  duration: "2:50\xa0\xa0|\xa0\xa0"
}

var song4 = {
  artist: song1.artist,
  title: "We Got the World",
  duration: "3:07\xa0\xa0|\xa0\xa0"
}

var song5 = {
  artist: song1.artist,
  title: "Nights Like This",
  duration: "3:24\xa0\xa0|\xa0\xa0"
}

document.getElementById("artist").innerHTML = song1.artist;
document.getElementById("song-title").innerHTML = song1.name;




function createPlaylist(object, id) {
  var para = document.createElement("p");
  var node = document.createTextNode(object);
  para.appendChild(node);
  var element = document.getElementById(id);
  element.appendChild(para);
}

function createPlaylist2(id) {
  var img = document.createElement("img");
  img.src = "./images/btn-share-small.png";
  img.className = "first-image";
  document.getElementById(id).appendChild(img);
}

function createPlaylist3(id) {
  var img = document.createElement("img");
  img.src = "./images/btn-heart-small.png";
  img.className = "second-image";
  document.getElementById(id).appendChild(img);
}


createPlaylist(song1.duration, "song1");
createPlaylist(song1.artist, "song1");
createPlaylist(song1.title, "song1.1");
createPlaylist2("song1")
createPlaylist3("song1")
createPlaylist(song2.duration, "song2");
createPlaylist(song2.artist, "song2");
createPlaylist(song2.title, "song2.1");
createPlaylist2("song2")
createPlaylist3("song2")
createPlaylist(song3.duration, "song3");
createPlaylist(song3.artist, "song3");
createPlaylist(song3.title, "song3.1");
createPlaylist2("song3")
createPlaylist3("song3")
createPlaylist(song4.duration, "song4");
createPlaylist(song4.artist, "song4");
createPlaylist(song4.title, "song4.1");
createPlaylist2("song4")
createPlaylist3("song4")
createPlaylist(song5.duration, "song5");
createPlaylist(song5.artist, "song5");
createPlaylist(song5.title, "song5.1");
createPlaylist2("song5")
createPlaylist3("song5")