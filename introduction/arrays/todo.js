const todo = ['laundry', 'groceries', 'waxing', 'honda', 'cat food']

// todo.splice(2, 1)
// todo.push('get a job')
// todo.shift()

// console.log(todo)

// console.log(`You have ${todo.length} things to do.`)
// console.log(`The first one is ${todo[0]}.`)

todo.forEach((item, idx) => {
  console.log(`${idx + 1} - ${item}`)
})


// convert array to array of object with 2 properties : text and completed?
const todo2 = [{
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
// create function to remove an object by text value

const deleteToDo = (todos, text) => {
  const index = todos.findIndex((todo, index) => {
    return todo.text === text
  })
  if (index > -1) {
    todos.splice(index, 1)
  }
}

deleteToDo(todo2, 'honda')
console.log(todo2)


const uncompleted = todos => {
  return todos.filter((todo) => {
    return todo.completed === false
  })
}

console.log(uncompleted(todo2))

// -------------------------------------------

const sortTodos = todos => {
  todos.sort((a, b) => {
    // if (a.title.toLowerCase() < b.title.toLowerCase()) {
      if (a.completed === false && b.completed === true) {
        return -1
        // a comes before b
    } else if (!b.completed && a.completed) {
      return 1
      // b comes before a
    } else {
      return 0
    }
  })
}

sortTodos(todo2)
console.log(todo2)
