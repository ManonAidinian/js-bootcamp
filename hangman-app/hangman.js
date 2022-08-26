class HangMan {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split("");
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
    this.status = "playing";
  }

  calculateStatus() {
    let finished = true;
    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter)) {
      } else {
        finished = false;
      }
    });
    if (this.remainingGuesses === 0) {
      this.status = "failed";
    } else if (finished) {
      this.status = "finished";
    } else {
      this.status = "playing";
    }
  }

  getStatusMessage() {
    if (this.status === "playing") {
      return `Guesses left: ${this.remainingGuesses}`;
    } else if (this.status === "failed") {
      return `Nice try, the word was "${this.word.join("")}"`;
    } else {
      return `Great work! You guessed the word`;
    }
  }

  getPuzzle() {
    let puzzle = "";
    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter) || letter === " ") {
        puzzle += letter;
      } else {
        puzzle += "*";
      }
    });
    return puzzle;
  }

  makeGuess(guessedLetter) {
    guessedLetter = guessedLetter.toLowerCase();
    const exist = this.guessedLetters.includes(guessedLetter);
    if (this.status !== "playing") {
      return;
    }
    if (!exist) {
      this.guessedLetters.push(guessedLetter);
    }
    if (!exist && !this.word.includes(guessedLetter)) {
      this.remainingGuesses--;
    }
    this.calculateStatus();
  }
}
