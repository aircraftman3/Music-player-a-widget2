
function changeImage() {
  var image = document.getElementById("center-btnId");
  if (image.src.match("./images/btn-pause.png")) {
    image.src = "./images/btn-play.png";
  } else {
    image.src = "./images/btn-pause.png";
  }
}