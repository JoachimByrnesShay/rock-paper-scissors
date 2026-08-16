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
            console.log(`Enter the number of your selection 0, 1, or 2:
0. rock 
1. paper 
2. scissors
`)
        answer = prompt();
        /* if answer is null we cannot call trim() */
        if (answer == null) {
            reportInvalidHumanChoice();
            continue;
        }
        answer = answer.trim();
        /* if answer is empty string or not a valid game selection */
        if (answer == "" || (answer != "0" && answer != "1" && answer != "2")){
            reportInvalidHumanChoice();
            continue;
        }
        console.log(answer);
        break;
    }
    return translateAnswerToGameWord(Number(answer));
}

function showWinnerOfGame() {
    console.log("PLACEHOLDER:   to do--- write the showWinnerOfGame function");
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let round = 1;
    while (round <= 5){
        console.log("round# " + round);
        console.log(`score human: ${humanScore}`);
        console.log(`score computer: ${computerScore}`)
        playRound(getHumanChoice(), getComputerChoice());
        round += 1;
    }
    
    showWinnerOfGame();
    /* todo: revise the else for explicitness */
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
                        console.log("its a tie, so we'll redo the round")
                        round -= 1;
                        break;
                }
            }
    }
}

console.log("ready to start?");
let result = prompt();
if (result.toLowerCase() == "y"){
    playGame();
}



