var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var PlayerMessage = "Refresh me";


function whoWins() {
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
  if (randomNumber1 === randomNumber2) {
    PlayerMessage = "🍀 Draw 🍀";
} else if (randomNumber1 > randomNumber2) {
   PlayerMessage = "😎 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  PlayerMessage = "Player 2 Wins! 😎";
}

return document.querySelector("h1").innerHTML = PlayerMessage;
}

whoWins();
