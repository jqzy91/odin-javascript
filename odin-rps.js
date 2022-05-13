const btnplayerchoice = document.querySelectorAll(".btnplayerchoice");

for (i = 0; i < btnplayerchoice.length; i++) {
  btnplayerchoice[i].addEventListener("click", playerChoice);
}

let cSelection;
function computerPlay() {
  const number = Math.floor(Math.random() * 3) + 1;
  if (number === 1) {
    cSelection = "rock";
  } else if (number === 2) {
    cSelection = "paper";
  } else if (number === 3) {
    cSelection = "scissors";
  }
}

let pSelection;
function playerChoice(e) {
  if (e.target === btnrock) {
    pSelection = "rock";
  } else if (e.target === btnpaper) {
    pSelection = "paper";
  } else if (e.target === btnscissors) {
    pSelection = "scissors";
  }

  computerPlay();
  roundPlay(pSelection, cSelection);
}

let comment = document.querySelector(".comment");
let pHand = document.querySelector(".phand");
let cHand = document.querySelector(".chand");
let pScore = document.querySelector(".pscore");
let cScore = document.querySelector(".cscore");

let playerScore = 0;
let computerScore = 0;

function roundPlay(playerSelection, computerSelection) {
  const computerHand = computerSelection;
  const playerHand = playerSelection;

  pHand.textContent =
    "Your pick: " + playerHand[0].toUpperCase() + playerHand.slice(1);
  cHand.textContent =
    "Computer's pick: " + computerHand[0].toUpperCase() + computerHand.slice(1);

  if (playerHand === "rock" && computerHand === "rock") {
    comment.textContent = `"Rock" and "Rock", it's a draw.`;
  } else if (playerHand === "rock" && computerHand === "paper") {
    comment.textContent = `"Paper" beats "Rock", you lost.`;
    computerScore += 1;
    cScore.textContent = "Opponent's Score: " + computerScore;
  } else if (playerHand === "rock" && computerHand === "scissors") {
    comment.textContent = `"Rock" beats "Scissors", you won!`;
    playerScore += 1;
    pScore.textContent = "Your Score: " + playerScore;
  } else if (playerHand === "paper" && computerHand === "rock") {
    comment.textContent = `"Paper" beats "Rock", you won!`;
    playerScore += 1;
    pScore.textContent = "Your Score: " + playerScore;
  } else if (playerHand === "paper" && computerHand === "paper") {
    comment.textContent = `"Paper" and "Paper", it's a draw.`;
  } else if (playerHand === "paper" && computerHand === "scissors") {
    comment.textContent = `"Scissors" beat "Paper", you lost.`;
    computerScore += 1;
    cScore.textContent = "Opponent's Score: " + computerScore;
  } else if (playerHand === "scissors" && computerHand === "rock") {
    comment.textContent = `"Rock" beats "Scissors", you lost.`;
    computerScore += 1;
    cScore.textContent = "Opponent's Score: " + computerScore;
  } else if (playerHand === "scissors" && computerHand === "paper") {
    comment.textContent = `"Scissors" beat "Paper", you won!`;
    playerScore += 1;
    pScore.textContent = "Your Score: " + playerScore;
  } else if (playerHand === "scissors" && computerHand === "scissors") {
    comment.textContent = `"Scissors" and "Scissors", it's a draw.`;
  }

  console.log(playerScore);
  console.log(computerScore);

  if (playerScore === 5) {
    comment.textContent = "Congratulations, you achieved total victory!";
  } else if (computerScore === 5) {
    comment.textContent = "Unfortunately, you suffered total defeat!";
  }

  if (playerScore === 5 || computerScore === 5) {
    let restartbtn = document.createElement("button");
    restartbtn.innerHTML = "Restart";
    document.body.appendChild(restartbtn);

    let rbutton = document.querySelector("#btnrock");
    rbutton.disabled = true;
    let pbutton = document.querySelector("#btnpaper");
    pbutton.disabled = true;
    let sbutton = document.querySelector("#btnscissors");
    sbutton.disabled = true;

    restartbtn.addEventListener("click", restartGame);
    function restartGame() {
      computerScore = 0;
      playerScore = 0;

      comment.textContent = `Best of 5! Choose wisely!`;
      cScore.textContent = "Opponent's Score: " + computerScore;
      pScore.textContent = "Your Score: " + playerScore;

      rbutton.disabled = false;
      pbutton.disabled = false;
      sbutton.disabled = false;

      restartbtn.parentNode.removeChild(restartbtn);
    }
  }
}
