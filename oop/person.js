// Prototypal inheritance

const Person = function (firstName, lastName, age, likes = []) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.likes = likes;
};

Person.prototype.getBio = function () {
  let bio = `${this.firstName} is ${this.age}.`;
  this.likes.forEach((like) => {
    bio += ` ${this.firstName} likes ${like}.`;
  });
  // this function child HAS to be arrow function but still have access to this from its parent.
  return bio;
};

Person.prototype.changeName = function (fullName) {
  const names = fullName.split(" ");
  this.firstName = names[0];
  this.lastName = names[1];
};

// needs reg function otherwise no access to this with arrow

const me = new Person("Manon", "Aidinian", 34, ["cat", "surf"]);
console.log(me.getBio());

const other = new Person("Guido", "Caldara", 33);
other.changeName("Agathe Mahé");
console.log(other);
