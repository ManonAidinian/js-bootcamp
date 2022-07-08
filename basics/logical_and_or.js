let temp = 23

if (temp > 20 && temp < 30) {
  console.log('pretty chill')
}

if (temp < 10 || temp > 40) {
  console.log('stay home')
}


let guestOneIsVegan = true
let guestTwoIsVegan = false

if (guestOneIsVegan && guestTwoIsVegan) {
  console.log('here is the tofu menu')
} else if (guestOneIsVegan || guestTwoIsVegan) {
  console.log('just choose whatever')
} else {
  console.log('here is some meat')
}
