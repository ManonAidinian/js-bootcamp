// undefined for variable

let name

if (name === undefined) {
  console.log('Please define a value')
} else {
  console.log(name)
}

// undefined for function argument
const square = num => console.log(num)

square()
// !!!!!!!!!!! no error but will return undefined


// undefined for function return value
console.log(square())

// null as asigned values

let age = 34
age = null
console.log(age)
