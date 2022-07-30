// read already existing notes from local storage
const getSavedNotes = () => {
  const notesJSON = localStorage.getItem("notes");
  if (notesJSON !== null) {
    return JSON.parse(notesJSON);
  } else {
    return [];
  }
};

// generate the DOM structure for a note
const generateNoteDOM = (note) => {
  const noteElement = document.createElement("div");

  const textElement = document.createElement("a");
  textElement.setAttribute("href", `/edit.html#${note.id}`);
  if (note.title.length > 0) {
    textElement.textContent = note.title;
  } else {
    textElement.textContent = "Unnamed note";
  }
  noteElement.appendChild(textElement);

  const button = document.createElement("button");
  button.textContent = "x";
  noteElement.appendChild(button);
  button.addEventListener("click", () => {
    removeNote(note.id);
    saveNotes(notes);
    renderNotes(notes, filters);
  });

  return noteElement;
};

// remove note
const removeNote = (noteId) => {
  const noteIndex = notes.findIndex((note) => {
    return note.id === noteId;
  });
  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
  }
};

// render filtered notes
const renderNotes = (notes, filters) => {
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });
  document.querySelector("#notes").innerHTML = "";
  filteredNotes.forEach((note) => {
    const noteElement = generateNoteDOM(note);
    document.querySelector("#notes").appendChild(noteElement);
  });
};

//save the notes to localStorage
const saveNotes = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};
