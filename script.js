document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector("#menu-btn");
  const nav = document.querySelector("nav");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (!section) {
      return;
    }

    if (nav && nav.classList.contains("active")) {
      nav.classList.remove("active");
    }

    setTimeout(() => {
      gsap.to(window, {
        duration: 0.5,
        scrollTo: {
          y: section,
          offsetY: 70,
        },
        ease: "power2.inOut",
      });
    }, 100);
  }

  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        scrollToSection(href);
      }
    });
  });

  const logoLink = document.querySelector(".logo a");
  if (logoLink) {
    logoLink.addEventListener("click", (e) => {
      e.preventDefault();
      scrollToSection("#home");
    });
  }

  const contactBtn = document.querySelector(".hero .btn button");
  if (contactBtn) {
    contactBtn.addEventListener("click", () => {
      scrollToSection("#contact");
    });
  }

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
