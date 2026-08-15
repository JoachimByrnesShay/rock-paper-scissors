
/* create function getComputerChoice that randomly returns one of the following values: rock , paper, scissors. do it without an array just because*/

// generate a random floating number between 0 and 1 (exclusive)
// multiply * 3
// calculate the floor of the result, now resulting in the number 0, 1, or 2 
// link each of these values to one of the valid game values  rock, paper, scissors
// return the specific game value assigned to the number returned by the earlier calculations 

function getComputerChoice() {
    const LIMIT = 3;
    const index = Math.floor(Math.random() * LIMIT);
    switch(index) {
        case 0:
            return "rock"
        break;
        case 1:
            return "paper"
        break;
        case 2:
            return "scissors"
        break;
        default:
        break;
    }
}


console.log(getComputerChoice());