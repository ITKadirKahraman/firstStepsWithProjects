function getNavigation() {
    return `<header>
            <div class="navContainer">
                <img src="assets/icons/bestellAppLogo.svg" alt="Firmen Logo">
                <img class="imgBar" src="assets/icons/bars.svg" alt="Menüleiste">
            </div>
    </header>`;
}

function getHeader() {
    return `<section class="headerContainer">
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
            <p class="headerText">The best of Burgers, Pizza, and Greens, all in one great place.</p>
        </div>
    </section>`;
}

function getSeperatorBurger() {
    return `<div class="categorySeperator"></div>    
        <div class="h2Container">
            <img class="categoryIcon burgerIcon" src="assets/icons/burger.svg" alt="Burger">
            <h2>Burger</h2>
        </div>
    `;
}

function getSeperatorPizza() {
    return `<div class="categorySeperator"></div>    
        <div class="h2Container">
            <img class="categoryIcon burgerIcon" src="assets/icons/pizza.svg" alt="Pizza">
            <h2>Pizza</h2>
        </div>
    `;
}

function getSeperatorSalad() {
    return `<div class="categorySeperator"></div>    
        <div class="h2Container">
            <img class="categoryIcon burgerIcon" src="assets/icons/salad.svg" alt="Salad">
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
                <p class="price"<${burger[index].price}</p>
                <button class="btnAddBasket" id="btnAddBasket" onclick="addToBasket(index)">
                    <img class="addIcons" id="addIcons" src="assets/icons/${burger[index].added ? 'added' : 'addToBasket'}.svg" alt="Einkaufswagen">
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
                <p class="price"<${pizza[index].price}</p>
                <button class="btnAddBasket" id="btnAddBasket" onclick="addToBasket(index)">
                    <img class="addIcons" id="addIcons" src="assets/icons/${pizza[index].added ? 'added' : 'addToBasket'}.svg" alt="Einkaufswagen">
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
                <p class="price"<${salad[index].price}</p>
                <button class="btnAddBasket" id="btnAddBasket" onclick="addToBasket(index)">
                    <img class="addIcons" id="addIcons" src="assets/icons/${salad[index].added ? 'added' : 'addToBasket'}.svg" alt="Einkaufswagen">
                </button>
            </div>
        </div>
    </section>
    `;
}
