// Create an initial grid of 16x16 using a loop

const container = document.getElementById('grid-container');
container.style.gridTemplate = 'repeat(16, 1fr) / repeat(16, 1fr)'
container.style.maxWidth = 'calc(25px * 16)';

for (let i = 0; i <16; i++) {
    for (let j = 0; j <16; j++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.style.width = '25px';
        div.style.height = '25px';
        div.addEventListener('mouseover', function () {
            div.style.backgroundColor = 'black';
        });
        container.appendChild(div);
    }
}

const gridItems = document.querySelectorAll('.grid-item');
const clearButton = document.getElementById('clear');

clearButton.addEventListener('click', function() {
  gridItems.forEach(function(item) {
    item.style.backgroundColor = '';
  });
});


