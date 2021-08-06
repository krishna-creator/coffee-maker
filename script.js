var coffeeStatus = "N";
var count = 0;
var start = document.getElementById("button");
var cup = document.getElementById("cup");
var coffee = document.getElementById("coffee");
start.addEventListener("click", s);
function s() {
  if (coffeeStatus == "N") {
    count += 1;
    cup.classList.remove("drink");
    cup.classList.add("cup");
    coffee.classList.add("coffee");
    setTimeout(function () {
      coffeeStatus = "Y";
      alert("touch the cup to drink coffee☕");
      alert("and your bill is " + count * 60 + " rupees");
    }, 8200);
  } else {
    alert("complete the coffee☕☕☕");
  }
}
function emptyTheCup() {
  if (coffeeStatus == "Y") {
    cup.classList.remove("cup");
    cup.classList.add("drink");
    coffee.classList.remove("coffee");
    setTimeout(function () {
      coffeeStatus = "N";
    }, 5000);
  }
}
