function getComputerChoice () {
    
let random = ["Rock", "Paper", "Scissors"]
return random[Math.floor(Math.random()*random.length)]

}



let computerScore = 0;
let playerScore = 0;
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener("click", function(){ 
        let computerSelection = getComputerChoice();
        if (computerSelection === "Rock") {
            document.getElementById("results").innerHTML = "Draw! You both chose rock!";
        } else if (computerSelection === "Paper") {
            computerScore++;
            document.getElementById("results").innerHTML = "You lose! Paper beats rock!";
            
        } else if (computerSelection === "Scissors") {
            document.getElementById("results").innerHTML = "You win! Rock beats scissors!";
            playerScore++;
        }

      
score()

    });

paper.addEventListener("click", () => {
        let computerSelection = getComputerChoice();
        if (computerSelection === "Paper") {
            document.getElementById("results").innerHTML = "Draw! You both chose paper!";
        } else if (computerSelection === "Scissors") {
            document.getElementById("results").innerHTML = "You lose! Scissors beats paper!";
            computerScore++;
        } else if (computerSelection === "Rock") {
            document.getElementById("results").innerHTML = "You win! Paper beats rock!";
            playerScore++;
        }

        
score()

    });

scissors.addEventListener("click", () => {
        let computerSelection = getComputerChoice();
        if (computerSelection === "Scissors") {
            document.getElementById("results").innerHTML = "Draw! You both chose scissors!";
        } else if (computerSelection === "Rock") {
            document.getElementById("results").innerHTML = "You lose! Rock beats scissors!";
            computerScore++;
        } else if (computerSelection === "Paper") {
            document.getElementById("results").innerHTML = "You win! scissors beats paper!";
            playerScore++;
        }

        score()

    });

document.getElementById("score").innerHTML = `player:${playerScore} computer:${computerScore}`;

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
    
    document.getElementById("score").innerHTML = `player:${playerScore} computer:${computerScore}`;
    

}

