function generateDots(numDots, radius, waveClass, delayIncrement) {
    const waveContainer = document.querySelector(`.${waveClass}`);

    for (let i = 0; i < numDots; i++) {
        const angle = (i / numDots) * 2 * Math.PI;
        const x = radius * Math.cos(angle) + radius; // Ajuste al centro
        const y = radius * Math.sin(angle) + radius; // Ajuste al centro

        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;
        dot.style.animationDelay = `${i * delayIncrement}s`;

        waveContainer.appendChild(dot);
    }
}

// Llamada a la función para generar múltiples ondas
generateDots(20, 20, 'wave1', 0.01); 
generateDots(30, 30, 'wave2', 0.02); 
generateDots(40, 40, 'wave3', 0.04); 
generateDots(50, 50, 'wave4', 0.08);
generateDots(60, 60, 'wave5', 0.16); 
generateDots(70, 70, 'wave6', 0.32); 
generateDots(80, 80, 'wave7', 0.64);  

