let initBookCard = document.getElementById('bookCard');
const userName = document.getElementById('userNameComment');

function initBook() {
    getHeader();
    getFromLocalStorage();
}

function renderBooks() {
    initBookCard.innerHTML = "";
    for (let indexBook = 0; indexBook < books.length; indexBook++) {
        initBookCard.innerHTML += getCreatedBookCard[indexBook];   
    }
    updateLayout();
}

function updateLayout() {
    if(books.length > 3){
        initBookCard.classList.add("grindLayout");
    }
}

function userNameInput() {
    return userName = "Kadir";
}

function addComment() {
    const commentInput = document.getElementById('inputComment');
    const commentText = commentInput.value.trim();
    books[index].comments.push(commentText);
    commentText.value = "";
}

function saveToLocalStorage() {
    localStorage.setItem("comment", JSON.stringify(books));
}

function getFromLocalStorage() {
    const comment = localStorage.getItem("comment");
    if(comment){
        books = JSON.parse(comment);
        renderBooks();
    }
}
