const canvas = document.querySelector('#game'); // Select the HTML element with id 'game' and store it in the constant variable 'canvas'.
const game = canvas.getContext('2d'); // Get the 2D rendering context for the canvas and store it in the constant variable 'game'.
const btnUp = document.querySelector('#Up');
const btnLeft = document.querySelector('#Left');
const btnRight = document.querySelector('#Right');
const btnDown = document.querySelector('#Down');

// Add a 'load' event listener to the window object, which calls the 'setCanvasSize' function when the window is finished loading.
window.addEventListener('load',setCanvasSize);
window.addEventListener('resize',setCanvasSize);

let canvasSize;
let elementsSize;// = canvasSize / 10;

const playerPosition = {
    x: undefined,
    y: undefined,
}

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

    const map= maps[0];
    const mapRows = map.trim().split('\n');
    const mapRowCols = mapRows.map(row=>row.trim().split(''));
    console.log({map,mapRows,mapRowCols});

    mapRowCols.forEach((row, rowI ) => {
        row.forEach((col,colI) =>{
            const emoji = emojis[col];
            const posX = elementsSize *(colI+1);
            const posY = elementsSize *(rowI+1);

            if(col=='O'){
                playerPosition.x = posX;
                playerPosition.y = posY;

                console.log(playerPosition);
            }

            game.fillText(emoji,posX,posY);
        });
    });
}

function movePlayer(){
    game.fillText(emojis['PLAYER'],playerPosition.x,playerPosition.y)
}

window.addEventListener('keydown',moveByKeys);
btnUp.addEventListener('click',moveUp);
btnLeft.addEventListener('click',moveLeft);
btnRight.addEventListener('click',moveRight);
btnDown.addEventListener('click',moveDown);

function moveByKeys(event){
    if(event.key=='ArrowUp') moveUp();
    else if(event.key == 'ArrowLeft') moveLeft();
    else if(event.key == 'ArrowRight') moveRight();
    else if(event.key == 'ArrowDown') moveDown();
}
function moveUp(){
    console.log('Me quiero mover hacia arriba');
    playerPosition.y -=elementsSize;
    movePlayer();
}
function moveLeft(){
    console.log('Me quiero mover hacia izquierda');
}
function moveRight(){
    console.log('Me quiero mover hacia derecha');
}
function moveDown(){
    console.log('Me quiero mover hacia abajo');
}


