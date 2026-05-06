function init() {
    renderNavigation();
    renderHeader();
}

function renderNavigation() {
    const nav = document.getElementById('nav');
    nav.innerHTML += getNavigation();
}

function renderHeader() {
    const header = document.getElementById('header');
    header.innerHTML += getHeader();
}
