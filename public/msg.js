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

});