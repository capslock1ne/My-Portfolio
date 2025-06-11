document.addEventListener("DOMContentLoaded", function () {
    const cardContainer = document.getElementById("cardContainer");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentIndex = 0;
    const slideGap = 20;
    const items = cardContainer.children.length;
    const cardWidth = 320 + slideGap;


    nextBtn.addEventListener("click", function () {
        const maxIndex = cardContainer.children.length - 1;
        if (currentIndex < maxIndex) {
            currentIndex += items;
            cardContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
    });

    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex -= items;
            cardContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
    });
});


