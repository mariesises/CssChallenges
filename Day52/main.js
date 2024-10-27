function generateDots(numDots, radius, waveClass, delayIncrement) {
    const waveContainer = document.querySelector(`.${waveClass}`);

    for (let i = 0; i < numDots; i++) {
        const angle = (i / numDots) * 6 * Math.PI; 
        const depth = i / numDots; 

        // Posición ajustada de los puntos más cerca del centro
        const x = (radius * depth * Math.cos(angle));  
        const y = (radius * depth * Math.sin(angle));  

        // Creamos el punto
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;
        dot.style.width = `${10 * (1 - depth)}px`;  
        dot.style.height = `${10 * (1 - depth)}px`;  
        dot.style.opacity = `${1 - depth}`; 
        dot.style.animationDelay = `${i * delayIncrement}s`;

        waveContainer.appendChild(dot);
    }
}


generateDots(60, 70, 'wave1', 0.1); 
generateDots(60, 85, 'wave2', 0.3); 
generateDots(60, 90, 'wave3', 0.4); 
generateDots(60, 105, 'wave4', 0.5);
generateDots(60, 125, 'wave5', 0.6);
generateDots(60, 145, 'wave6', 0.7);
generateDots(60, 165, 'wave7', 0.8);
generateDots(60, 185, 'wave8', 0.9);