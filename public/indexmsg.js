
  document.addEventListener("DOMContentLoaded", function () {


    const cancelBtn = document.querySelector(".cancelbtn-home");
    const popUp = document.querySelector(".pops-up-msg-container");

    msgBtn.addEventListener("click", function (){
         modal.classList.add("active");
         modal.style.display = "block";
         popUp.style.display = "none";
    });
 
    cancelBtn.addEventListener("click", function(){
        modal.classList.remove("active");
    });


 
  });



/* MESSAGE FORM */

document.addEventListener("DOMContentLoaded", function (){

const form = document.getElementById("messageForm");
const popUp = document.querySelector(".pops-up-msg-container");
const popMsg = document.getElementById("pop-up-message");

form.addEventListener("submit", async function (e) {
    e.preventDefault();
 
    const email = this.email.value;
    const message = this.lmsg.value;
  

  try {

    const req = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message})
    });

    const data = await req.json();


    const notify = "Message sent successfully! 🤗";
    if (popMsg && popUp) {
      popMsg.textContent = notify;
      popUp.style.display = "block";
      form.style.display = "none";
      popUp.classList.remove("fade-out");
       

       setTimeout(() => {
        popUp.classList.add("fade-out");
        form.style.display = "block";
        popUp.style.display ="none";
       },3000);
    }

  
    form.reset();
    
  } catch (error) {
    
     popMsg.textContent = "Failed to send.";
     
     console.log(error);
  }
    
});

});
