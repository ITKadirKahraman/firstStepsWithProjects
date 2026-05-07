function init() {
    renderNavigation();
    renderHeader();
    renderBurger();
    renderPizza();
    renderSalad();
}

function renderNavigation() {
    const nav = document.getElementById('nav');
    nav.innerHTML += getNavigation();
}

function renderHeader() {
    const header = document.getElementById('header');
    header.innerHTML += getHeader();
}

function renderBurgerSection() {
    let content = getSeperatorBurger();

    for (let index = 0; index < burger.length; index++) {
        content += getBurger(index);
    }

    return content;
}

function renderBurger() {
    const dishes = document.getElementById('burger');
    dishes.innerHTML = renderBurgerSection();
}

function renderPizzaSection() {
    let content = getSeperatorPizza();

    for (let index = 0; index < burger.length; index++) {
        content += getPizza(index);
    }

    return content;
}

function renderPizza() {
    const dishes = document.getElementById('pizza');
    dishes.innerHTML = renderPizzaSection();
}

function renderSaladSection() {
    let content = getSeperatorSalad();

    for (let index = 0; index < burger.length; index++) {
        content += getSalad(index);
    }

    return content;
}

function renderSalad() {
    const dishes = document.getElementById('salad');
    dishes.innerHTML = renderSaladSection();
}
