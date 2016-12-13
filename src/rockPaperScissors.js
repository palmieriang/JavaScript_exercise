//var userChoice = prompt("Do you choose rock, paper or scissors?");

var computerChoice = Math.floor(Math.random()*3);

if (computerChoice === 1) {
	computerChoice = "rock";
} else if (computerChoice === 2) {
	computerChoice = "paper";
} else if (computerChoice === 3) {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
        return "The result is a tie!";
    } else if(choice1 === "rock") {
        if(choice2 === "scissors") {
            return "rock wins";
        } else {
            return "paper wins";
        }
    } else if(choice1 === "paper") {
        if(choice2 === "rock") {
            return "paper wins";
        } else {
            return "scissors wins";   
        } 
    } else if(choice1 === "scissors") {
        if(choice2 === "rock") {
            return "rock wins";
        } else {
            return "scissors wins";
        }
    }
};

compare(userChoice,computerChoice);	