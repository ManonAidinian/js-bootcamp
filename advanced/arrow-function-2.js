const add = function () {
  return arguments[0] + arguments[1];
};
console.log(add(11, 22, 33, 44));

const car = {
  color: "red",
  getSummary: function () {
    return this.color;
  },
};
console.log(car.getSummary());
// functions on objects properties can't use arrow otherwise no access to this.

const car2 = {
  color: "red",
  getSummary() {
    return this.color;
  },
};
console.log(car.getSummary());
// functions on objects properties can't use arrow otherwise no access to this.
