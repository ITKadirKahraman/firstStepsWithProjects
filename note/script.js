let notes = [];

function renderNotes() {
    const contentRef = document.getElementById('notesContainer');
    contentRef.innerHTML = "";
    
    notes.forEach((note, index) => {
        contentRef.innerHTML += 
        `<article class="createdNote">
            <button class="deleteBtn" onclick="deleteNote(${index})">Datensatz löschen</button>
            <h3>${note.title}</h3>
            <p>${note.note}</p>
        </article>`;
    });
    /*
    for (let index = 0; index < notes.length; index++) {
        contentRef.innerHTML += 
        `<article class="createdNote">
            <button class="deleteBtn" onclick="deleteNote(${index})">Datensatz löschen</button>
            <h3>${notes.title}</h3>
            <p>${notes.text}</p>
        </article>`;
    }
    */
}

function addNote() {
    const inputTitle = document.getElementById('inputTitle');
    const noteInput = document.getElementById('noteInput');

    const title = inputTitle.value.trim();
    const noteText = noteInput.value.trim();

    if(title === "" && noteText === ""){
        alert("Title sowie deine Geschichte schreiben!");
        return;
    }

    const newNote = {title: title, note: noteText};

    notes.push(newNote);

    saveToLocalStorage();
    renderNotes();

    inputTitle.value = "";
    noteInput.value = "";
}

function deleteNote(indexNote) {
    if(confirm("Willst du die Notiz löschen?")){
        notes.splice(indexNote, 1);
        saveToLocalStorage();
        renderNotes();
    }
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
