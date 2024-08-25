// Select and cache DOM elements
const messageEl = document.getElementById('message');
const startButtonEl = document.getElementById('startButton');
const resultEl = document.getElementById('result');
const progressEl = document.getElementById('progress');

// Initialize game variables
let randomNumber;
let attempts = 0;
let maxAttempts = 10;

// Function to start the game
function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    resultEl.textContent = '';
    progressEl.textContent = '';
    messageEl.textContent = 'Guess a number between 1 and 100:';
    getUserGuess();
}

// Function to get user guess
function getUserGuess() {
    const userGuess = parseInt(window.prompt('Enter your guess:'));
    attempts++;
    checkGuess(userGuess);
}

// Function to check the user's guess
function checkGuess(guess) {
    if (guess === randomNumber) {
        resultEl.textContent = 'Congratulations! You guessed the correct number!';
        resultEl.style.color = 'green';
    } else if (attempts >= maxAttempts) {
        resultEl.textContent = `Game over! The correct number was ${randomNumber}.`;
        resultEl.style.color = 'red';
    } else {
        resultEl.textContent = guess < randomNumber ? 'Too low!' : 'Too high!';
        resultEl.style.color = 'orange';
        progressEl.textContent = `Attempts: ${attempts} / ${maxAttempts}`;
        getUserGuess();
    }
}

// Add event listener to the start button
startButtonEl.addEventListener('click', startGame);
