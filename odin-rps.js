function computerPlay() {
  const number = Math.floor(Math.random() * 3) + 1;
  if (number === 1) {
    return "Rock";
  } else if (number === 2) {
    return "Paper";
  } else if (number === 3) {
    return "Scissors";
  }
}

function roundPlay(playerSelection, computerSelection) {
  const playerHand = playerSelection.toLowerCase();
  const computerHand = computerSelection.toLowerCase();

  if (playerHand === "rock" && computerHand === "rock") {
    return `"Rock" and "Rock", it's a draw.`;
  } else if (playerHand === "rock" && computerHand === "paper") {
    return `"Paper" beats "Rock", you lost.`;
  } else if (playerHand === "rock" && computerHand === "scissors") {
    return `"Rock" beats "Scissors", you won!`;
  } else if (playerHand === "paper" && computerHand === "rock") {
    return `"Paper" beats "Rock", you won!`;
  } else if (playerHand === "paper" && computerHand === "paper") {
    return `"Paper" and "Paper", it's a draw.`;
  } else if (playerHand === "paper" && computerHand === "scissors") {
    return `"Scissors" beat "Paper", you lost.`;
  } else if (playerHand === "scissors" && computerHand === "rock") {
    return `"Rock" beats "Scissors", you lost.`;
  } else if (playerHand === "scissors" && computerHand === "paper") {
    return `"Scissors" beat "Paper", you won!`;
  } else if (playerHand === "scissors" && computerHand === "scissors") {
    return `"Scissors" and "Scissors", it's a draw.`;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let drawScore = 0;
  for (let i = 1; i <= 5; i++) {
    const playerSelection = prompt("Choose Rock, Paper or Scissors.", "Rock");
    if (
      roundPlay(playerSelection, computerPlay()) ===
      `"Rock" beats "Scissors", you won!`
    ) {
      playerScore += 1;
      console.log(`"Rock" beats "Scissors", you won!`);
    } else if (
      roundPlay(playerSelection, computerPlay()) ===
      `"Paper" beats "Rock", you won!`
    ) {
      playerScore += 1;
      console.log(`"Paper" beats "Rock", you won!`);
    } else if (
      roundPlay(playerSelection, computerPlay()) ===
      `"Scissors" beat "Paper", you won!`
    ) {
      playerScore += 1;
      console.log(`"Scissors" beats "Paper", you won!`);
    } else if (
      roundPlay(playerSelection, computerPlay()) ===
      `"Rock" and "Rock", it's a draw.`
    ) {
      drawScore += 1;
      console.log(`"Rock" and "Rock", it's a draw.`);
    } else if (
      roundPlay(playerSelection, computerPlay()) ===
      `"Paper" and "Paper", it's a draw.`
    ) {
      drawScore += 1;
      console.log(`"Paper" and "Paper", it's a draw.`);
    } else if (
      roundPlay(playerSelection, computerPlay()) ===
      `"Scissors" and "Scissors", it's a draw.`
    ) {
      drawScore += 1;
      console.log(`"Scissors" and "Scissors", it's a draw.`);
    } else if (
      roundPlay(playerSelection, computerPlay()) ===
      `"Rock" beats "Scissors", you lost.`
    ) {
      computerScore += 1;
      console.log(`"Rock" beats "Scissors", you lost.`);
    } else if (
      roundPlay(playerSelection, computerPlay()) ===
      `"Paper" beats "Rock", you lost.`
    ) {
      computerScore += 1;
      console.log(`"Paper" beats "Rock", you lost.`);
    } else if (
      roundPlay(playerSelection, computerPlay()) ===
      `"Scissors" beat "Paper", you lost.`
    ) {
      computerScore += 1;
      console.log(`"Scissors" beat "Paper", you lost.`);
    } else {
      i--;
      console.log("Error! Try again!");
    }
    console.log("Player's Score: " + playerScore);
    console.log("Computer's Score: " + computerScore);
    console.log("Rounds Draw: " + drawScore);
    console.log("Rounds Played: " + i);
  }

  if ((i = 5 && playerScore > computerScore)) {
    console.log("Congratulations, you achieved total victory!");
  } else if ((i = 5 && playerScore < computerScore)) {
    console.log("Unfortunately, you suffered total defeat!");
  } else if ((i = 5 && playerScore === computerScore)) {
    console.log("It is a stalemate!");
  }
}

game();
