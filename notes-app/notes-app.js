"use strict";

let notes = getSavedNotes();

const filters = {
  searchText: "",
  sortBy: "byEdited",
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
    createdAt: moment().valueOf(),
    updatedAt: moment().valueOf(),
    title: "",
    body: "",
  });
  location.assign(`/edit.html#${id}`);
  saveNotes(notes);
});

// ----------------dropdown filter ---------------

document.querySelector("#filter-by").addEventListener("change", (event) => {
  filters.sortBy = event.target.value;
  renderNotes(notes, filters);
});

window.addEventListener("storage", (event) => {
  if (event.key === "notes") {
    notes = JSON.parse(event.newValue);
    renderNotes(notes, filters);
  }
});
