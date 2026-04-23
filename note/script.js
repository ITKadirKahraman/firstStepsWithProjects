let notes = [];
let deleteIndex = null;

function renderNotes() {
    const contentRef = document.getElementById('notesContainer');
    contentRef.innerHTML = "";
    notes.forEach((note, index) => {
        contentRef.innerHTML += createNote(note, index);
    });
        
}

function createNote(note, index) {
    return `<article class="createdNote">
            <button class="deleteBtn" onclick="deleteMessage(${index})">Datensatz löschen</button>
            <h3>${note.title}</h3>
            <p>${note.note}</p>
    </article>`;
}

function addNote() {
    const inputTitle = document.getElementById('inputTitle');
    const noteInput = document.getElementById('noteInput');

    const title = inputTitle.value.trim();
    const noteText = noteInput.value.trim();

    if(title === "" && noteText === ""){
        return;
    }else if(title === "") {
        return;
    }else if(noteText === ""){
        return;
    }

    const newNote = {title: title, note: noteText};

    notes.push(newNote);

    saveToLocalStorage();
    renderNotes();

    inputTitle.value = "";
    noteInput.value = "";
}

function deleteMessage(indexNote) {
    const messageRef = document.getElementById('deleteMessage');
    deleteIndex = indexNote;
    messageRef.innerHTML += createForm();
}

function createForm() {
    return `<article class="message">
        <p>Willst du die Notiz wirklich löschen?</p>
        <button onclick="conformDelete()">Ja</button>
        <button onclick="cancelDelete()">Nein</button>
    </article>`;
}

function conformDelete() {
    const messageRef = document.getElementById('deleteMessage');
    if(deleteIndex !== null){
        notes.splice(deleteIndex, 1);
        saveToLocalStorage();
        renderNotes();
    }

    messageRef.innerHTML = "";
    deleteIndex = null;
}

function cancelDelete() {
    const messageRef = document.getElementById('deleteMessage');
    messageRef.innerHTML = "";
    deleteIndex = null;
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
