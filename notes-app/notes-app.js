console.log('hello from notes-app.js')

// ----------------query and remove (first element) ---------------

const p = document.querySelector('p')
//p for paragraph tag
p.remove()


// ----------------query all and remove---------------


const ps = document.querySelectorAll('p')
//p for paragraph tag
ps.forEach(p => {
  p.remove()
})

// ----------------query and read in console and modify !---------------

const h1 = document.querySelector('h1')
console.log(h1.textContent)
h1.textContent = 'Surprise!!!'
