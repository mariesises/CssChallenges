document.addEventListener("DOMContentLoaded", function () {
    var base = document.querySelector(".base");
    var light = document.querySelector(".light");

    base.addEventListener("mouseenter", function () {
        base.style.fill = "#4b4b4b";
        light.classList.add("off");
    });

    base.addEventListener("mouseleave", function () {
        base.style.fill = "#fff35c";
        light.classList.remove("off");
    });
});
