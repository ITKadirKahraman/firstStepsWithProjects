// Notizentitel 
let notesTitles = ['Ba', 'Aufgabe'];
// 1. notizen anzeigen lassen
// 1.1 brauche Notizen
let notes = ['Banana', 'Rasen mähen'];

// 1.2 wann werden sie angezeigt?
function renderNotes() {
    // 1.3 ich muss definieren wo sie anzuzeigen sind
    let contentRef = document.getElementById('content');
    // 1.4 ich leeres es
    contentRef.innerHTML = "";
    // 1.5 und füge es dann erst hinzu
    for (let indexNotes = 0; indexNotes < notes.length; indexNotes++) {
        contentRef.innerHTML += " " + getNoteTemplate(indexNotes);
    }
}

function init() {
    getFromLocalStorage();
    renderNotes();
    renderTrashNotes();
}

// gib das Template von Notizen
function getNoteTemplate(indexNotes) {
    // 3.2 wann muss die Notiz gelöscht werden
    return `<p>+ Title: ${notesTitles[indexNotes]}, product: ${notes[indexNotes]} <button onclick="noteToTrash(${indexNotes})">Notiz löschen</button></p>`;
}

// Papierkorb anlegen
let trashNoteTitles = [];
let trashNotes = [];
// Papierkorb anzeigen
function renderTrashNotes() {
    let trashContentRef = document.getElementById('trashContent');
    trashContentRef.innerHTML = "";
    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++){
        trashContentRef.innerHTML += " " +  getTrashNoteTemplate(indexTrashNote); 
    }
}

function getTrashNoteTemplate(indexTrashNote) {
    return `<p>- Title: ${trashNoteTitles[indexTrashNote]}, product: ${trashNotes[indexTrashNote]} <button onclick="permanentlyDelete(${indexTrashNote})">Notiz endgültig löschen</button></p>`;
}

// 2. notizen hinzufügen
function addNote() {
    // 2.1 eingabe von user definieren
    let noteInputRef = document.getElementById('loadInput');
    // 2.2 eingabe auslesen
    let noteInput = noteInputRef.value;
    // 2.3 eingabe der notizen hinzufügen
    notes.push(noteInput);
    // 2.4 eingabe anzeigen lassen
    renderNotes();
    noteInputRef.value = "";
}

// 3. notizen löschen
function noteToTrash(indexNote) {
    // 3.1 welche Notiz soll gelöscht werden
    // notes.splice(indexNote, 1);
    // 3.1.2
    //let trashNote = "";
    // zwischen Variablen speichern
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote[0]);
    let trashNoteTitle = notesTitles.splice(indexNote, 1);
    trashNoteTitles.push(trashNoteTitle[0]);
    // 3.3 anzeige updaten
    renderNotes();
    renderTrashNotes();
}

function permanentlyDelete(trashIndexDelete) {
    trashNotes.splice(trashIndexDelete, 1);
    renderNotes();
    renderTrashNotes();
}

function saveDate() {
    let inputRef = document.getElementById('loadInput');
    if(inputRef.value != ""){
        notes.push(inputRef.value);
    }
    saveToLocalStorage();
    renderNotes();
    inputRef.value = "";
}


function saveToLocalStorage() {
    const data = {
        title: notesTitles,
        note: notes,
        trashNoteTitles: trashNoteTitles,
        trashNotes: trashNotes,
    };
    localStorage.setItem("notesData", JSON.stringify(data));
}

function getFromLocalStorage() {
    let data = localStorage.getItem("notesData");
    if(data){
        const parsedData = JSON.parse(data);

        notesTitles = parsedData.title || [];
        notes = parsedData.notes || [];
        trashNoteTitles = parsedData.trashNoteTitles || [];
        trashNotes = parsedData.trashNote || [];
    }
    console.log(data);
}

// 4. notizen archivieren
