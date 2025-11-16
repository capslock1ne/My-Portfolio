document.addEventListener("DOMContentLoaded", function () {
  // Modal elements
  const modal = document.getElementById("modal");
  const msgBtn = document.getElementById("msg-btn");
  const cancelBtn = document.querySelector(".cancelbtn");
  const closeBtn = document.querySelector(".close");
  const popUp = document.querySelector(".pops-up-msg-container");
  const form = document.getElementById("messageForm");
  const popMsg = document.getElementById("pop-up-message");

  // Make sure button exists
  if (msgBtn) {
    msgBtn.addEventListener("click", function () {
      modal.classList.add("active");
      modal.style.display = "block";
      popUp.style.display = "none";
    });
  } else {
    console.warn("⚠ ERROR: #msg-btn not found in HTML");
  }

  cancelBtn?.addEventListener("click", function () {
    modal.classList.remove("active");
  });

  closeBtn?.addEventListener("click", function () {
    modal.classList.remove("active");
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.classList.remove("active");
    }
  });

  // Form submit
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = this.email.value;
    const message = this.lmsg.value;

    try {
      const req = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      const data = await req.json();

      const notify = "Message sent successfully! 🤗";

      popMsg.textContent = notify;
      popUp.style.display = "block";
      form.style.display = "none";
      popUp.classList.remove("fade-out");

      setTimeout(() => {
        popUp.classList.add("fade-out");
        form.style.display = "block";
        popUp.style.display = "none";
      }, 3000);

      form.reset();
    } catch (error) {
      popMsg.textContent = "Failed to send.";
      console.log(error);
    }
  });
});
