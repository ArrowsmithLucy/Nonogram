/* This is a JS file used for the GAME-GRID AREA ONLY */
/* Buttons between pages will be on a seperate file */

/* Global Values */
const INTERMEDIATE_ROWS = 10;
const INTERMEDIATE_COLS = 10;
const BLANK = 0;
const FILL = 1;
const CROSS = 2;




/**
 * Function: Generate 10x10 grid
 * 100 is the size of the grid rows*columns
 */
function intermediateGrid() {
    let output = ""
    for(let i=1; i <= 100; i++) {
        output += `<button class="square" onclick="toggle(${i})" value="${i}" ></button>`
    }
    document.getElementById("tenTenGrid").innerHTML = output
}


intermediateGrid()


function fill(i) {
    let j = i-1
    let btnValue = document.getElementsByTagName("button")[j]

    if(btnValue.classList.contains("fill")) {
        return btnValue.classList.remove("fill")
    }

    if(btnValue.classList.contains("cross")) {
        btnValue.classList.remove("cross")
    }
    
    btnValue.classList.add("fill")
    
}

function cross(i) {
    let j = i-1
    let btnValue = document.getElementsByTagName("button")[j]
    
    if(btnValue.classList.contains("cross")) {
        return btnValue.classList.remove("cross")
    }

    if(btnValue.classList.contains("fill")) {
        btnValue.classList.remove("fill")
    }
    
    btnValue.classList.add("cross")
    
}


function toggle(i) {
    let toggleSwitch = getLocalStorage(TOGGLE)
    // if (toggleSwitch == 0) {
    //     //background colour is blue
    //     //remove fill/cross classes
    // }
    if (toggleSwitch == 1) {
        console.log(getLocalStorage(TOGGLE))
        fill(i)
    }
    else if (toggleSwitch == 2) {
        console.log(getLocalStorage(TOGGLE))
        cross(i)
    }
}


function toggleFill() {
    setLocalStorage(TOGGLE, 1)
}

function toggleCross() {
    setLocalStorage(TOGGLE, 2)
}