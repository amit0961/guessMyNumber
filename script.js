'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1; // declare random Math.random() ->returns decimal Math.trunck() retrurns Full number

let score = 20;
let highScore = 0;
//======= Refactoring message ======+
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        // document.querySelector('.message').textContent = '⛔ Select a Number!';
        displayMessage('⛔ Select a Number!');
    } else if (guess === secretNumber) {
        /*======  When the player wins  =====*/

        document.querySelector('.number').textContent = secretNumber;
        // document.querySelector('.message').textContent = '🎉 Correct Number!';
        displayMessage('🎉 Correct Number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        //Highscore
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guess != secretNumber) {
        /*======  When the guess number is wrong  =====*/
        if (score > 1) {
            // document.querySelector('.message').textContent =
            //     guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
            displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Lost the Game';
            // score--;
            document.querySelector('.score').textContent = 0;
        }
    }
    // else if (guess > secretNumber) {
    //     /*===== Guess is too high =====*/
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too High!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You Lost the Game';
    //         // score--;
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
    // else if (guess < secretNumber) {
    //     /*====== Guess is too low ======*/
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too Low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You Lost the Game';
    //         // score--;
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');

    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});