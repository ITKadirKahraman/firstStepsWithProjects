function getNavigation() {
    return `<header>
            <div class="navContainer">
                <img src="assets/icons/bestellAppLogo.svg" alt="Firmen Logo">
                <img class="imgBar" src="assets/icons/bars.svg" alt="Menüleiste">
            </div>
    </header>`;
}

function getHeader() {
    return `<section id="start" class="headerContainer">
        <div class="headerImg"></div>
        <div class="circle"><img class="circleImg" src="assets/img/logoBurger.png"></div>
        <div class="headerInformation">
            <div class="headerTitle">
                <h1 class="burgerText"><span>Burger</span>House</h1>
                <div class="starContainer">
                    <img class="star" src="assets/icons/star.svg">
                    <p class="ranting">4,1</p>
                    <p class="commentsNumber">(317)</p>
                </div>
            </div>
            <p class="headerText" id="menu">The best of Burgers, Pizza, and Greens, all in one great place.</p>
        </div>
    </section>`;
}

function getSeperatorBurger() {
    return `<div class="categorySeperator"></div>    
        <div class="h2Container">
            <img class="categoryIcon dishesIcon" src="assets/icons/burger.svg" alt="Burger">
            <h2>Burger</h2>
        </div>
    `;
}

function getSeperatorPizza() {
    return `<div class="categorySeperator"></div>    
        <div class="h2Container">
            <img class="categoryIcon dishesIcon" src="assets/icons/pizza.svg" alt="Pizza">
            <h2>Pizza (30cm)</h2>
        </div>
    `;
}

function getSeperatorSalad() {
    return `<div class="categorySeperator"></div>    
        <div class="h2Container">
            <img class="categoryIcon dishesIcon" src="assets/icons/salad.svg" alt="Salad">
            <h2>Salad</h2>
        </div>
    `;
}

function getBurger(index) {
    return `<section class="sectionBurger">
        <div class="card" id="card">
            <img class="cardImg" src="assets/img/${burger[index].image}.svg" alt="Burger">
            <p class="cardHeader">${burger[index].name}</p>
            <p class="cardSubtext">${burger[index].description}</p>
            <div class="priceAndAdd">
                <p class="price">${burger[index].price} <strong>€</strong></p>
                <button class="btnAddBasket" id="btnAddBasket" onclick="addToBasket(burger[${index}])">
                    <p class="basketText">${salad[index].added ? 'Added' : 'Add to basket'}</p>
                </button>
            </div>
        </div>
    </section>
    `;
}

function getPizza(index) {
    return `<section class="sectionBurger">
        <div class="card" id="card">
            <img class="cardImg" src="assets/img/${pizza[index].image}.svg" alt="Burger">
            <p class="cardHeader">${pizza[index].name}</p>
            <p class="cardSubtext">${pizza[index].description}</p>
            <div class="priceAndAdd">
                <p class="price">${pizza[index].price} <strong>€</strong></p>
                <button class="btnAddBasket" id="btnAddBasket" onclick="addToBasket(pizza[${index}])">
                    <p class="basketText">${salad[index].added ? 'Added' : 'Add to basket'}</p>
                </button>
            </div>
        </div>
    </section>
    `;
}

function getSalad(index) {
    return `<section class="sectionBurger">
        <div class="card" id="card">
            <img class="cardImg" src="assets/img/${salad[index].image}.svg" alt="Burger">
            <p class="cardHeader">${salad[index].name}</p>
            <p class="cardSubtext">${salad[index].description}</p>
            <div class="priceAndAdd">
                <p class="price">${salad[index].price} <strong>€</strong></p>
                <button class="btnAddBasket" id="btnAddBasket" onclick="addToBasket(salad[${index}])">
                    <p class="basketText">${salad[index].added ? 'Added' : 'Add to basket'}</p>
                </button>
            </div>
        </div>
    </section>
    `;
}

function getFooter() {
    return `<footer>
        <div class="footerContainer">
            <nav class="footerNav">
                <a id="topToBot">
                    <img class="copyright" src="assets/icons/copyright.svg" alt="copyright">
                    2026 BurgerHouse 
                </a>
                <a id="midToTop">
                    Imprint
                </a>
                <a id="botToMid">
                    Cookie Preferences
                </a>
            </nav>
        </div>
        <div class="subFooterContainer">
            <a href="#start" class="start">
                <img class="home" src="assets/icons/home.svg" alt="Home">
            </a>
            <button class="subFooterButton">
                <img class="person" src="assets/icons/person.svg" alt="Profile">
            </button>
            <a href="#menu" class="menu">
                <img class="takeout" src="assets/icons/takeout.svg" alt="Menu">
            </a>
            <button class="subFooterButton" id="openBasket" onclick="openBasket()">
                <img class="shopping" src="assets/icons/shopping_cart.svg" alt="ShoppingCart">
            </button>
        </div>
    </footer>`;
}

function basketTemplate() {
    return `<div class="basketSection" id="basketSection">
        <div class="closeContainer"> 
            <button class="closeBtn" id="closeBtn" onclick="closeBasket()">
                <img class="close" id="close" src="assets/icons/close.svg" alt="Close">
            </button>
        </div>
        <h3>Your Basket</h3>
        <div class="itemsScroll">
            <div id="basketItems"></div>
        </div>
        <div id="calculator"></div>
    </div>`;
}

function basketItemTemplate(item, index) {
    return `<div class="basketCard" id="basketItem">
        <p class="basketOrderDishes">${item.amount} x ${item.name}</p>
        <div class="basketCardBotton">
            <p class="switchTrashMinusPlus">
                <button onclick="${item.amount === 1 ? `removeFromBasket(${index})` : `descreaseAmount(${index})`}" class="removeCount">
                    ${item.amount === 1 ? '<img class="trash" src="assets/icons/trash.svg" alt="Trash">' : '<img class="minus" src="assets/icons/minus.svg" alt="Minus">'}
                </button>
                <span class="amount">${item.amount}</span>
                <button class="btnPlus" onclick="increaseAmount(${index})">
                    <img class="plus" src="assets/icons/plus.svg" alt="Plus">
                </button>
            </p>
            <p class="basketPrice">
                ${(item.price * item.amount).toFixed(2)} €
            </p>
        </div>
    </div>`;
}

function calculator() {
    return `<div class="calculator">
        <table>
            <tbody>
                <tr>
                    <td>Subtotal</td>
                    <td class="tdEnd" id="subtotal"></td>
                </tr>
                <tr>
                    <td>Delivery fee</td>
                    <td class="tdEnd" id="delivery"></td>
                </tr>
                <tr>
                    <th>Total</th>
                    <th class="tdEnd" id="total"></th>
                </tr>
            </tbody>
        </table>
        <button id="btnBuyNow" class="btnBuyNow" onclick="openOrder()"></button>
    </div>`;
}

function emptyBasket() {
    return `<div class="basketSection">
        <div class="basketIsEmpty">
            <h3 class="emptyH3">Your Basket</h3>
            <p class="emptyP">Nothing here yet. <br> Go ahead and choose <br> something delicious! </p>
            <img class="emptyImg" src="assets/icons/basketShoppingCart.svg" alt="Shopping cart">
        </div>
    </div>`;
}

function order() {
    return `<dialog class="orderContainer" id="orderContainer">
        <button class="closeBtnOrder" id="closeBtn" onclick="closeOrder()">
            <img id="close" src="assets/icons/close.svg" alt="Close">
        </button>
        <div class="orderText">
            <img class="carImg" src="assets/icons/car.svg" alt="Car">
            <h3>Order confirmed!</h3>
            <p class="orderP">Your foor is on the way!</p>
        </div>
    </dialog>`;
}
