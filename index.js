document.addEventListener("DOMContentLoaded", function () {
    const cardContainer = document.getElementById("cardContainer");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentIndex = 0;
    const cardWidth = 320;

    nextBtn.addEventListener("click", function () {
        const maxIndex = cardContainer.children.length - 1;
        if (currentIndex < maxIndex) {
            currentIndex++;
            cardContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
    });

    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            cardContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
    });
});


