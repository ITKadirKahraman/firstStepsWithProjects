let promError = false;

// promise == versprechen
function getPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("1");
            if(promError) {
                reject("hat nicht geklappt")
            }else {
                resolve("hat geklappt");
            }
        }, 2000);
    })
}

function getPromise2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("2");
            if(!promError) {
                reject("hat nicht geklappt")
            }else {
                resolve("hat geklappt");
            }
        }, 2000);
    })
}

function getPromise3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("3");
            if(promError) {
                reject("hat nicht geklappt")
            }else {
                resolve("hat geklappt");
            }
        }, 2000);
    })
}

// try catch with async and await
async function usePromiseTryCatch() {
    try {
        await getPromise();
        await getPromise2();
        await getPromise3();
        console.log("Start")
    } catch (error) {
        console.error(error);    
    }
    console.log("Ende")
}

// async und await
async function usePromiseAsyncAwait() {
    console.log("prom");
    let prom = await getPromise();
    console.log("prom2");
    console.log(prom);
}


// FIREBASE STORAGE
function getGoodPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("good");
            reject("done_good");
        }, 1000);
    })
}

function getBadPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("bad");
            reject("done_bad");
        }, 1000);
    })
}

function usePromise() {
    getGoodPromise().then(
        getBadPromise
    ).then (
        getGoodPromise
    ).then (
        (result) => {
            console.log(result);
        }
    ).catch((error) => {
        console.error(error);
    })
}
