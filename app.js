let mode = 'draw';
const draw = document.querySelector('#draw');
draw.style.backgroundColor = '#3882F6';
draw.style.color = 'white';
const modeButtons = document.querySelectorAll('.mode');

function generateBoard(input) {
    const container = document.createElement('div');

    container.setAttribute('id', 'container');

    for (let i = 0; i < input * input; i++) {
        const cell = document.createElement('div');
        const side = 100 / input;
        cell.style.width = `${side}%`;
        cell.style.height = `${side}%`;
        cell.setAttribute('class', 'cell');
        cell.setAttribute('alpha', 0.1);
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'grey';
        })
        container.appendChild(cell);
        for (let button of modeButtons) {
            button.style.backgroundColor = 'white';
            button.style.color = '#3882F6';
        }
        mode = 'draw';
        draw.style.backgroundColor = '#3882F6';
        draw.style.color = 'white';
    };

    document.body.appendChild(container);
}

generateBoard(16);

reset = document.querySelector('#reset');

reset.addEventListener('click', () => {
    let input = 999;
    while (parseInt(input) > 100) {
        input = prompt("Enter board's cell per side (limited to 100). Leave blank to generate a 16x16 grid:");
    }
    if (input === '') {
        input = 16;
    }
    if (input !== null) {
        document.querySelector('#container').remove();
        generateBoard(input);
    }
})

function selectMode() {
    mode = this.id;
    for (let button of modeButtons) {
        button.style.backgroundColor = 'white';
        button.style.color = '#3882F6';
    }
    this.style.backgroundColor = '#3882F6';
    this.style.color = 'white';

    let cells = document.querySelectorAll('.cell');
    for (let cell of cells) {
        cell.addEventListener('mouseover', performMode);
    }
}

function performMode() {
    if (mode === 'draw') {
        this.style.backgroundColor = 'grey';
    } else if (mode === 'erase') {
        this.style.backgroundColor = 'white';
    } else if (mode === 'rainbow') {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    } else if (mode === 'translucent') {
        this.style.backgroundColor = `rgba(0, 0, 0, ${parseFloat(this.getAttribute('alpha'))})`;
        this.setAttribute('alpha', parseFloat(this.getAttribute('alpha')) + 0.1);
    }
}

for (let button of modeButtons) {
    button.addEventListener('click', selectMode)
}