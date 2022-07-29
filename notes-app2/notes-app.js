const notes = getSavedNotes();

const filters = {
  searchText: "",
};

renderNotes(notes, filters);

// ----------------search/filter bar ---------------

document.querySelector("#search").addEventListener("input", (event) => {
  filters.searchText = event.target.value;
  renderNotes(notes, filters);
});

// ----------------add note button ---------------

document.querySelector("#create-new").addEventListener("click", (event) => {
  notes.push({
    title: "",
    body: "",
  });
  saveNotes(notes);
  renderNotes(notes, filters);
});

// ----------------dropdown filter ---------------

document.querySelector("#filter-by").addEventListener("change", (event) => {
  event.target.value;
  console.log(event.target.value);
});
