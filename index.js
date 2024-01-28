var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImages = "dice" + randomNumber1 + ".png";

var randomDiceSource = "images/" + randomDiceImages;

document.querySelector(".img1").setAttribute("src", randomDiceSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", randomDiceSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins ";
} else {
  document.querySelector("h1").innerHTML = " It's a Draw!";
}
