// ---------------------------------------------
// ROLE TYPING EFFECT
// ---------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  
  const roles = [
    "FRONTEND DEVELOPER",
    "JAVA DEVELOPER",
    "UI/UX DESIGNER"
  ];

  const roleElement = document.getElementById("role-title-text");

  if (!roleElement) {
    console.error("ERROR: Element with ID 'role-title-text' not found.");
    return;
  }

  let roleIndex = 0;
  let charIndex = 0;

  const typingSpeed = 120;
  const eraseSpeed = 70;
  const holdTime = 1500;

  function type() {
    const current = roles[roleIndex];

    if (charIndex < current.length) {
      roleElement.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, holdTime);
    }
  }

  function erase() {
    const current = roles[roleIndex];

    if (charIndex > 0) {
      roleElement.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, eraseSpeed);
    } else {
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(type, 400);
    }
  }

  type();
});


// ---------------------------------------------
// NAVBAR HAMBURGER MENU
// ---------------------------------------------
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
  });
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (hamburger) hamburger.classList.remove('active');
        if (navMenu) navMenu.classList.remove('active');
    });
});

// ---------------------------------------------
// CONTACT FORM (EmailJS)
// ---------------------------------------------
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const params = {
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          service: document.getElementById("service").value,
          message: document.getElementById("message").value
      };

      emailjs.send("service_9hm6r6j", "template_thfzut9", params)
      .then(function(response) {
          alert("Message sent successfully!");
      })
      .catch(function(error) {
          alert("Failed to send message. Check console.");
          console.error(error);
      });
  });
}
