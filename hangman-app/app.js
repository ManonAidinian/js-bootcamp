const firstGame = new HangMan("Cat", 2);
const puzzleElement = document.querySelector("#puzzle");
const statusElement = document.querySelector("#status");

puzzleElement.textContent = firstGame.getPuzzle();
statusElement.textContent = firstGame.getStatusMessage();

window.addEventListener("keypress", function (event) {
  const guess = String.fromCharCode(event.keyCode);
  firstGame.makeGuess(guess);
  puzzleElement.textContent = firstGame.getPuzzle();
  statusElement.textContent = firstGame.getStatusMessage();
});
