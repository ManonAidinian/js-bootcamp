const titleElement = document.querySelector("#note-title");
const bodyElement = document.querySelector("#note-body");
const noteId = location.hash.substring(1);
let notes = getSavedNotes();
let note = notes.find((note) => {
  return note.id === noteId;
});

if (note === undefined) {
  location.assign("/index.html");
}

titleElement.value = note.title;
bodyElement.value = note.body;

titleElement.addEventListener("input", (event) => {
  note.title = event.target.value;
  saveNotes(notes);
});

bodyElement.addEventListener("input", (event) => {
  note.body = event.target.value;
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

    if (note === undefined) {
      location.assign("/index.html");
    }
    titleElement.value = note.title;
    bodyElement.value = note.body;
  }
});
