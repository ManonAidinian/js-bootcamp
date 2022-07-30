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
  const id = uuidv4();
  notes.push({
    id: id,
    title: "",
    body: "",
  });
  location.assign(`/edit.html#${id}`);
  saveNotes(notes);
});

// ----------------dropdown filter ---------------

document.querySelector("#filter-by").addEventListener("change", (event) => {
  event.target.value;
  console.log(event.target.value);
});
