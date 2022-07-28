// ➜  js-bootcamp git:(master) live-server notes-app

const notes = [
  {
    title: "My next trip",
    body: "Visit Sihka",
  },
  {
    title: "Good habits",
    body: "Stop smoking",
  },
  {
    title: "Important",
    body: "Find a job",
  },
];

// ----------------input ---------------

document.querySelector("#search").addEventListener("input", (event) => {
  filters.searchText = event.target.value;
  renderNotes(notes, filters);
});

// ----------------filtering from input---------------

const filters = {
  searchText: "",
};

const renderNotes = (notes, filters) => {
  const filteredNotes = notes.filter((note) => {
    return note.title.includes(filters.searchText);
  });
  document.querySelector("#notes").innerHTML = "";
  filteredNotes.forEach((note) => {
    const noteElement = document.createElement("p");
    noteElement.textContent = note.title;
    document.querySelector("#notes").appendChild(noteElement);
  });
};
renderNotes(notes, filters);

// ----------------buttons manipulations ---------------

document.querySelector("#create-new").addEventListener("click", (event) => {
  event.target.textContent = "Bravo!";
});

// ----------------dropdown manipulations ---------------

document.querySelector("#filter-by").addEventListener("change", (event) => {
  event.target.value;
  console.log(event.target.value);
});

// ----------------checkbox manipulations ---------------

// document.querySelector("#for-fun").addEventListener("change", (event) => {
//   event.target.checked;
// });

// // ----------------form event handeler ---------------

// document.querySelector("#name-form").addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log(event.target.elements.firstName.value);
//   event.target.elements.firstName.value = "";
// });

// // ----------------remove noted ---------------

// document.querySelector("#remove-all").addEventListener("click", (event) => {
//   document.querySelectorAll(".note").forEach((note) => note.remove());
// });

// // ----------------query and remove (first element) ---------------

// const p = document.querySelector('p')
// //p for paragraph tag
// p.remove()

// // ----------------query all and remove---------------

// const ps = document.querySelectorAll('p')
// //p for paragraph tag
// ps.forEach(p => {
//   p.remove()
// })

// // ----------------query and read in console and modify !---------------

// const h1 = document.querySelector('h1')
// console.log(h1.textContent)
// h1.textContent = 'Surprise!!!'

// // ----------------add a new element---------------

// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is a new element from JavaScript'
// document.querySelector('body').appendChild(newParagraph)
