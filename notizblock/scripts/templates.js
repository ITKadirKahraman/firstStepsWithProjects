// gib das Template von Notizen
function getNoteTemplate(indexNotes) {
    // 3.2 wann muss die Notiz gelöscht werden
    return `<p>+ Title: ${notesTitles[indexNotes]}, product: ${notes[indexNotes]} <button onclick="noteToTrash(${indexNotes})">Notiz löschen</button></p>`;
}

function getTrashNoteTemplate(indexTrashNote) {
    return `<p>- Title: ${trashNoteTitles[indexTrashNote]}, product: ${trashNotes[indexTrashNote]} <button onclick="permanentlyDelete(${indexTrashNote})">Notiz endgültig löschen</button></p>`;
}
