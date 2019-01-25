const buttons = document.querySelectorAll("button")
const results = document.querySelector("results")
var playerPoints = 0
var computerPoints = 0



buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playRound(button.id, computerPlay());
    })
});

function computerPlay() {
    var num = Math.floor(Math.random() * 3)
    if (num == 0){ return 'Rock' }
    else if (num == 1){ return 'Paper' }
    else { return 'Scissors'} 
}

function updateScore(result) {
    console.log('here')
    if (result.includes("Win")) {
        playerPoints += 1
    }
    else {
        computerPoints += 1
    }
    console.log(document.getElementById("p1"));
    document.getElementById("p1").innerHTML = playerPoints;
    document.getElementById("c1").innerHTML = computerPoints;

    if (playerPoints == 5 || computerPoints == 5) {
        if (playerPoints > computerPoints) { 
            alert("Player wins!");
        }
        else {
            alert("Computer wins!");
        }
    }
    // console.log('score (Player, Computer): ' + playerPoints + ', ' + computerPoints);
}

function playRound(playerSelection, computerSelection){
    // console.log(playerSelection);
    var pS = playerSelection.toLowerCase()
    var cS = computerSelection.toLowerCase()
    if (pS == 'rock' && cS == 'scissors') { 
        updateScore('You Win! Rock beats Scissors!');
    }
    else if (pS == 'rock' && cS == 'paper') {
        updateScore('You Lose! Paper beats Rock!');
    }
    else if (pS == 'rock' && cS == 'rock') {
        updateScore('Tied! Rock and Rock!');
    }
    // paper
    else if (pS == 'paper' && cS == 'scissors') { 
        updateScore('You Lose! Scissors beats Paper!');
    }
    else if (pS == 'paper' && cS == 'paper') {
        updateScore('Tie! Paper and Paper!');
    }
    else if (pS == 'paper' && cS == 'rock') {
        updateScore('You Win! Paper beats Rock!');
    }
    // scissors
    else if (pS == 'scissors' && cS == 'paper') { 
        updateScore('You Win! Scissors beats Paper!');
    }
    else if (pS == 'scissors' && cS == 'scissors') {
        updateScore('Tie! Scissors and Scissors!');
    }
    else if (pS == 'scissors' && cS == 'rock') {
        updateScore('You Lose! Rock beats Scissors!');
    }
}

if (!String.prototype.includes) {
    String.prototype.includes = function() {
        'use strict';
        return String.prototype.indexOf.apply(this, arguments) !== -1;
    };
}


// function game() {


// }
// window.onload = game;
