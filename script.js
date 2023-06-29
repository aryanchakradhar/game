const play = document.getElementById('status-head');
const rock = document.getElementById('rock-button');
const paper = document.getElementById('paper-button');
const scissors = document.getElementById('scissors-button');
const displayMessage = document.querySelector('.move-display');

const moveList = ['Rock', 'Paper', 'Scissors'];

let winMsg = "You won";
let loseMsg = "You lost";
let draw = "Draw!!";

rock.addEventListener("click", () => startGame(moveList[0]));
paper.addEventListener("click", () => startGame(moveList[1]));
scissors.addEventListener("click", () => startGame(moveList[2]));

function randomMove() {
  return moveList[Math.floor(Math.random() * moveList.length)];
}

function startGame(playerChoice) {
  const computerChoice = randomMove();
  displayMessage.children[0].textContent = `PLAYER: ${playerChoice}`;
  displayMessage.children[1].textContent = `COMPUTER: ${computerChoice}`;
  const result = calResult(playerChoice, computerChoice);
  play.textContent = result;

  if (result === winMsg || result === loseMsg || result === draw) {
    rock.style.display = "none";
    scissors.style.display = "none";
    paper.textContent = "Play Once More";
    paper.removeEventListener('click', startGame);
    paper.addEventListener('click', playAgain);
  }
}

function calResult(move1, move2) {
  if (move1 === move2) {
    return draw;
  } else if (
    (move1 === moveList[0] && move2 === moveList[2]) ||
    (move1 === moveList[1] && move2 === moveList[0]) ||
    (move1 === moveList[2] && move2 === moveList[1])
  ) {
    return winMsg;
  } else {
    return loseMsg;
  }
}

function playAgain() {
  rock.style.display = "inline-block";
  scissors.style.display = "inline-block";
  paper.textContent = "Paper";
  play.textContent = "Let's Play";
  displayMessage.children[0].textContent = '';
  displayMessage.children[1].textContent = '';
  paper.removeEventListener('click', playAgain);
  paper.addEventListener('click', startGame);
}