let initBookCard = document.getElementById('bookCard');
let userName = document.getElementById('userNameComment');

function initBook() {
    renderHeader();
    renderBooks();
    getFromLocalStorage();
}

function renderBooks() {
    initBookCard.innerHTML = "";
    for (let indexBook = 0; indexBook < books.length; indexBook++) {
        initBookCard.innerHTML += getCreatedBookCard(indexBook);   
    }
    updateLayout();
}

function renderHeader() {
    const header = document.getElementById('header');
    header.innerHTML = getHeader();
}

function updateLayout() {
    if(books.length > 3){
        initBookCard.classList.add("gridLayout");
    }
}

function userNameInput() {
    return userName = "Kadir";
}

function addComment(index) {
    const commentInput = document.getElementById('inputComment');
    if(!commentInput == ""){
        const commentText = commentInput.value.trim();
        let newComment = {comment: commentText};
        books[index].push(newComment);
        commentInput.value = "";
    }
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
