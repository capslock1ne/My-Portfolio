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
    const popUp = document.querySelector(".pops-up-msg-container");

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



  document.addEventListener("DOMContentLoaded", function () {
          var typed = new Typed(".typing-text", {
            strings: ["Web Developer", "UI/UX Designer", "Problem Solver", "Tech Enthusiast"],
            typeSpeed: 50,
            backSpeed: 25,
            loop: true
          });
        });

        AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
          once: true,
        });



document.getElementById("scrollTopBtn").onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};


const menuOpen = document.getElementById("menuOpen");
const menuClose = document.getElementById("menuClose");
const navbarNav = document.getElementById("navbarNav");
const sidebarOverlay = document.getElementById("sidebarOverlay");

function openMenu() {
  navbarNav.classList.add("show");
  sidebarOverlay.classList.add("show");
  document.body.classList.add("sidebar-open");

  menuOpen.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  navbarNav.classList.remove("show");
  sidebarOverlay.classList.remove("show");
  document.body.classList.remove("sidebar-open");

  menuOpen.setAttribute("aria-expanded", "false");
}

menuOpen.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);
sidebarOverlay.addEventListener("click", closeMenu);

// Close when clicking a navigation link
navbarNav.querySelectorAll(".nav-link, .sidebar-contact a").forEach(link => {
  link.addEventListener("click", closeMenu);
});

// Close with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMenu();
  }
});