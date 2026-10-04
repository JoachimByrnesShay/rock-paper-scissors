let playerScore = 0;
let computerScore = 0;
let round = 1;
const CHOICES = ["rock", "paper", "scissors" ];

function getComputerSelection() {
    const LIMIT = 3;
    const index = Math.floor(Math.random() * LIMIT);
    return CHOICES[index];
}


function createUI() {
    CHOICES.forEach(item => {
        const button = document.createElement("button");
        button.textContent = item;

        button.addEventListener("click", e => {
            playRound(e.target.textContent);
        })

        document.body.append(button);
    })
}

function playRound(playerSelection){

            const computerSelection = getComputerSelection();
            
            if (playerSelection == "rock"){
                switch(computerSelection) {
                    case "scissors":
                        playerScore+=1;
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

            } else if (playerSelection== "paper"){
                switch(computerSelection) {
                    case "rock":
                        playerScore+=1;
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

            } else { //playerSelection == "sciessors"
                switch(computerSelection){
                    case "paper":
                        playerScore+=1;
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
            console.log(`current score human: ${playerScore}`);
            console.log(`current score computer: ${computerScore}`)
    }


function playGame(){

      createUI();
    // while (round <= 5){
    //     console.log("\n************")
    //     console.log("round# " + round);

    //     round += 1;
    // }
    
    // showWinnerOfGame();

    // function showWinnerOfGame() {
    //     console.log("\n*********************************");
    //     console.log("all 5 rounds have been completed!");
    //     console.log("*********************************\n");
    //     if (playerScore > computerScore){
    //         console.log("YOU are the winner.  You beat the computer!");
    //     } else {
    //         console.log("THE COMPUTER is the winner.  It beat you.");
    //     }
    //     console.log(`Your score: ${playerScore}`);
    //     console.log(`Computer score: ${computerScore}`);
    // }    
}


playGame();
