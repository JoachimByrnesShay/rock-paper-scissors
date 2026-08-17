
function translateAnswerToGameWord(answer) {
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

function getComputerChoice() {
    const LIMIT = 3;
    const index = Math.floor(Math.random() * LIMIT);
    return translateAnswerToGameWord(index);
}

function reportInvalidHumanChoice() {
    console.log("invalid answer: enter only 0, 1, or 2");
}

function getHumanChoice() {
    let answer;
    while (true) {
        console.log("Enter the number of your selection 0, 1, or 2:");
        console.log("0. rock");
        console.log("1. paper");
        console.log("2. scissors");

        answer = prompt();
        /* if answer is null we cannot call trim() */
        if (answer == null) {
            reportInvalidHumanChoice();
            continue;
        }
        answer = answer.trim();
        /* answer is empty string if only enterKey or some "white space characters"+enterKey aretyped, check for this and otherwise check if not a valid game selection */
        if (answer == "" || (answer != "0" && answer != "1" && answer != "2")){
            reportInvalidHumanChoice();
            continue;
        }
        console.log("\n************");
        console.log(`You selected: ${translateAnswerToGameWord(Number(answer))}`);
        break;
    }
    
    return translateAnswerToGameWord(Number(answer));
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let round = 1;
    while (round <= 5){
        console.log("\n************")
        console.log("round# " + round);

        playRound(getHumanChoice(), getComputerChoice());
        round += 1;
    }
    
    showWinnerOfGame();

    function showWinnerOfGame() {
        console.log("\n*********************************");
        console.log("all 5 rounds have been completed!");
        console.log("*********************************\n");
        if (humanScore > computerScore){
            console.log("YOU are the winner.  You beat the computer!");
        } else {
            console.log("THE COMPUTER is the winner.  It beat you.");
        }
        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
    }

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
                        console.log("its a tie, so we'll redo the round");
                        round -= 1;
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
                        console.log("its a tie, so we'll redo the round")
                        round -= 1;
                        break;
                }

            } else { //humanChoice == "sciessors"
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
                        console.log("its a tie, so we'll redo the round")
                        round -= 1;
                        break;
                }
            }
            console.log(`current score human: ${humanScore}`);
            console.log(`current score computer: ${computerScore}`)
    }
}

console.log("ready to start?");
let result = prompt();
if (result.toLowerCase() == "y"){
    playGame();
}



