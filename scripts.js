let humanScore = 0;
let computerScore = 0;

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

/* create function getHumanChoice which obtains human inputted choice via prompt method */
/* refactor by breaking out the common switch logic later */
function getHumanChoice() {
    console.log(`Enter the number of your selection 0, 1, or 2:
0. rock 
1. paper 
2. scissors
`);
   const answer = Number(prompt().trim());
   switch(answer) {
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

/* 

Rock beats scissors and loses to paper.
Paper beats rock, but loses to scissors
Scissors beat paper but loses to rock
*/

/*
computer human vs computer choices 
if human choose rock:
    if computer choose scissors:
        human wins 
    else if computer choose paper:
        human loses, computer wins
    else tie 
if human choose paper:
    if computer choose rock:
        human wins
    if computer choose scissors:
        human loses, computer wins
    else:
        tie 
if human choose scissors:
    if computer choose paper:
         human wins 
    if computer choose rock:
         human loses, computer wins
    else:
       tie
*/
function playRound(humanChoice, computerChoice){

    if (humanChoice == "rock"){
        switch(computerChoice) {
            case "scissors":
                humanScore+=1;
                console.log("You win! Rock beats scissors!");
                break;
            case "paper":
                computerScore+=1;
                console.log("You lose. Paper beats rock.");
                break;
            default:
                console.log("its a tie");
                break;
        }

    } else if (humanChoice == "paper"){
        switch(computerChoice) {
            case "rock":
                humanScore+=1;
                console.log("You win! Paper beats rock.");
                break;
            case "scissors":
                computerScore+=1;
                console.log("You lose. Scissors beats paper.")
                break;
            default:
                console.log("its a tie")
                break;
        }

    } else /* scissors */{
        switch(computerChoice){
            case "paper":
                humanScore+=1;
                console.log("You win! Scissors beats paper.")
                break;
            case "rock":
                computerScore+=1;
                console.log("You lose. Rock beats scissors.");
                break;
            default:
                console.log("its a tie")
                break;
        }
    }

}

playRound(getHumanChoice(), getComputerChoice());
console.log(humanScore)
console.log(computerScore)