const colors = ['#7dd8aa', '#47c087', '#126a48', '#11543a', '#07271c'];
const numCircles = 40;

let styles = '';
for (let i = 1; i <= numCircles; i++) {
    const delay = -(i - 1) * 0.25;
    const color = colors[(i - 1) % colors.length];
    styles += `.circle-${i} { animation: circle 10s ease-in-out ${delay}s infinite both; z-index: ${i}; border-color: ${color}; }\n`;
}

const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);


const frame = document.querySelector('.frame');
for (let i = 1; i <= numCircles; i++) {
    const circle = document.createElement('div');
    circle.className = `circle circle-${i}`;
    frame.appendChild(circle);
}