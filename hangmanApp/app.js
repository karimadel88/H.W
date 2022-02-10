let puzzleElement = document.getElementById('puzzle');
let guessElement = document.getElementById('guesses');
const game1 = new Hangman('Cat',2);

puzzleElement.textContent = game1.getPuzzle();
guessElement.textContent = game1.getStatusMessage();

window.addEventListener('keypress',(e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    puzzleElement.textContent = game1.getPuzzle();
    guessElement.textContent = game1.getStatusMessage();
})