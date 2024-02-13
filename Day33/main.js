//Function to generate clouds
function generateClouds(numclouds) {
    const cloudContainer = document.querySelector('.clouds');
    const frame = document.querySelector('.frame');
    const frameWidth = frame.offsetWidth;
    const frameHeight = frame.offsetHeight;
    const cloudWidth = 120; // Ancho de cada nube
    const cloudHeight = 100; // Alto de cada nube

    for (let i = 0; i < numclouds; i++) {
        const cloud = document.createElement('div');
        cloud.className = `cloud-${i + 1}`;
        
        // Calcular posiciones aleatorias dentro de los límites del contenedor frame
        const randomX = Math.random() * (frameWidth - cloudWidth);
        const randomY = Math.random() * (frameHeight - cloudHeight);
        
        // Establecer las posiciones
        cloud.style.left = `${randomX}px`;
        cloud.style.top = `${randomY}px`;
        
        cloudContainer.appendChild(cloud);
    }
}

generateClouds(15);
