// Prototypal inheritance

class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  } // no coma!
  getBio() {
    let bio = `${this.firstName} is ${this.age}.`;
    this.likes.forEach((like) => {
      bio += ` ${this.firstName} likes ${like}.`;
    });
    // this function child HAS to be arrow function but still have access to this from its parent.
    return bio;
  }
  changeName(fullName) {
    const names = fullName.split(" ");
    this.firstName = names[0];
    this.lastName = names[1];
  }
}

class Employee extends Person {
  constructor(firstName, lastName, title, age, likes = []) {
    super(firstName, lastName, age, likes);
    this.title = title;
  }
  getBio() {
    return `${this.firstName} is a ${this.title}.`;
  }
  getYearsLeft() {
    return 65 - this.age;
  }
}

const myEmployee = new Employee("Manon", "Aidi", "waitress", 34, ["my cats"]);
console.log(myEmployee);
console.log(myEmployee.getBio());
console.log(myEmployee.getYearsLeft());

const myPerson = new Person("Guido", "Caldara", 33, ["running"]);
console.log(myPerson);
console.log(myPerson.getBio());

class Student extends Person {
  constructor(firstName, lastName, age, likes = [], grade) {
    super(firstName, lastName, age, likes);
    this.grade = grade;
  }
  getBio() {
    const status = this.grade >= 70 ? "passing" : "failing";
    return `${this.firstName} is ${status} the test`;
  }
  updateGrade(addedGrade) {
    this.grade += addedGrade;
  }
}

const myStudent = new Student("Toto", "Otot", 12, ["football", "icecream"], 64);
console.log(myStudent.grade);
console.log(myStudent.getBio());
myStudent.updateGrade(10);
console.log(myStudent.grade);
console.log(myStudent.getBio());

//
//
// -----------------------OLD SYNTAX--------------------------------
//
//
//

// const PersonClass = function (firstName, lastName, age, likes = []) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.likes = likes;
// };

// PersonClass.prototype.getBio = function () {
//   let bio = `${this.firstName} is ${this.age}.`;
//   this.likes.forEach((like) => {
//     bio += ` ${this.firstName} likes ${like}.`;
//   });
//   // this function child HAS to be arrow function but still have access to this from its parent.
//   return bio;
// };

// PersonClass.prototype.changeName = function (fullName) {
//   const names = fullName.split(" ");
//   this.firstName = names[0];
//   this.lastName = names[1];
// };

// // needs reg function otherwise no access to this with arrow

// const me = new PersonClass("Manon", "Aidinian", 34, ["cat", "surf"]);
// me.changeName("Agathe Mahé");
// // console.log(me.getBio());

// const other = new PersonClass("Guido", "Caldara", 33);
// // console.log(other.getBio());
