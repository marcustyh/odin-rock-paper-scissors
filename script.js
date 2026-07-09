// Function to get the computer to select 
// either "rock", "paper", or "scissors at random"

function getComputerChoice(){
		const options = ["rock", "paper", "scissors"];
		const random = Math.floor(Math.random() * options.length); 
		return options[random];
};

const computerChoice = getComputerChoice();

console.log(computerChoice);

// Function to get user input of either 
// "rock", "paper", or "scissors"

function getHumanChoice(){
		const selection = window.prompt("rock, paper, or scissors bitch?").toLowerCase();
		return selection;
};


const humanChoice = getHumanChoice();

console.log(humanChoice)
