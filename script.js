let currentIMG = document.querySelector("#img-carousel img");
let transitionOverlay = document.getElementById("transition-overlay");

function rotateCarousel() {
    let nextNum = parseInt(currentIMG.src.match(/\d+/)) + 1;
    currentIMG.src = currentIMG.src.replace(/\d+/, nextNum);
}

function restartCarousel() {
    currentIMG.src = currentIMG.src.replace(/\d+/, 1);
}

setInterval(function() {
    rotateCarousel();
}, 5000);
