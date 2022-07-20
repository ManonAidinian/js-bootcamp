const todos = [{
  text: 'laundery',
  completed: true
}, {
  text: 'groceries',
  completed: false
}, {
  text: 'waxing',
  completed: true
}, {
  text: 'honda',
  completed: false
}, {
  text: 'cat food',
  completed: false
}]

document.querySelector('#new-todo').addEventListener('input', (event) => {
  console.log(event.target.value)
})



const incomplete = todos.filter(todo => !todo.completed)

const summary = document.createElement('h3')
summary.textContent = `You have ${incomplete.length} todos left`
document.querySelector('body').appendChild(summary)


incomplete.forEach(todoobject => {
  const todo = document.createElement('p')
  todo.textContent = todoobject.text
  document.querySelector('body').appendChild(todo)
})

document.querySelector('#click-me').addEventListener('click', (event) =>{
  event.target.textContent = 'Bravo !'
  const msg = document.createElement('p')
  msg.textContent = 'You can add a new to do'
  document.querySelector('body').appendChild(msg)
})


// ------------------  select and remove based on condition --------------------
// const ps = document.querySelectorAll('p')
// ps.forEach(p => {
// if (p.textContent.includes('the')) {
//   p.remove()
// }
// })
