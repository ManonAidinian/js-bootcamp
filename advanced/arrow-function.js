const word = function (word) {
  return word;
};

const squareLong = (num) => {
  return num * num;
};

const squareShort = (num) => num * num;

const people = [
  {
    name: "Manon",
    age: 34,
  },
  {
    name: "Guido",
    age: 27,
  },
  {
    name: "Agathe",
    age: 24,
  },
  {
    name: "Marie",
    age: 34,
  },
];

const under30 = people.filter((person) => person.age < 30);
console.log(under30);

const age34 = people.find((person) => person.age === 34);
console.log(age34.name);
