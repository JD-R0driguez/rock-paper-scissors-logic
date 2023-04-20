
let playerScore = 0;
let computerScore = 0;

// Returns a random choice of rock, paper, or scissors for the computer
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function playRound(computerChoice, playerChoice){
    if (playerChoice === computerChoice){
        return `${playerChoice} vs ${computerChoice} it is a tie`;
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors")||
        (playerChoice === "paper" && computerChoice === "rock")||
        (playerChoice === "scissors" && computerChoice === "paper")
    ){
        playerScore +=1;
        return `You win! ${playerChoice} beats ${computerChoice}`;
    } else {
        computerScore += 1;
        return `You lose! ${computerChoice} beats ${playerChoice}`;            
    }
}

// Play four rounds of rock, paper, scissors
for (let i = 0; i < 4; i++) {
    const playerChoice = prompt('Enter your choice (rock/paper/scissors)').toLowerCase();
    if (['rock', 'paper', 'scissors'].includes(playerChoice)) {
      const computerChoice = getComputerChoice();
      const message = playRound(playerChoice, computerChoice);
      alert(`${message}\nPlayer Score: ${playerScore}\nComputer Score: ${computerScore}`);
    } else {
      alert('Invalid choice! Please choose either rock, paper, or scissors.');
      i--;
    }
  }
  









