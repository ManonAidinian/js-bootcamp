const age = 34;
const message = age >= 18 ? "you can vote!" : "you cannot vote.";
console.log(message);

const myAge = 34;
const showPage = () => {
  console.log("showing the page");
};
const showError = () => {
  console.log("show error page");
};

myAge >= 21 ? showPage() : showError();

const team = ["Manon", "Guido"];

const playing =
  team.length <= 4
    ? `Team size: ${team.length}`
    : "Too many people in your team";
console.log(playing);
