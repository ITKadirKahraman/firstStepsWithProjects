let myData = ['Ferrari', 'TOGG', 'Apple'];

function init() {
    /* Speichert im lokalen Speicher der Webbrowser
    localStorage.setItem("myBusiness", "ECommerce");
    localStorage.setItem("myLove", "Code");
    */
    /* Der erste Konsol gibt als normalen Array aus,
    der zweite als String 
    console.log(myData);
    console.log(JSON.stringify(myData));
    */
   localStorage.setItem("myCat", "Yoshi");
    getFormLocalStorage();
    render();
}

function saveData() {
    let inputRef = document.getElementById('dataInput');

    if(inputRef.value != ""){
        myData.push(inputRef.value);
    }

    saveToLocalStorage();
    render();
    inputRef.value = "";
}

function saveToLocalStorage() {
    // Daten im LocalStorage speichern
    localStorage.setItem("myData", JSON.stringify(myData));
}

function getFormLocalStorage() {
    // Daten aus dem LocalStorage holen
    // als String
    const data = localStorage.getItem("myData");
    console.log(data);
    // als Array
    const ca = localStorage.getItem("myData");
    let myarr = JSON.parse(ca);
    console.log(myarr);
    // oder so mit einer Zeile weniger
    let myArr = JSON.parse(localStorage.getItem("myData"));
    console.log(myArr);
    // Die Daten aus localStorage in Array myData speichern
    let myD = JSON.parse(localStorage.getItem("myData"));
    if (myD !== null) {
        myData = myD;
    }else{
        myData = [];
    }
    console.log(myData);
}

function render() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (let dataIndex = 0; dataIndex < myData.length; dataIndex++) {
        contentRef.innerHTML += `<p>${myData[dataIndex]}</p>`;
    }
}
