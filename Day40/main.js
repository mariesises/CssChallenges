document.addEventListener("DOMContentLoaded", function () {
    const imagesContainer = document.getElementById("imagesContainer");
    const rows = 3;
    const columns = 3;
    const totalImages = rows * columns;
    const imageUrls = [
        "https://i.pinimg.com/564x/de/3b/3a/de3b3ab9787b725b31e9723381747199.jpg",
        "https://i.pinimg.com/564x/aa/d4/d4/aad4d4d2e03a8ad99991a7a1e3854dac.jpg",
        "https://i.pinimg.com/564x/ca/77/64/ca77648a52f4f7cc93f47054e3fa9582.jpg",
        "https://i.pinimg.com/564x/72/93/f0/7293f09a5549393bf50f39dd92b4951b.jpg",
        "https://i.pinimg.com/564x/7b/7d/ce/7b7dceb4894c640c099897964bceac8d.jpg",
        "https://i.pinimg.com/564x/f9/99/18/f999184cdeaf3c679d76dde9655eab1e.jpg",
        "https://i.pinimg.com/564x/98/ae/2d/98ae2d616a8ec179674e607eaa036497.jpg",
        "https://i.pinimg.com/564x/6c/54/47/6c5447e63a41f865330e1538d33339ba.jpg",
        "https://i.pinimg.com/736x/e7/36/02/e736029c8e5ae9323035db2e1e666eb9.jpg"
    ];

    if (imageUrls.length < totalImages) {
        console.error("No hay suficientes URLs de imágenes proporcionadas.");
        return;
    }

    for (let i = 0; i < totalImages; i++) {
        const imageDiv = document.createElement("div");
        imageDiv.classList.add("image", `image-${i + 1}`);
        imageDiv.style.transformOrigin = `${(i % columns) / (columns - 1) * 100}% ${Math.floor(i / columns) / (rows - 1) * 100}%`;
        const img = document.createElement("img");
        img.src = imageUrls[i];
        img.alt = "";
        imageDiv.appendChild(img);
        imagesContainer.appendChild(imageDiv);
    }

    const images = document.querySelectorAll('.image');
    images.forEach(image => {
        image.addEventListener('click', function () {
            const isActive = image.classList.contains('active');
            images.forEach(p => {
                p.classList.remove('active');
                p.classList.remove('smalleer');
            });
            if (!isActive) {
                image.classList.add('active');
            } else {
                image.classList.add('smalleer');
            }
        });
    });
});
