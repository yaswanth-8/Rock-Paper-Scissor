const choices = document.querySelectorAll('.choices button');
const result = document.getElementById('result');
var playerChoiceElement = document.getElementById("player-choice");
var ComputerChoiceElement = document.getElementById("computer-choice");
var showImageButton = document.getElementById('show-image-button');
var playerChoiceImage = document.getElementById('player-choice');
var CPUChoiceImage = document.getElementById('computer-choice');

let playerScore = 0;
let computerScore = 0;

choices.forEach(choice => {
  choice.addEventListener('click', playGame);
});

function playGame(e) {
  const playerChoice = e.target.id;
  playerChoiceElement.src=`./assets/images/${playerChoice}.jpg`;
  const computerChoice = getComputerChoice();
  ComputerChoiceElement.src= `./assets/images/${computerChoice}.jpg`
  playerChoiceImage.classList.remove('display');
  CPUChoiceImage.classList.remove('display');
  const winner = getWinner(playerChoice, computerChoice);

  showResult(playerChoice, computerChoice, winner);
}

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getWinner(player, computer) {
  if (player === computer) {
    return 'It\'s a tie!';
  } else if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    playerScore++;
    return 'You win!';
  } else {
    computerScore++;
    return 'Computer wins!';
  }
}

function showResult(playerChoice, computerChoice, winner) {
  result.innerHTML = `
    <p>You chose ${playerChoice}</p>
    <p>Computer chose ${computerChoice}</p>
    <p>${winner}</p>
    <p>Player: ${playerScore}</p>
    <p>Computer: ${computerScore}</p>
  `;
}

showImageButton.addEventListener('click', function() {
  showImageButton.style.display='none';
  
});