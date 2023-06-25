const grid = document.getElementById('grid');

for (let i=0; i < 100; i++) {
    const gridCell = document.createElement('div');
    gridCell.classList.add('grid-cell');
    grid.appendChild(gridCell);
}


//stores the colors as a nodelist in the variable "colorElement"
const colorElement = document.querySelectorAll('#palette .color');

//using a forEach loop we are adding an eventListener that assigns the value of the
//background color to the currrent-color box
colorElement.forEach(chosenColor => {
    chosenColor.addEventListener('click', function() {
        const color = this.style.background;

        const currentColorElement = document.querySelector('#current-color');
        currentColorElement.style.background = color;
    });
});

const gridElement = document.querySelectorAll('.cell');

gridElement.forEach(gridBox => {
    gridBox.addEventListener('click', function() {
        const currentColorElement = document.querySelector('#current-color');
        const backgroundColor = currentColorElement.style.background;

        this.style.background = backgroundColor;
    });
});