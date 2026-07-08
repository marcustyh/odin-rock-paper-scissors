function getComputerChoice(choice){
		return choice
};

let options = ["rock", "paper", "scissors"];

const random = Math.floor(Math.random() * options.length); 

const message = getComputerChoice(options[random]);

console.log(message);
