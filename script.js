
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
  duration: "3:16"
}

var song2 = {
  artist: song1.artist,
  title: "I Love It",
  duration: "2:35"
}

var song3 = {
  artist: song1.artist,
  title: "Girlfriend",
  duration: "2:50"
}

var song4 = {
  artist: song1.artist,
  title: "We Got the World",
  duration: "3:07"
}

var song5 = {
  artist: song1.artist,
  title: "Nights Like This",
  duration: "3:24"
}

document.getElementById("artist").innerHTML = song1.artist;
document.getElementById("song-title").innerHTML = song1.name;




function tryMe(object, id) {
  var para = document.createElement("p");
  var node = document.createTextNode(object);
  para.appendChild(node);
  var element = document.getElementById(id);
  element.appendChild(para);
}

tryMe(song1.duration, "song1");
tryMe(song1.artist, "song1");
tryMe(song1.title, "song1");
