const counter = document.querySelector(".count");

const button = document.querySelector("button");

const buttonE2 = document.querySelector(".btn");

const buttonE3 = document.querySelector(".sndbtn");

const buttonE4 = document.querySelector(".game-buttons");

const resultE1 = document.getElementById("result");

const playerScoreE1 = document.getElementById("user-score");

const computerScoreE1 = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

var clicks = 0;


buttonE4.addEventListener('click', function(event) {
  const clickedButton = event.target;

  if (clickedButton.tagName === 'BUTTON') {
    const userChoice = clickedButton.id;
    const computerChoice = computerPlay();

    const roundResult = playRound(userChoice, computerChoice);

    resultE1.textContent = `You chose: ${userChoice}. Computer chose: ${computerChoice}. ${roundResult}`;
  }
});

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}


function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    playerScoreE1.textContent = playerScore;
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else {
    computerScore++;
    computerScoreE1.textContent = computerScore;
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
}

function clickCounter(){
    clicks +=1;
    counter.textContent = clicks;

    counter.classList.add('pulse');
    setTimeout(() => counter.classList.remove('pulse'), 300);
}

function clickMinus(){
    if(clicks > 0){
        clicks -=1;
        counter.textContent = clicks;

    counter.classList.add('pulse');
    setTimeout(() => counter.classList.remove('pulse'), 300);
    }
}

function resetCounter(){
    if(clicks > 0){
    counter.classList.add('pulse');
    setTimeout(() => counter.classList.remove('pulse'), 300);
    }
    clicks = 0;
    counter.textContent = clicks;

}


button.addEventListener("click", clickCounter);
buttonE2.addEventListener("click", resetCounter);
buttonE3.addEventListener("click", clickMinus);