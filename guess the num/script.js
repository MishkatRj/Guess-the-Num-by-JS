var btn = document.getElementById("btn");
var promptBox = document.getElementById("promptBox");
var promtTxt = document.getElementById("promtTxt");
var txt = document.getElementById("txt");
var num = document.getElementById("num");
var chancesTxt = document.getElementById("chancesTxt");
var randomNumber = Math.floor(Math.random() * 100) + 1;

var number;
var Chances = 5;
chancesTxt.innerHTML = "Chances: " + Chances;
console.log(randomNumber);

btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(num.value);
  Chances--;
  chancesTxt.innerHTML = "Chances:- " + Chances;
  if (Chances == 0) {
    activateBox("Loss");
  }
  number = num.value;
  checkNum(number);
  num.value = "";
});

function checkNum(number) {
  if (number == randomNumber) {
    activateBox("Win");
  } else if (number > randomNumber) {
    txt.innerHTML = "Enter Small Number";
  } else {
    txt.innerHTML = "Enter Large Number";
  }
}

function activateBox(e) {
  prompt_box.classList.add("active");
  promt_txt.innerHTML = "You " + e + " The Game";
  randomNumber = Math.floor(Math.random() * 10) + 1;
}
function play(e) {
  prompt_box.classList.remove("active");
  Chances = 3;
  txt.innerHTML = "";
  chancesTxt.innerHTML = "Chances:- " + Chances;
}