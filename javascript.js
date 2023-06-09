function getComputerChoice () {
    
let random = ["Rock", "Paper", "Scissors"]
return random[Math.floor(Math.random()*random.length)]

}



let computerScore = 0;
let playerScore = 0;
const Rock = document.getElementById("Rock");
const Paper = document.getElementById("Paper");
const Scissors = document.getElementById("Scissors");

Rock.addEventListener("click", playRound);
Paper.addEventListener("click", playRound);
Scissors.addEventListener("click", playRound);

document.querySelector('.player').textContent += `Player: ${playerScore}`;
document.querySelector('.computer').textContent += `Computer: ${computerScore}`;

function score () {

    if (playerScore === 5) {
        alert("You won! You must have played before...");
        playerScore = 0;
        computerScore = 0;
    }
    
    if (computerScore === 5) {
        alert("You lose! I guess you need some practice");
        playerScore = 0;
        computerScore = 0;
    }

    document.querySelector('.player').textContent += `Player: ${playerScore}`;
    document.querySelector('.computer').textContent += `Computer: ${computerScore}`;

}

function playRound () {


     
    let computerSelection = getComputerChoice();
        if (computerSelection === this.id) {
            document.getElementById("results").innerHTML = `Draw! You both chose ${computerSelection}`;
        } else if (loseCondition(computerSelection,this.id)) {
            computerScore++;
            document.getElementById("results").innerHTML = `You lose! ${computerSelection} beats ${this.id}!`;
            
        } else if (winCondition(computerSelection,this.id)) {
            document.getElementById("results").innerHTML = `You win! ${this.id} beats ${computerSelection}!`;
            playerScore++;
        }

      
score()
    
}

function loseCondition (computerSelection,playerSelection) {
    if (computerSelection === "Scissors" && playerSelection === "Paper" || computerSelection === "Paper" && playerSelection === "Rock" || computerSelection === "Rock" && playerSelection === "Scissors") {
        return true
    }
}

function winCondition (computerSelection,playerSelection) {
    if (computerSelection === "Paper" && playerSelection === "Scissors" || computerSelection === "Rock" && playerSelection === "Paper" || computerSelection === "Scissors" && playerSelection === "Rock") {
        return true
    }
}

