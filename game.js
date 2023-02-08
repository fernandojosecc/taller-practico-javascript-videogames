const canvas = document.querySelector('#game'); // Select the HTML element with id 'game' and store it in the constant variable 'canvas'.
const game = canvas.getContext('2d'); // Get the 2D rendering context for the canvas and store it in the constant variable 'game'.

// Add a 'load' event listener to the window object, which calls the 'startGame' function when the window is finished loading.
window.addEventListener('load',startGame);

// Define the 'startGame' function.
function startGame() {
    let canvasSize;

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
    const elementsSize = canvasSize / 10;
    
     // Log the values of 'canvasSize' and 'elementsSize' to the console for debugging purposes.
    console.log({canvasSize, elementsSize});

      // Set the font and text alignment for the 'game' context.
    game.font = elementsSize + 'px Verdana';
    game.textAlign = 'end';


       // Loop 10 times and draw a text element on the canvas for each iteration.
    for(let i=1;i<=10;i++){
        game.fillText(emojis['X'],elementsSize*i,elementsSize);
    }
    
    

    // window.innerHeight
    // window.innerWidth

    // game.fillRect(0,0,100,100);
    // game.clearRect(0,0,50,50);
    // game.clearRect(0,0,50,50);

    // game.font = '25px Verdana';
    // game.fillStyle = 'purple';
    // game.textAlign = 'left';
    // game.fillText('Platzi',100,100)

}