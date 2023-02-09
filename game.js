const canvas = document.querySelector('#game'); // Select the HTML element with id 'game' and store it in the constant variable 'canvas'.
const game = canvas.getContext('2d'); // Get the 2D rendering context for the canvas and store it in the constant variable 'game'.

// Add a 'load' event listener to the window object, which calls the 'setCanvasSize' function when the window is finished loading.
window.addEventListener('load',setCanvasSize);
window.addEventListener('resize',setCanvasSize);

let canvasSize;
     
let elementsSize;// = canvasSize / 10;

function setCanvasSize(){
    // Determine the size of the canvas based on the dimensions of the window.
if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.8;
}else{
    canvasSize = window.innerHeight * 0.8;
}

  // Set the width and height of the canvas to the calculated 'canvasSize'.
canvas.setAttribute('width',canvasSize)
canvas.setAttribute('height', canvasSize)

// Calculate the size of the elements to be drawn on the canvas.
elementsSize = canvasSize/10;
startGame();
}

// Define the 'startGame' function.
function startGame() {


     // Log the values of 'canvasSize' and 'elementsSize' to the console for debugging purposes.
    console.log({canvasSize, elementsSize});

      // Set the font and text alignment for the 'game' context.
    game.font = elementsSize + 'px Verdana';
    game.textAlign = 'end';

    const map= maps[2];
    const mapRows = map.trim().split('\n');
    const mapRowCols = mapRows.map(row=>row.trim().split(''));
    console.log({map,mapRows,mapRowCols});

       // Loop 10 times and draw a text element on the canvas for each iteration.
    for(let row=1;row<=10;row++){
        for(let column = 1;column<=10;column++){
            game.fillText(emojis[mapRowCols[row-1][column-1]],elementsSize*column,elementsSize*row);
        }
        
    }


}

