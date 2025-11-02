// Smooth Scroll
document.documentElement.style.scrollBehavior = "smooth";

// ✅ Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("mobile-menu");

  if (btn && menu) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }
});

// ✅ Contact Form Validation
document.getElementById("contactForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.querySelector("input[type='text']").value.trim();
  let email = document.querySelector("input[type='email']").value.trim();
  let message = document.querySelector("textarea").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email.");
    return;
  }

  alert("Message sent successfully! ✅");
});
