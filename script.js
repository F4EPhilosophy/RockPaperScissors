
//First we ask the user to give us their choice of weapon
let choice = prompt("Choose: Rock/Paper/Scissors")
//Ensures first letter is capital while the rest is lowercase
choice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
//I also want to make sure the user plays fair and check their weapon
if (choice != "Rock" && choice !="Paper" && choice != "Scissors") {
    console.log("Hey lets play fair")
} else {
    console.log(`You picked ${choice}`);
}

//We need to equipt the computer with his weapon.
let computerChoice = Math.floor(Math.random() * 3) + 1;

//We need to assign that 1-3 value to a string for RPS.
if (computerChoice == 1) {
	computerChoice = "Rock"
} else if (computerChoice == 2) {
	computerChoice = "Paper"
} else {
	computerChoice = "Scissors"
}
console.log(`Chad picked ${computerChoice}`)

//Checks to see if you drew with the computer.
if (choice == computerChoice) {
    console.log("Draw!")
} else if (
    (choice == "Rock" && computerChoice == "Scissors") ||
    (choice == "Paper" && computerChoice == "Rock") ||
    (choice == "Scissors" && computerChoice == "Paper")) 
{
    console.log("You won!")
} else {
    console.log("You Lost!")
}



