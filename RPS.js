let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    losses: 0,
    ties: 0
};

function pickComputerMove() {
    let randomNumber = Math.random();
    let computerMove;

    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'Rock';
    } else if(randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = "Paper";
    } else if(randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = "Scissors";
    }

    return computerMove;
}

function playGame(playerMove) {
    computerMove = pickComputerMove();
    let result;

    if(playerMove === 'Rock') {
        if(computerMove === 'Rock') {
            result = "Its a Tie"
        }
        else if(computerMove === 'Scissors') {
            result = 'You Win!';
        }
        else if(computerMove === 'Paper') {
            result = 'You Lose'
        }
    } else if (playerMove === 'Paper') {
        if (computerMove === 'Paper') {
            result = 'Its a Tie';
        } else if (computerMove === 'Scissors') {
            result = 'You Lose';
        } else if (computerMove === 'Rock') {
            result = 'You Win!';
        }

    } else if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
            result = 'You Lose';
        } else if (computerMove === 'Paper') {
            result = 'You Win!';
        } else if (computerMove === 'Scissors') {
            result = 'Its a Tie';
        }
    }

    if (result === 'You Win!') {
        score.wins += 1;
    } else if (result === 'You Lose') {
        score.losses += 1;
    } else if (result === 'Its a Tie') {
        score.ties += 1;
    }

    localStorage.setItem("score", JSON.stringify(score))

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-result-compare').innerHTML = `Your Move: <img src = "./images/${playerMove}.png" width = "40px"> : <img src = "./images/${computerMove}.png" width = "40px"> Computer`;
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}