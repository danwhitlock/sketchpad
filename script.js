// Create an initial grid of 16x16 using a loop

const container = document.getElementById('grid-container');
let canvasSize = 16;
let gridItems = [];

// Generating the grid

function createGrid(size) {
  container.style.gridTemplate = `repeat(${size}, 1fr) / repeat(${size}, 1fr)`;
  container.style.maxWidth = `calc(25px * ${size})`;

// Clear the existing grid

while (container.firstChild) {
  container.firstChild.removeEventListener('mouseover', handleGridItemMouseOver)
  container.removeChild(container.firstChild);
}

for (let i = 0; i <16; i++) {
    for (let j = 0; j <16; j++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.style.width = '25px';
        div.style.height = '25px';
        div.addEventListener('mouseover', handleGridItemMouseOver);
        container.appendChild(div);
        gridItems.push(div);
    }
}
}

function handleGridItemMouseOver() {
  this.style.backgroundColor = 'black';
}


createGrid(canvasSize);





/* The above is not working as intended - the grid is generated but is not a square, and the grid container gets resized.  

This needs correcting so that if the users selects '50', the result is a grid of 50x50 divs within the same total container area as before.  In other words, the divs should change size to fit the container, not the other way around 

*/






// Re-setting / erasing the grid content

const clearButton = document.getElementById('clear');
const reSizeButton = document.getElementById('resize');

clearButton.addEventListener('click', function() {
  gridItems.forEach(function(item) {
    item.style.backgroundColor = '';
  });
});


reSizeButton.addEventListener('click', function() {
  const newSize = prompt("Enter a number between 16 and 100");
  const parsedSize = parseInt(newSize);

  if (!isNaN(parsedSize) && parsedSize >= 16 && parsedSize <= 100) {
    canvasSize = parsedSize;
    createGrid(canvasSize);
  } else {
    alert('Error - please choose a number between 16 and 100');
  }
  });
