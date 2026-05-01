function getHeader() {
    return `
    <ul>
        <li><h1>Kadir's Bibliothek</h1></li>
        <li><img src="assets/logo/headerLogo.svg" alt="Logo"></li>
    </ul>
    `;
}


function getCreatedBookCard() {
    return `
    <dialog class="bookCard">
        <header class="bookHeader">
            <h2>${placeholder}</h2>
        </header>

        <figure>
            <img src="./assets/logo/headerLogo.svg" alt="Abbild vom Buch">
        </figure>

        <section>
            <nav>
                <p class="result" id="result">placeholder</p>
                <ul>
                    <li><span class="likes" id="likes">placeholder</span></li>
                    <li><span class="heart"></span></li>
                </ul>
            </nav>
            <article>
                <span class="booksInfo" id="author">${author} :${name}</span>
                <span class="booksInfo" id="published">${published} :${year}</span>
                <span class="booksInfo" id="genre">${genre} :${katogorie}</span>
            </article>
        </section>        

        <section>
            <h3>Kommentare:</h3>
            <article>
                <span class="userNameComment" id="userNameComment">${placeholder}</span>
                <textarea class="outputComment" id="outputComment" rows="1" cols="10">${inputComment}</textarea>
            </article>
            <article>
                <span class="objectName" id="objectName"></span>
                <span class="objectComment" id="objectComment"></span>
            </article>
        </section>

        <nav>
            <input class="inputComment" type="text" id="inputComment" placeholder="Schreibe dein Kommentar...">
            <button class="btnSend" id="btnSend">
                <img src="./assets/icons/send.svg" alt="Kommentar versenden">
            </button>
        </nav>
    </dialog>
    `;
}
