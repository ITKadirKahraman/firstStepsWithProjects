function init() {
    renderPage();
}

function renderPage() {
    getFromLocalStorage();
    renderPageSections();
    renderBasket();
    return document.getElementById('order').innerHTML = order();
}

function renderPageSections() {
    const nav = document.getElementById('nav');
    const header = document.getElementById('header');
    const footer = document.getElementById('foot');

    nav.innerHTML = getNavigation();
    header.innerHTML = getHeader();
    renderCategory('burger', 'burger', 'Burger', 'burger');
    renderCategory('pizza', 'pizza', 'Pizza', 'pizza');
    renderCategory('salad', 'salad', 'Salad', 'salad');
    footer.innerHTML = getFooter();
}

function renderCategory(targetId, category, title, icon) {
    let content = getSeparator(title, icon);

    for (let dishesIndex = 0; dishesIndex < dishes[category].length; dishesIndex++) {
        content += getDishes(category, dishesIndex, title);    
    }

    document.getElementById(targetId).innerHTML = content;
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
    renderPageSections();
}

function renderBasket() {
    let basketRef = document.getElementById('basket');

    if(basket.length === 0) {
        basketRef.innerHTML = emptyBasket();
        return;
    }
    basketRef.innerHTML = basketTemplate();
    renderBasketItems();
    renderCalculator();
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

function renderCalculator() {
    let calcu = document.getElementById('calculator');
    calcu.innerHTML = calculator();
}

function removeFromBasket(index) {
    basket[index].amount--;
    if(basket[index].amount <= 0) {
        basket.splice(index, 1);
    }
    saveToLocalStorage();
    renderBasket();
    renderPageSections();
}

function closeOrder() {
    const dialogClose = document.getElementById('orderContainer');
    dialogClose.close();
}

function counter(index, value) {
    basket[index].amount += value;

    if (basket[index].amount <= 0) {
        basket.splice(index, 1);
    }
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
    const basketContent = document.getElementById('basket');
    order.showModal();
    basketContent.classList.add('dNone');
    basket = [];
    renderBasket();
    setTimeout(() => {
        order.close();
        basketContent.classList.remove('dNone');
    }, 3000);
    closeBasket();
    renderPageSections();
}

function openBasket() {
    const basket = document.querySelector('.basketContent');
    basket.classList.add('showBasket');
}

function closeBasket() {
    const basket = document.querySelector('.basketContent');
    basket.classList.remove('showBasket');
}

function saveToLocalStorage() {
    localStorage.setItem("dishes", JSON.stringify(basket));
}

function getFromLocalStorage() {
    const comment = localStorage.getItem("dishes");
    if(comment){
        basket = JSON.parse(comment);
        renderPageSections();
    }
}
