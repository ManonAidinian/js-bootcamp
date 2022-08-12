const titleElement = document.querySelector("#note-title");
const bodyElement = document.querySelector("#note-body");
const noteId = location.hash.substring(1);
const dateElement = document.querySelector("#last-edited");
let notes = getSavedNotes();
let note = notes.find((note) => {
  return note.id === noteId;
});

if (!note) {
  location.assign("/index.html");
}

titleElement.value = note.title;
bodyElement.value = note.body;
dateElement.textContent = generateLastEdited(note);

titleElement.addEventListener("input", (event) => {
  note.title = event.target.value;
  note.updatedAt = moment().valueOf();
  dateElement.textContent = generateLastEdited(note);
  saveNotes(notes);
});

bodyElement.addEventListener("input", (event) => {
  note.body = event.target.value;
  note.updatedAt = moment().valueOf();
  dateElement.textContent = generateLastEdited(note);
  saveNotes(notes);
});

document.querySelector("#remove-note").addEventListener("click", (event) => {
  removeNote(noteId);
  saveNotes(notes);
  location.assign("/index.html");
});

window.addEventListener("storage", (event) => {
  if (event.key === "notes") {
    notes = JSON.parse(event.newValue);
    note = notes.find((note) => {
      return note.id === noteId;
    });

    if (!note) {
      location.assign("/index.html");
    }
    titleElement.value = note.title;
    bodyElement.value = note.body;
    dateElement.textContent = generateLastEdited(note);
  }
});
