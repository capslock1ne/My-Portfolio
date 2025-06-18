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



  document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("modal");
    const msgBtn = document.getElementById("msg-btn");
    const cancelBtn = document.querySelector(".cancel-btn");

    msgBtn.addEventListener("click", function (){
         modal.classList.add("active");
    });
 
    cancelBtn.addEventListener("click", function(){
        modal.classList.remove("active");
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
          modal.classList.remove("active");
        }
      });
  });