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

    const resultDiv = document.createElement("div");
    resultDiv.classList.add("results");
    document.body.append(resultDiv);
}

function displayResult(msg) {
    const resultDiv = document.querySelector(".results");
    const p = document.createElement("p");
    p.textContent = msg;
    resultDiv.append(p);
}

function playRound(playerSelection){

            const computerSelection = getComputerSelection();

            // deliberately not using a dictionary/hash in order 
            // to keep within the spirit of the progression here.
            
            if (playerSelection == "rock"){
                switch(computerSelection) {
                    case "scissors":
                        playerScore+=1;
                        displayResult("You win! Rock beats scissors!");
                        break;
                    case "paper":
                        computerScore+=1;
                        displayResult("You lose. Paper beats rock.");
                        break;
                    default:
                        displayResult("its a tie, so we'll redo the round");
                        round -= 1;
                        break;
                }

            } else if (playerSelection== "paper"){
                switch(computerSelection) {
                    case "rock":
                        playerScore+=1;
                        displayResult("You win! Paper beats rock.");
                        break;
                    case "scissors":
                        computerScore+=1;
                        displayResult("You lose. Scissors beats paper.")
                        break;
                    default:
                        displayResult("its a tie, so we'll redo the round")
                        round -= 1;
                        break;
                }

            } else { //playerSelection == "sciessors"
                switch(computerSelection){
                    case "paper":
                        playerScore+=1;
                        displayResult("You win! Scissors beats paper.")
                        break;
                    case "rock":
                        computerScore+=1;
                        displayResult("You lose. Rock beats scissors.");
                        break;
                    default:
                        displayResult("its a tie, so we'll redo the round")
                        round -= 1;
                        break;
                }
            }
            displayResult(`current score human: ${playerScore}`);
            displayResult(`current score computer: ${computerScore}`)
    }


function playGame(){

      createUI();
    // while (round <= 5){
    //     displayResult("\n************")
    //     displayResult("round# " + round);

    //     round += 1;
    // }
    
    // showWinnerOfGame();

    // function showWinnerOfGame() {
    //     displayResult("\n*********************************");
    //     displayResult("all 5 rounds have been completed!");
    //     displayResult("*********************************\n");
    //     if (playerScore > computerScore){
    //         displayResult("YOU are the winner.  You beat the computer!");
    //     } else {
    //         displayResult("THE COMPUTER is the winner.  It beat you.");
    //     }
    //     displayResult(`Your score: ${playerScore}`);
    //     displayResult(`Computer score: ${computerScore}`);
    // }    
}


playGame();
