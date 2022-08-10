// multiple arg

const add = (a, b) => a + b

let result = add(5, 10)
console.log(result)

 // default arg

 const score = (name = 'anonymous', score = 0) => `${name} got ${score} points`

 console.log(score())
 console.log(score(undefined, 99))


 const tip = (bill, tipPercent = .2) => bill * tipPercent

 console.log(tip(100, undefined))
 console.log(tip(100, .3))

 const total = (bill, tipPercent) => bill + tip(bill, tipPercent)

 console.log(total(100))
 console.log(total(100, .3))
