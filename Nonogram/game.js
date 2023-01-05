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
 */
function intermediateGrid() {
    let addBtn = '<button></button>'
    let output = `
                <div class="ten-by-ten-grid">
                ${addBtn.repeat(100)}
                </div>
    `
    document.getElementById("gameGridArea").innerHTML = output
}

intermediateGrid()


/* Making a matrix with names */


// function matrixGeneator() {
//     let intGrid = Array(INTERMEDIATE_ROWS).fill(Array(INTERMEDIATE_COLS).fill(BLANK))
//     for(let i=0; i < intGrid.length; i++) {
//         for(let j=0; j < intGrid.length; j++) {

//         }
//     }
// }

