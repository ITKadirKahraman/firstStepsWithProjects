let notes = [];
let trashNotes = [];
let deleteIndex = null;

function init() {
    getFromLocalStorage();
}

function renderNotes() {
    const contentRef = document.getElementById('notesContainer');
    contentRef.innerHTML = "";
    notes.forEach((note, index) => {
        contentRef.innerHTML += createNote(note, index);
    });
}

function addNote() {
    const inputTitle = document.getElementById('inputTitle');
    const noteInput = document.getElementById('noteInput');
    const message = document.getElementById('message');

    const title = inputTitle.value.trim();
    const noteText = noteInput.value.trim();

    if(title === "" && noteText === ""){
        message.innerHTML += createTitleText();
        return;
    }else if(title === "") {
        message.innerHTML += createTitle();
        return;
    }else if(noteText === ""){
        message.innerHTML += createText();
        return;
    }

    const newNote = {title: title, note: noteText};

    notes.push(newNote);

    saveRender();

    inputTitle.value = "";
    noteInput.value = "";
}

function deleteMessage(indexNote) {
    const messageRef = document.getElementById('deleteMessage');
    deleteIndex = indexNote;
    messageRef.innerHTML += createForm();
}

function saveRender() {
    saveToLocalStorage();
    renderNotes();
}

function conformDelete() {
    const messageRef = document.getElementById('deleteMessage');
    if(deleteIndex !== null){
        notes.splice(deleteIndex, 1);
        saveRender();
    }

    messageRef.innerHTML = "";
    deleteIndex = null;
}

function cancelDelete() {
    const messageRef = document.getElementById('deleteMessage');
    messageRef.innerHTML = "";
    deleteIndex = null;
}

function cancelMessage() {
    const messageRef = document.getElementById('message');
    messageRef.innerHTML = ""; 
}

function saveToLocalStorage() {
    localStorage.setItem("data", JSON.stringify(notes));
}

function getFromLocalStorage() {
    const data = localStorage.getItem("data");
    if(data){
        notes = JSON.parse(data);
        renderNotes();
    }
}
