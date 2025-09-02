let score = JSON.parse(localStorage.getItem("score")) || {
  // tied: current} // lose: current // win: current // score = {
  win: 0,
  lose: 0,
  tied: 0,
};

document.querySelector(
  ".display-Score"
).innerText = `Wins: ${score.win} Lose: ${score.lose} Ties: ${score.tied}`;

/*if (!score) {
        score = {
          win: 0,
          lose: 0,
          tied: 0,
        };
      } */

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose.";
    } else if (computerMove === "paper") {
      result = "You win.";
    } else if (computerMove === "scissors") {
      result = "Tie.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "You lose.";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You lose.";
    } else if (computerMove === "scissors") {
      result = "You win.";
    }
  }
  if (result === "You win.") {
    score.win += 1;
  } else if (result === "You lose.") {
    score.lose += 1;
  } else if (result === "Tie.") {
    score.tied += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector(".display-Result").innerText = result;

  document.querySelector(".display-Move").innerHTML = `You
      <img src="Photo/${playerMove}-emoji.png" alt="" />
      <img src="Photo/${computerMove}-emoji.png" alt="" />
      Computer`;

  document.querySelector(
    ".display-Score"
  ).innerText = `Win: ${score.win} Lose: ${score.lose} Tied: ${score.tied}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber <= 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber <= 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber <= 1) {
    computerMove = "scissors";
  }

  return computerMove;
}

function Reset() {
  localStorage.removeItem("score");
  console.log(
    (document.querySelector(
      ".display-Score"
    ).innerText = `Win: ${(score.win = 0)} Lose: ${(score.lose = 0)} Tied: ${(score.tied = 0)}`)
  );
}
