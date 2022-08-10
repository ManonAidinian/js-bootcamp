let myBook = {
  title: 'La panthere des neiges',
  read: false,
  author: 'Silvain Tesson',
  numberOfPages: 345
}

const bookSummary = object => `${object.title} by ${object.author}`

console.log(bookSummary(myBook))






let myBook2 = {
  title: 'The Holy Bible',
  read: false,
  author: 'Jesus',
  numberOfPages: 2845
}

const bookSummary2 = object => {
  return {
    summary: `${object.title} by ${object.author}.`,
    pagesCount: `${object.numberOfPages} pages.`
  }
}

console.log(bookSummary2(myBook2).summary)
console.log(bookSummary2(myBook2).pagesCount)
