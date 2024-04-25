const cols = document.querySelectorAll('.col');

function generRandColor() {
    const hexSymb = '0123456789ABCDEF';
    let randColor = '';
    for (let i = 0; i < 6; i++) {
        randColor += hexSymb[Math.floor(Math.random() * hexSymb.length)];
    }
    return '#' + randColor;
}

function setRandColors() {
    cols.forEach(col => {
        const text = col.querySelector('h2');
        const color = generRandColor();
        text.textContent = color;
        col.style.background = color;
    })
}

setRandColors();

