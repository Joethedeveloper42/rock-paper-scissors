let playerScore = 0;
let computerScore = 0;
let playerScore_span = document.getElementById('user-score');
let computerScore_span = document.getElementById('computer-score');
const scoreplace_div = document.querySelector('.score-place');
const rock_div = document.getElementById('ro');
const paper_div = document.getElementById('pa');
const scissors_div = document.getElementById('sc');
const result_p = document.querySelector('.result > p');

let playerSelection;

function wordExchange(letters) {

    if (letters === 'sc') return 'Scissors';
    if (letters === 'pa') return 'Paper';
    return 'Rock';
}

function win(playerSelection, computerMove) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${wordExchange(
        playerSelection
    )} destroys ${wordExchange(computerMove)} You are the winner!`;
}

function lose(playerSelection, computerMove) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    playerScore_span.innerHTML = playerScore;
    result_p.innerHTML = `${wordExchange(
        computerMove
    )} destroys ${wordExchange(playerSelection)} You are the loser!`;
}

function draw(playerSelection, computerMove) {
    computerScore_span.innerHTML = computerScore;
    playerScore_span.innerHTML = playerScore;
    result_p.innerHTML = `${wordExchange(
        computerMove
    )} matches ${wordExchange(playerSelection)} draw!`;
}


function compChoice() {
    let computerMove;
    const words = ['ro', 'pa', 'sc'];
    computerMove = words[Math.floor(Math.random() * 3)];
    return computerMove;
}

function game(playerSelection) {
    let computerMove = compChoice();
    // Left the console logs in below as its easier to see whats going on whilst developing
    // you can remove whenever 👍
    console.log("playerSelection:", playerSelection)
    console.log("computerMove:", computerMove)
    switch (playerSelection + computerMove) {
        case 'paro':
        case 'rosc':
        case 'scpa':
            win(playerSelection, computerMove);
            break;
        case 'ropa':
        case 'pasc':
        case 'scro':
            lose(playerSelection, computerMove);
            break;
        case 'roro':
        case 'papa':
        case 'scsc':
            draw(playerSelection, computerMove);
            break;
        default:
            console.log("it's fudged mate");
    }
}

function main() {
    rock_div.addEventListener(
        'click',
        function () {
            game('ro');
        }
    );

    paper_div.addEventListener(
        'click',
        function () {
            game('pa');
        }
    );

    scissors_div.addEventListener(
        'click',
        function () {
            game('sc');
        }
    );
}

main();

// game(playerSelection, computerSelection);
// wordExchange(playerSelection, computerSelection);
// win(playerScore, computerScore);
// lose(computerScore, playerScore);
