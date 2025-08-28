document.addEventListener("DOMContentLoaded", function () {
  const cardContainer = document.getElementById("cardContainer");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0;
  const slideGap = 20;
  const cardWidth = 320 + slideGap;
  const totalItems = cardContainer.children.length;

  const step = 1; 

  nextBtn.addEventListener("click", function () {
    const maxIndex = totalItems - step;
    if (currentIndex < maxIndex) {
      currentIndex += step;
      cardContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
  });

  prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex -= step;
      cardContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
  });
});



  document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("modal");
    const msgBtn = document.getElementById("msg-btn");
    const cancelBtn = document.querySelector(".cancelbtn");
    const closeBtn = document.querySelector(".close");

    msgBtn.addEventListener("click", function (){
         modal.classList.add("active");
         modal.style.display = "block";
         popUp.style.display = "none";
    });
 
    cancelBtn.addEventListener("click", function(){
        modal.classList.remove("active");
    });

    closeBtn.addEventListener("click", function(){
        modal.classList.remove("active");
    });


    window.addEventListener("click", function (event) {
        if (event.target === modal) {
          modal.classList.remove("active");
        }
      });
  });

  /* MESSAGE FORM */

document.addEventListener("DOMContentLoaded", function (){

const form = document.getElementById("messageForm");
const modal = document.getElementById("modal");
const popUp = document.querySelector(".pops-up-msg-container");
const popMsg = document.getElementById("pop-up-message");


form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_8m5yrqd", "YOUR_TEMPLATE_ID", form)
    .then(() => {
      popMsg.textContent = "Message sent successfully! 🤗";
      popUp.style.display = "block";
      form.reset();
    })
    .catch((error) => {
      console.log("FAILED...", error);
      popMsg.textContent = "Failed to send.";
    });
});


});