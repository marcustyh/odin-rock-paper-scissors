// Function to get the computer to select 
// either "rock", "paper", or "scissors at random"

function getComputerChoice(){
		const options = ["rock", "paper", "scissors"];
		const random = Math.floor(Math.random() * options.length); 
		return options[random];
};

// const computerChoice = getComputerChoice();

// console.log(computerChoice);

// Function to get user input of either 
// "rock", "paper", or "scissors"

function getHumanChoice(){
		const selection = window.prompt("rock, paper, or scissors bitch?").toLowerCase();
		return selection;
};


// const humanChoice = getHumanChoice();

// console.log(humanChoice)
function playGame() {
	let humanScore = 0;
	let computerScore =0;

	function playRound(humanChoice, computerChoice) {
	    if (humanChoice === computerChoice) {
    	    console.log("It's a tie!");
    	} else if (
        	(humanChoice === "rock" && computerChoice === "scissors") ||
        	(humanChoice === "paper" && computerChoice === "rock") ||
        	(humanChoice === "scissors" && computerChoice === "paper")
   	 ) {
     	   humanScore++;
			console.log("You win this round!");
    	} else {
        	computerScore++;
			console.log("Computer wins this round!");
    	}
		console.log("Human:", humanChoice);
		console.log("Computer:", computerChoice);
    	//console.log(humanScore, computerScore);
        console.log(`Score: You ${humanScore} - ${computerScore} Computer`);
        console.log("---------------------");
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore > computerScore) {
        console.log("You win");
    } else if (computerScore > humanScore) {
        console.log("Computer wins");
    } else {
        console.log("Tie!");
    }
}

playGame();
