/** @format */

// Wait for DOM and GSAP to be loaded
document.addEventListener("DOMContentLoaded", function () {
  // Menu Button Toggle
  const menuBtn = document.querySelector("#menu-btn");
  const nav = document.querySelector("nav");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  // Close menu when navigation link is clicked
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });

  // GSAP Smooth Scrolling for all anchor links
  const allLinks = document.querySelectorAll('a[href^="#"]');
  allLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Use GSAP for smooth scroll animation
        gsap.to(window, {
          duration: 0.8,
          scrollTo: {
            y: targetElement,
            autoKill: true,
          },
          ease: "power2.inOut",
        });

        // Close mobile menu if open
        if (nav) {
          nav.classList.remove("active");
        }
      }
    });
  });

  // Contact Me button in hero section
  const contactMeBtn = document.querySelector(".hero .btn button");
  if (contactMeBtn) {
    contactMeBtn.addEventListener("click", () => {
      const contactSection = document.querySelector("#contact");
      if (contactSection) {
        gsap.to(window, {
          duration: 0.8,
          scrollTo: {
            y: contactSection,
            autoKill: true,
          },
          ease: "power2.inOut",
        });

        if (nav) {
          nav.classList.remove("active");
        }
      }
    });
  }

  // Typewriter Animation
  const skillText = document.getElementById("skill-text");

  if (skillText) {
    const skills = ["Web Developer", "Python Programmer"];
    let skillIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 80;

    function type() {
      const currentSkill = skills[skillIndex];

      if (isDeleting) {
        skillText.textContent = currentSkill.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 60;
      } else {
        skillText.textContent = currentSkill.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 80;
      }

      if (!isDeleting && charIndex === currentSkill.length) {
        typingSpeed = 1600;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        skillIndex = (skillIndex + 1) % skills.length;
        typingSpeed = 300;
      }

      setTimeout(type, typingSpeed);
    }

    type();
  }
});
