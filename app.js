function generateBoard(input) {
    const container = document.createElement('div');

    container.setAttribute('id', 'container');

    for (let i = 0; i < input * input; i++) {
        const cell = document.createElement('div');
        const side = 100 / input;
        cell.style.width = `${side}%`;
        cell.style.height = `${side}%`;
        cell.setAttribute('class', 'cell');
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'grey';
        })
        container.appendChild(cell);
    };

    document.body.appendChild(container);
}

generateBoard(16);

button = document.querySelector('button');

button.addEventListener('click', () => {
    let input = 999;
    while (input > 100) {
        input = prompt("Enter board's cell per side (limited to 100):");
    }
    document.querySelector('#container').remove();
    generateBoard(input);
})