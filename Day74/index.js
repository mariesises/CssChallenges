document.addEventListener('DOMContentLoaded', function () {
    const frame = document.getElementById('frame');
    const radios = frame.querySelectorAll('.input');
    const backgrounds = [
        "url('https://i.pinimg.com/564x/d0/f9/b2/d0f9b2d9c26c28682d76e1a6378c6b17.jpg')",
        "url('https://i.pinimg.com/564x/50/bd/7e/50bd7e478094b45ea341a4b3d2257e8b.jpg')",
        "url('https://i.pinimg.com/564x/85/42/2c/85422c41e0318d54fedcf497875d53be.jpg')",
        "url('https://i.pinimg.com/564x/de/3b/3a/de3b3ab9787b725b31e9723381747199.jpg')"
    ];
    let currentBackgroundIndex = 0;

    radios.forEach(function (radio, index) {
        radio.addEventListener('change', function () {
            frame.style.backgroundImage = backgrounds[index];
            currentBackgroundIndex = index;
        });
    });

    //To change the background just for click the frame
    frame.addEventListener('click', function () {
        currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
        frame.style.backgroundImage = backgrounds[currentBackgroundIndex];
    });
});