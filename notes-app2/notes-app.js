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
