function init() {
    renderPage();
}

function renderPage() {
    getFromLocalStorage();
    renderNavigation();
    renderHeader();
    renderBurger();
    renderBasket();
    renderPizza();
    renderSalad();
    renderFooter();
    return document.getElementById('order').innerHTML = order();
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

function renderFooter() {
    const footer = document.getElementById('foot');
    footer.innerHTML = getFooter();
}

function addToBasket(product) {
    let productExisting = basket.find(
        item => item.name === product.name
    );

    if(productExisting){
        productExisting.amount++;
    }else {
        basket.push({
            name: product.name,
            price: product.price,
            amount: 1
        });
    }

    saveToLocalStorage();
    renderBasket();
}

function renderBasket() {
    let basketRef = document.getElementById('basket');

    if(basket.length === 0) {
        basketRef.innerHTML = emptyBasket();
        return;
    }
    basketRef.innerHTML = basketTemplate();
    renderBasketItems();
    calculateBasket();
}

function renderBasketItems() {
    let basketItems = document.getElementById('basketItems');
    basketItems.innerHTML = '';
    for (let index = 0; index < basket.length; index++) {
        let item = basket[index];
        basketItems.innerHTML += basketItemTemplate(item, index);
    }
}

function removeFromBasket(index) {
    basket[index].amount--;
    if(basket[index].amount <= 0) {
        basket.splice(index, 1);
    }
    saveToLocalStorage();
    renderBasket();
}

function closeOrder() {
    const dialogClose = document.getElementById('orderContainer');
    dialogClose.close();
}

function increaseAmount(index) {
    basket[index].amount++;
    renderBasket();
}

function descreaseAmount(index) {
    basket[index].amount--;
    renderBasket();
}

function calculateBasket() {
    let subtotal = 0;
    for (let index = 0; index < basket.length; index++) {
        subtotal += basket[index].price * basket[index].amount;
    }

    let delivery = 4.99;
    let total = subtotal + delivery;

    document.getElementById('subtotal').innerHTML = subtotal.toFixed(2).toString().replace(".", ",") + " €";
    document.getElementById('delivery').innerHTML = delivery.toFixed(2).toString().replace(".", ",") + " €";
    document.getElementById('total').innerHTML = total.toFixed(2).toString().replace(".", ",") + " €";
    document.getElementById('btnBuyNow').innerHTML = "Buy now (" + total.toFixed(2).toString().replace(".", ",") + " €)";
}

function openOrder() {
    const order = document.getElementById('orderContainer');
    order.showModal();
    basket = [];
    renderBasket();
    setTimeout(() => {
        order.close();
    }, 3000);
}

function saveToLocalStorage() {
    localStorage.setItem("dishes", JSON.stringify(basket));
}

function getFromLocalStorage() {
    const comment = localStorage.getItem("dishes");
    if(comment){
        basket = JSON.parse(comment);
        renderBasket();
    }
}
