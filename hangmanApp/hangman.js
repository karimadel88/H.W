"use strict";

class Hangman {
  // Constructor
    constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
    this.status = 'playing';
  }
   // Caculate status
  calculateStatus() {
    const finished = this.word.every(letter => this.guessedLetters.includes(letter));

    if (this.remainingGuesses === 0) {
      this.status = 'failed';
    } else if (finished) {
      this.status = 'finished';
    } else {
      this.status = 'playing';
    }
  } 
  // Message of status
  getStatusMessage() {
    if (this.status === 'playing') {
      return `Guesses left: ${this.remainingGuesses}`;
    } else if (this.status === 'failed') {
      return `Nice try! The word was "${this.word.join('')}".`;
    } else {
      return 'Great work! You guessed the work.';
    }
  }
  // getPuzzle
  getPuzzle() {
    let puzzle = '';
    this.word.forEach(letter => {
      if (this.guessedLetters.includes(letter) || letter === ' ') {
        puzzle += letter;
      } else {
        puzzle += '*';
      }
    });
    return puzzle;
  } 
  // Make Guess and checl letter is valid or not
  makeGuess(guess) {
    guess = guess.toLowerCase();
    const isUnique = !this.guessedLetters.includes(guess);
    const isBadGuess = !this.word.includes(guess);

    if (this.status !== 'playing') {
      return;
    }

    if (isUnique) {
      this.guessedLetters.push(guess);
    }

    if (isBadGuess && isUnique) {
      this.remainingGuesses--;
    }

    this.calculateStatus();
  }

}