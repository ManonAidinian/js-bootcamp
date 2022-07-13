// function argument, code, return value

const greetUser = () => 'HELLO'
console.log(greetUser())


// >>>>>> OLD JS SYNTAX <<<<<<<<<<<<<<<<<<<

// let greetUser1 = function () {
//   return "Hello"
// }
// greetUser1()


// function greetUser2() {
//   return 'hello'
// }
// greetUser2()



const square = num => {
  let result = num * num
  return result
}
console.log(square(4))


const fahrenheitToCelsius = degre => {
  return (degre - 32) * (5/9)
}
console.log(fahrenheitToCelsius(32))
