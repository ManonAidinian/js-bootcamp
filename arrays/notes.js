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


// ----------FIND INDEX OF A NOTE--------------------------------

console.log(notes2.indexOf({}))
// does not work because it's pointing to 2 diff objects in memory

const index = notes2.findIndex((note, index) => {
  return note.title === 'My next trip'
})
console.log(index)
// this method store in index the index of the element for which the return value is true


// ----------FIND ONE NOTE--------------------------------

const findNote = (notes, title) => {
  return notes.find((note, index) => {
    return note.title === title
    // return note.title.toLowerCase() === title.toLowerCase()
    // dont know why it doesnt work ??????
  })
}
let note = findNote(notes2, 'Good habits')
console.log(note)
// this method return the element for which the return value is true

// -------------FILTER NOTES-----------------------------

// const filteredNotes = notes2.filter((note, index) => {
//   const isTitleMatch = note.title.includes('o')
//   const isBodyMatch = note.body.includes('o')
//   return isTitleMatch || isBodyMatch
// })

// console.log(filteredNotes)
// this method stores in filteredNoted the elements for which the return value is true
// THIS DOESNT WORK WE DONT KNOW WHY ?????????????????????

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

// --------------SORT NOTES------------------------------

const sortNotes = notes => {
  notes.sort((a, b) => {
    // if (a.title.toLowerCase() < b.title.toLowerCase()) {
      if (a.title < b.title) {
      return -1
    } else if (b.title < a.title) {
      return 1
    } else {
      return 0
    }
  })
}

sortNotes(notes2)
console.log(notes2)



// --------------CHECK AND MODIFY NOTES------------------------------

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


// --------------ITERATE THROUGH NOTES AND LOOPS------------------------------

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
