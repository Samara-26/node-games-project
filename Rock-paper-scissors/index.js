// Game win, lose, or draw - all cases
const compChoices = ["rock", "paper", "scissors"];

const processArr = process.argv;
const userInput = processArr.slice(2);

const randomIndex = Math.round(Math.random() * 2);

if (userInput.length !== 1) {
    console.log(`Please enter exactly one of the following: rock, paper, or scissors.`);
    return;
}
const usersMove = userInput[0].trim().toLowerCase();
const compsMove = compChoices[randomIndex];

if (usersMove === compsMove) {
    console.log(`You chose: ${usersMove}. Computer chose: ${compsMove}. It's a draw!`);
    return;
}
switch(usersMove){
    case "rock":
        if(compsMove === "paper"){
            console.log(`You chose: ${usersMove}. Computer chose: ${compsMove}. You lost!`);
            return;
        } else if(compsMove === "scissors"){
            console.log(`You chose: ${usersMove}. Computer chose: ${compsMove}. You won!`);
            return;
        }
    break;
    case "paper": 
        if(compsMove === "scissors"){
            console.log(`You chose: ${usersMove}. Computer chose: ${compsMove}. You lost!`);
            return;
        } else if(compsMove === "rock"){
            console.log(`You chose: ${usersMove}. Computer chose: ${compsMove}. You won!`);
            return;
        }
    break;
    case "scissors": 
        if(compsMove === "rock"){
            console.log(`You chose: ${usersMove}. Computer chose: ${compsMove}. You lost!`);
            return;
        } else if(compsMove === "paper"){
            console.log(`You chose: ${usersMove}. Computer chose: ${compsMove}. You won!`);
            return;
        }
    break;
}