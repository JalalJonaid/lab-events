const colorElement = document.querySelectorAll('#palette .color');

colorElement.forEach(chosenColor => {
    chosenColor.addEventListener('click', function() {
        const color = this.style.background;

        const currentColorElement = document.querySelector('#current-color');
        currentColorElement.style.background = color;
    });
});