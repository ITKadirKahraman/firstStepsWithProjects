function createNote(note, index) {
    return `<article class="createdNote">
            <button class="deleteBtn" onclick="deleteMessage(${index})">Datensatz löschen</button>
            <h3>${note.title}</h3>
            <p>${note.note}</p>
    </article>`;
}

function createForm() {
    return `
    <article class="message">
        <p>Willst du die Notiz wirklich löschen?</p>
        <button onclick="conformDelete()">Ja</button>
        <button onclick="cancelDelete()">Nein</button>
    </article>`;
}

function createTitleText() {
    return `
    <article class="message">
        <p>Du musst noch Title sowie ein Text schreiben!</p>
        <button onclick="cancelMessage()">Ok</button>
    </article>`;
}

function createTitle() {
    return `
    <article class="message">
        <p>Du musst noch ein Title schreiben!</p>
        <button onclick="cancelMessage()">Ok</button>
    </article>`;
}

function createText() {
    return `
    <article class="message">
        <p>Du musst noch ein Text schreiben!</p>
        <button onclick="cancelMessage()">Ok</button>
    </article>`;
}
