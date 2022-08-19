const HangMan = function (word, remainingGuesses) {
  this.word = word.toLowerCase().split("");
  this.remainingGuesses = remainingGuesses;
  this.guessedLetters = [];
};

HangMan.prototype.getPuzzle = function (guessedLetter) {
  this.guessedLetters.push(guessedLetter);
  let puzzle = "";
  this.word.forEach((letter) => {
    if (this.guessedLetters.includes(letter) || letter === " ") {
      puzzle += letter;
    } else {
      puzzle += "*";
    }
  });
  this.remainingGuesses -= 1;
  console.log(`You have ${this.remainingGuesses} remaining guesses`);
  return puzzle;
};

const firstGame = new HangMan("Cat", 2);
console.log(firstGame.getPuzzle("a"));

const secondGame = new HangMan("New Jersey", 4);
console.log(secondGame.getPuzzle("e"));
console.log(secondGame.getPuzzle("j"));
