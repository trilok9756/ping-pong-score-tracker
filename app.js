const playerOneScore = document.querySelector("#player-one-score");
const playerTwoScore = document.querySelector("#player-two-score");
const playerOneBtn = document.querySelector("#player-one-btn");
const playerTwoBtn = document.querySelector("#player-two-btn");
const resetBtn = document.querySelector("#reset-btn");
const scoreBtn = document.querySelector(".score-btn");

let currPlayerOneScr = 0;
let currPlayerTwoScr = 0;
let selectedScore = 1;
let isGameOver = false;

playerOneBtn.addEventListener("click", function () {
  if (!isGameOver) {
    currPlayerOneScr++;
    playerOneScore.innerHTML = `${currPlayerOneScr}`;
    if (currPlayerOneScr === selectedScore) {
      isGameOver = true;
      playerOneScore.style.color = "green";
      playerTwoScore.style.color = "red";
      playerOneBtn.disabled = true;
      playerTwoBtn.disabled = true;
    }
  }
});
playerTwoBtn.addEventListener("click", function () {
  if (!isGameOver) {
    currPlayerTwoScr++;
    playerTwoScore.innerHTML = `${currPlayerTwoScr}`;
    if (currPlayerTwoScr === selectedScore) {
      isGameOver = true;
      playerOneScore.style.color = "green";
      playerTwoScore.style.color = "red";
      playerOneBtn.disabled = true;
      playerTwoBtn.disabled = true;
    }
  }
});

resetBtn.addEventListener("click", function () {
  playerOneScore.innerText = "0";
  playerTwoScore.innerText = "0";
  currPlayerOneScr = 0;
  currPlayerTwoScr = 0;
  playerOneBtn.style.display = "inline-block";
  playerTwoBtn.style.display = "inline-block";
  selectedScore = 1;
  isGameOver = false;
  playerOneScore.style.color = "black";
  playerTwoScore.style.color = "black";
  playerOneBtn.disabled = false;
  playerTwoBtn.disabled = false;
});

function assignSelected() {
  const option = document.querySelector("#options");
  selectedScore = eval(option.value);
}
