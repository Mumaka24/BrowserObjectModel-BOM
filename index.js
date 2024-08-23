// Create your game here!
const mainEl = document.querySelector('main');
const userGuessEl = document.getElementById('userGuess');
const guessButtonEl = document.getElementById('guessButton');
const resultEl = document.getElementById('result');
const progressEl = document.getElementById('progress');

// Initialize game variables
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let maxattempts = 10;

//function to update progress
function updateProgress() {
    progressEl.textContent = `Attempts: ${attempts} / ${maxAttempts} /${maxAttemps}`;
    }
   //Function to handle Guess
   function handleGuess() {
    const userGuess = Number(userGuessEl.value);
    attempts++;
    if (userGuess === randomNumber)
    {
        resultEl.textContent = 'Congatulations! You guessed the correct number!';
        resultEl.style.color = 'green';
        guessButtonEl.disabled = true;
    }else if (attempts >= maxAttempts){
        resultsEl.textContent = `Game over! The correct number was ${randomNumber}.`;
        resultEl.style.color = 'red';
        guessButtonEl.disabled = true;
    } else{
        results.textEl.content = userGuess < randomNumber ? 'Too low! : 'Too High!';
        resultEl.style.color = 'orange'; 
    }
    updateProgress();
    }

    // Add event listner to the guess button
    guessButtonEl.addEventListener('click', handleGuess);
    
    //Initialize progress display
     updateProgress();