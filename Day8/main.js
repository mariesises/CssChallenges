//Function to generate bubbles
function generateBubbles(numBubbles) {
    const bubbleContainer = document.querySelector('.bubbles')
    for (let i = 0; i <= numBubbles; i++) {
        const bubbl = document.createElement('div');
        bubbl.className = `bubble-${i}`;
        bubbleContainer.appendChild(bubbl);
        console.log(bubbl.className)
    }
}

//Function to generate sparkles
function generateSparkles(numSparkles) {
    const sparklesContainer = document.querySelector('.sparkles')
    for (let i = 0; i <= numSparkles; i++) {
        const spark = document.createElement('div');
        spark.className = `sparkle-${i}`;
        sparklesContainer.appendChild(spark);
        console.log(spark.className)
    }
}

//Calls
generateBubbles(8);
generateSparkles(16);

