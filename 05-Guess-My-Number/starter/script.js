'use strict';

/*
//selecting an element in JS: write document.querySelector

// textContetnt property:
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

//to get value selector
console.log(document.querySelector('.guess').value);

//to set value
document.querySelector('.guess').value = 23;
*/

// event listene e.g mouse click mouse moving etc
//add Event listenr is method to listen for event > then pass type of event e.g here it is click and then we tell event listenr what to do,, so we define a function.

//define secret number outside of function
let secretNumber = Math.trunc(Math.random() * 20 + 1);
//reducing score value every time a new number is guessed
let score = 20;
let highscore = '';
//declaring default state after game ends (Clicking again button)
document.querySelector('.again').addEventListener('click', function () {
  score = 20; //reassign score value to 20
  secretNumber = Math.trunc(Math.random() * 20 + 1); //reassign new secret number

  document.querySelector('.message').textContent = 'Start guessing...'; //reassign message to start guessing
  // document.querySelector('.label-score').textContent = '💯 Score:20 ';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.score').textContent = 'score';
  document.querySelector('.guess').value = '';
});

// guessing the correct number logic
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //checking whether number is written inside box
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
    // checking if guess is euqal to secret number
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    score = score - 1; //same as score--
    document.querySelector('.score').textContent = score;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    //Implementing Highscore logic

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //checking when number is greater than secret number
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Your number is too high!';
      score = score - 1; //same as score--
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game.';
      document.querySelector('.score').textContent = 0;
    }
    //checking when number is less than secret number
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Your number is too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game.';
      document.querySelector('.score').textContent = 0;
    }
  }
});
