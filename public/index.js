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
    const cancelBtn = document.querySelector(".cancelbtn");
    const closeBtn = document.querySelector(".close");

    msgBtn.addEventListener("click", function (){
         modal.classList.add("active");
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


form.addEventListener("submit", async function (e) {
    e.preventDefault();


    const email = this.email.value;
    const message = this.lmsg.value;

  try {

    const req = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message })
    });

    const result = await req.json();
    alert(result.message || "Message sent successfully!");
    
  } catch (error) {
    
     alert("Something went wrong, Please try again.");
     console.log(error);
  }
    
});

});s