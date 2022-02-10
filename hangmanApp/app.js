let puzzleElement = document.getElementById('puzzle');
let guessElement = document.getElementById('guesses');
const game1 = new Hangman('car partner',2);

puzzleElement.textContent = game1.puzzle;
guessElement.textContent = game1.statusMessage;

window.addEventListener('keypress',(e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    puzzleElement.textContent = game1.puzzle;
    guessElement.textContent = game1.statusMessage;
})