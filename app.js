const cols = document.querySelectorAll('.col');

function generRandColor() {
    const hexSymb = '0123456789ABCDEF';
    let randColor = '';
    for (let i = 0; i < 6; i++) {
        randColor += hexSymb[Math.floor(Math.random() * hexSymb.length)];
    }
    return '#' + randColor;
}

document.addEventListener('keydown', event => {
    if (event.code === 'Space') {
        setRandColors();
    }
})

document.addEventListener('click', event =>{
    const type = event.target.dataset.type;
    if (type === 'lock') {
      const node =
        event.target.tagName.toLowerCase() === 'i'
          ? event.target
          : event.target.children[0]

      node.classList.toggle('fa-unlock-keyhole');
      node.classList.toggle('fa-lock');
    }
})

function setRandColors() {
    cols.forEach(col => {
        const text = col.querySelector('h2');
        const btn = col.querySelector('button')
        const color = generRandColor();
        text.textContent = color;
        col.style.background = color;
        setColorText(text, color);
        setColorText(btn, color);
    })
}

function setColorText(text, color) {
    const lumi = chroma(color).luminance();
    text.style.color = lumi > 0.5 ? 'black' : 'white';
}

setRandColors();