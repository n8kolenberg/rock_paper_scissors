

var userChoice = prompt("Rock, Paper or Scissors?").toLowerCase();

var rock = "rock";
var paper = "paper";
var scissors = "scissors";

var rpsArray = [rock, paper, scissors];

var ourChoice = rpsArray[Math.floor(Math.random() * rpsArray.length)];


function userChoiceValidator() {
	if (rpsArray.indexOf(userChoice) === -1) {
		return false;
	} else return true;
} // end validator function

function RPS(){
	while (!userChoiceValidator()) {
		userChoice = prompt("Come on now... Just Rock, Paper, or Scissors please..").toLowerCase();
	}
	if(userChoiceValidator() && userChoice === ourChoice) {
		alert("We both chose " + ourChoice + "\nRefresh the page to play again?");
	} else if (userChoiceValidator() && (userChoice === paper && ourChoice === rock) || (userChoice === scissors && ourChoice === paper)) {
		alert("Darn... I lost. I chose " + ourChoice + "\nRefresh the page to play again?");
	} else if (userChoiceValidator() && (userChoice === paper && ourChoice === scissors) || (userChoice === scissors && ourChoice === rock)) {
		alert("HA! I win. I chose " + ourChoice + "\nRefresh the page to play again?");
	} else if (userChoiceValidator() && userChoice === rock && ourChoice === paper) {
		alert("HA! I win. I chose " + ourChoice + "\nRefresh the page to play again?");
	} else alert("Dammit... I lost. I chose " + ourChoice + "\nRefresh the page to play again?");

} // end RPS function

RPS();

