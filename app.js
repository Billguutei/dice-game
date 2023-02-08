// to save player's turn
var activePlayer = 0;

// a variable to save player's collected score
var scores = [0, 0];

// a variable to save player's round score
var roundScore = 0;

var dice = Math.floor(Math.random() * 6) + 1;

// window.document.querySelector('#score-0').textContent = dice;

// document.querySelector('#score-1').textContent = dice;

document.querySelector("#score-0").textContent = "0";
document.querySelector("#score-1").textContent = "0";
document.querySelector("#current-0").textContent= "0";
document.querySelector("#current-1").textContent= "0";
document.querySelector(".dice").style.display = "none";

console.log("Шоо :" + dice)