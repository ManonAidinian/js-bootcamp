const firstGame = new HangMan("Cat", 2);
const puzzleElement = document.querySelector("#puzzle");
const guessesElement = document.querySelector("#guesses");

puzzleElement.textContent = firstGame.getPuzzle();
guessesElement.textContent = `You have ${firstGame.remainingGuesses} remaining guesses`;
console.log(firstGame.status);

window.addEventListener("keypress", function (event) {
  const guess = String.fromCharCode(event.keyCode);
  firstGame.makeGuess(guess);
  puzzleElement.textContent = firstGame.getPuzzle();
  guessesElement.textContent = `You have ${firstGame.remainingGuesses} remaining guesses`;
  console.log(firstGame.status);
});
