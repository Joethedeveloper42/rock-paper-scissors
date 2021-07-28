let playerScore = 0;
let computerScore = 0;
let playerScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
const scoreplace_div = document.querySelector(".score-place");
const rock_div = document.getElementById("ro");
const paper_div = document.getElementById("pa");
const scissors_div = document.getElementById("sc");
const result_p = document.querySelector(".result > p");

function wordExchange (letters) {
    if (letters === "sc") return "Scissors";
    if (letters === "pa") return "Paper";
    return "Rock";
}


function win (player, computer) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML =`${wordExchange(playerSelection)} destroys! ${wordExchange(computerSelection)} You are the winner!`;
}

function lose (computer, player) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    playerScore_span.innerHTML = playerScore;
    result_p.innerHTML =`${wordExchange(computerSelection)} destroys! ${wordExchange(playerSelection)} You are the loser!`;

}

function draw (player, computer) {
    computerScore_span.innerHTML = computerScore;
    playerScore_span.innerHTML = playerScore;
    result_p.innerHTML =`${wordExchange(computerSelection)} matches ${wordExchange(playerSelection)} draw!`;

}
let playerSelection;
let computerSelection;

function compChoice () {
let computerMove;
const words = ["ro", "pa", "sc"];
computerMove = words[Math.floor(Math.random() * 3)];
return computerMove;
}

function game (playerSelection, computerSelection){
let computerMove = compChoice();
switch(playerSelection + computerMove) {
    case "paro":
    case "rosc":
    case "scpa":
        win();
        break;
    case "ropa":
    case "pasc":
    case "scro":
        lose();
        break;
    case "roro":
    case "papa":
    case "scsc":
        draw();
        break;
        default:
            console.log("it's fudged mate");
}
}



function main () {
    rock_div.addEventListener('click', function(playerSelection, computerSelection) {
    
    game("ro");  
    
})

    paper_div.addEventListener('click', function(playerSelection, computerSelection) {
    
        game("pa");  
    
})

    scissors_div.addEventListener('click', function(playerSelection, computerSelection) {
    
        game("sc");    

})
}

main(playerSelection, computerSelection);

game(playerSelection, computerSelection);
wordExchange(playerSelection, computerSelection);
win(playerScore, computerScore);
lose(computerScore, playerScore);

