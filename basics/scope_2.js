let name = 'Manon'
if (true) {
  let name = 'Guido'
  // can redeclare if not in the same scope
  if (true) {
    console.log(name)
    // prints 'Guido'
    name = 'Agathe'
    console.log(name)
  }
}

if (true) {
  console.log(name)
}

// it is called variable shadowing
//----------------------------------------



if (true) {

  if (true) {
    age = 34
    console.log(age)
  }
}

if (true) {
  console.log(age)
}


// !!!!!!!!!!!!!!!!!!!
// within a local scope, if a variable is not found, it is declared GLOBALLY !!!!!!!
// It is called variable leak
// >>> always declare values !
