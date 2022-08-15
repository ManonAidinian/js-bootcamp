const HangMan = function (word, guesses) {
  this.word = word.toLowerCase().split("");
  this.guesses = guesses;
};

HangMan.prototype.getPuzzle = function (guessedLetters) {
  guessedLetters.forEach((guessedLetter) => {
    this.word.forEach((letter) => {
      return letter === guessedLetter ? letter : "*";
    });
  });
};

const firstGame = new HangMan("pAtate", 10);
const secondGame = new HangMan("irony", 8);

console.log(firstGame.getPuzzle(["a"]));
console.log(secondGame.getPuzzle(["i"]));
