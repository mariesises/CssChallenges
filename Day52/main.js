function generateDots(numDots, radius, waveClass) {
    const waveContainer = document.querySelector(`.${waveClass}`);

    for (let i = 0; i < numDots; i++) {
        const angle = (i / numDots) * 6 * Math.PI; 
        const depth = i / numDots; 

        // Posición ajustada de los puntos más cerca del centro
        const x = (radius * Math.cos(angle)); // Cambiado para usar un radio fijo
        const y = (radius * Math.sin(angle)); // Cambiado para usar un radio fijo

        // Creamos el punto
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.style.left = `${x}px`; 
        dot.style.top = `${y}px`; 
        dot.style.width = `${2 * (5 - depth)}px`;  
        dot.style.height = `${2 * (5 - depth)}px`;  
        dot.style.opacity = `0`; 
        dot.style.animationDelay = `${i * 0.03}s`; 

        waveContainer.appendChild(dot);
    }
}

// Aumentar el número de olas y puntos
generateDots(10, 30, 'wave1'); 
generateDots(140, 50, 'wave2'); 
generateDots(160, 90, 'wave3'); 
generateDots(180, 120, 'wave4');
generateDots(200, 150, 'wave5');
generateDots(220, 180, 'wave6');
generateDots(240, 200, 'wave7');
generateDots(260, 230, 'wave8');
generateDots(280, 280, 'wave9');
generateDots(300, 300, 'wave10');
generateDots(320, 320, 'wave11');
generateDots(340, 340, 'wave12');
generateDots(360, 360, 'wave13');
generateDots(380, 380, 'wave14');
generateDots(400, 400, 'wave15');
