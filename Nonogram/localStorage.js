

const TOGGLE = "toggleButton"
let toggleBtn = ""

//Local Storage functions
function getLocalStorage(keyIn){
    return JSON.parse(localStorage.getItem(keyIn));   
}

function setLocalStorage(keyToSet,data){
    let JSONConverted = JSON.stringify(data)
    return localStorage.setItem(keyToSet,JSONConverted);
}

if (getLocalStorage(TOGGLE) != null) {
    toggleBtn = getLocalStorage(TOGGLE);
} else {
    setLocalStorage(TOGGLE, 0)
}