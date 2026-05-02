let initBookCard = document.getElementById('bookCard');
const userName = document.getElementById('userNameComment');

function initBook() {
    initBookCard.innerHTML = "";
    for (let indexBook = 0; indexBook < books.length; indexBook++) {
        initBookCard.innerHTML += getCreatedBookCard[indexBook];   
    }
    getHeader();
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
