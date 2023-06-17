// Set container size

const container = document.getElementById('grid-container');
container.style.width = '500px';
container.style.height = '500px';

let canvasSize = 16;
let gridItems = [];

// Generate the grid

function createGrid(size) {
  const gridSize = size * size;

// Clear the existing grid

  while (container.firstChild) {
    container.firstChild.removeEventListener('mouseover', mouseoverEffect)
    container.removeChild(container.firstChild);
  }

  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  const itemSize = parseInt(container.style.width) / size;

  for (let i = 0; i < gridSize; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    div.style.width = `${itemSize}px`;
    div.style.height = `${itemSize}px`;
    div.addEventListener('mouseover', mouseoverEffect);
    container.appendChild(div);
    gridItems.push(div);
  }
}


function mouseoverEffect() {
  this.style.backgroundColor = 'black';
}


createGrid(canvasSize);

// Re-setting / erasing the grid content

const clearButton = document.getElementById('clear');
const reSizeButton = document.getElementById('resize');

clearButton.addEventListener('click', function() {
  gridItems.forEach(function(item) {
    item.style.backgroundColor = '';
  });
});

// using square root to work out columns and rows - there might be a simpler way?

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
