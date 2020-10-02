// math function used for the sum of the dice roll found at https://www.tutorialrepublic.com/faq/how-to-find-the-sum-of-an-array-of-numbers-in-javascript.php

let dieRolls = [];
const rollButton = document.querySelector("#roll-button");
const showRolls = document.querySelector("#show-all");
let numDice = document.querySelector("#num-roll");
let results = document.querySelector("#results");
let reset = document.querySelector("#reset");
let count = 0;
resultsCount = 0;

rollButton.addEventListener("click", function () {
  while (count < numDice.value) {
    let roll = Math.floor(Math.random() * 6 + 1);
    dieRolls.push(roll);
    let sum = dieRolls.reduce(function (a, b) {
      return a + b;
    }, 0);

    count++;

    document.querySelector("#num-here").innerHTML = sum;
  }
});

let inputDice = Number(numDice.value);
console.log(inputDice);

showRolls.addEventListener("click", function () {
  while (resultsCount < numDice.value) {
    let rolls = "<li id='dice'>" + Number(dieRolls[resultsCount]) + "</li>";

    results.innerHTML += rolls;

    resultsCount++;
  }
});

reset.addEventListener("click", function () {
  dieRolls = [];
  document.querySelector("#num-roll").value = "";
  document.querySelector("#num-here").innerHTML = "";
  results.innerHTML = "";
  count = 0;
  resultsCount = 0;
});
