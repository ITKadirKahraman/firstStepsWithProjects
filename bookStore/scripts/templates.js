function getHeader() {
    return `
    <header class="header">
        <ul>
            <li><h1>BookStore</h1></li>
            <li><img src="assets/logo/headerLogo.svg" alt="Logo"></li>
        </ul>
    </header>`;
}

function getCreatedBookCard(index) {
    return `
    <dialog class="bookCard">
        <header class="bookHeader">
            <h2>${books[index].name}</h2>
        </header>

        <figure>
            <img src="./assets/logo/headerLogo.svg" alt="Abbild vom Buch">
        </figure>

        <section>
            <nav>
                <p class="price" id="price">${books[index].price}</p>
                <ul>
                    <li><span class="likes" id="likes">${books[index].likes}</span></li>
                    <li><span class="heart"></span></li>
                </ul>
            </nav>
            <article>
                <span class="booksInfo" id="author"><strong>Author</strong> :${books[index].author}</span>
                <span class="booksInfo" id="published"><strong>Erscheingsjahr</strong> :${books[index].publishedYear}</span>
                <span class="booksInfo" id="genre"><strong>Genre</strong> :${books[index].genre}</span>
            </article>
        </section>        

        <section>
            <h3>Kommentare:</h3>
            <article>
                <span class="userNameComment" id="userNameComment">[${userNameInput()}]</span>
                <textarea class="outputComment" id="outputComment" rows="1" cols="10">${addComment()}</textarea>
            </article>
            <article>
                <span class="objectName" id="objectName">[${books[index].comments[index].name}]</span>
                <span class="objectComment" id="objectComment">${books[index].comments[index].comment}</span>
            </article>
        </section>

        <nav>
            <input class="inputComment" type="text" id="inputComment" placeholder="Schreibe dein Kommentar...">
            <button class="btnSend" id="btnSend">
                <img src="./assets/icons/send.svg" alt="Kommentar versenden">
            </button>
        </nav>
    </dialog>`;
}
