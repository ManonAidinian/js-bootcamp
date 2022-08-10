let name = '  Manon'

console.log(name.length)
console.log(name.toUpperCase())
console.log(name)
console.log(name.includes('password'))
console.log(name.trim())


const isValidPassword = password => {
  return password.length >= 8 && !password.includes("password")
}

console.log(isValidPassword('manon'))
console.log(isValidPassword('manon password'))
console.log(isValidPassword('manon123123'))
