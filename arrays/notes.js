const notes2 =[{}, {
  title: 'My next trip',
  body: 'Visit Sihka'
}, {
  title: 'Good habits',
  body: 'Stop smoking'
}, {
  title: 'Important',
  body: 'Find a job'
}]

console.log(notes2.indexOf({}))
// does not work because it's pointing to 2 diff objects in memory

const index = notes2.findIndex((note, index) => {
  return note.title === 'My next trip'
})
console.log(index)

// ----------------------------------

const findNote = (notes, title) => {
  return notes.find((note, index) => {
    return note.title === title
    // return note.title.toLowerCase() === title.toLowerCase()
    // dont know why it doesnt work ??????
  })
}

let note = findNote(notes2, 'Good habits')
console.log(note)


// const notes = ['Note 1', 'Note 2', 'Note 3', 'Note 4', 'Note 5']

// console.log(notes.length)
// console.log(notes[0])

// notes.push('My new note')
// console.log(notes)

// notes.pop()
// console.log(notes)
// console.log(notes.pop())
// console.log(notes)

// notes.shift()
// console.log(notes)
// console.log(notes.shift())

// notes.unshift('My last note')
// console.log(notes)

// notes.splice(1, 2)
// console.log(notes)
// notes.splice(0, 0, 'Surprise!')
// console.log(notes)
// notes.splice(0, 1, 'Replaced')
// console.log(notes)

// notes[0] = 'Thats a new new note'
// console.log(notes)

// notes.forEach((item) => {
//   console.log(item)
// })

// notes.forEach((item, index) => {
//   console.log(`${index + 1} - ${item}`)
// })

// for (count = 1; count <= 5; count ++) {
//   console.log(`This is count number ${count}`)
// }

// for (count = 5; count >= 1; count --) {
//   console.log(`This is count number ${count}`)
// }

// console.log(notes.indexOf('Note 2'))
// console.log(notes.indexOf('this'))
