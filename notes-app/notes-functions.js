// read already existing notes from local storage
"use strict";

let data;
const processData = () => {
  data = "123456789";
};

processData();
console.log(data);

const getSavedNotes = () => {
  const notesJSON = localStorage.getItem("notes");
  try {
    return notesJSON ? JSON.parse(notesJSON) : [];
  } catch (e) {
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
  const noteIndex = notes.findIndex((note) => note.id === noteId);
  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
  }
};

// render filtered notes
const renderNotes = (notes, filters) => {
  notes = sortNotes(notes, filters.sortBy);
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  );
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

// generate last edited message
const generateLastEdited = (note) =>
  `Last edited ${moment(note.updatedAt).fromNow()}`;

//sort my notes by one of the 3 ways
const sortNotes = (notes, sortBy) => {
  if (sortBy === "byEdited") {
    return notes.sort((a, b) => {
      if (a.updatedAt > b.updatedAt) {
        return -1;
      } else if (a.updatedAt < b.updatedAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === "byCreated") {
    return notes.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1;
      } else if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === "alphabetical") {
    return notes.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    return notes;
  }
};
