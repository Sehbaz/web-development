var x1 = Math.random() * 6 + 1;
var y1 = Math.floor(x1);
var x2 = Math.random() * 6 + 1;
var y2 = Math.floor(x2);
function changeImage() {
  document.querySelector(".img1").src = "./images/dice" + y1 + ".png";
  document.querySelector(".img2").src = "./images/dice" + y2 + ".png";
}
changeImage();
if (y1 > y2) {
  document.querySelector(".title").innerHTML = "Player 1 Won";
} else {
  document.querySelector(".title").innerHTML = "Player 2 Won";
}
