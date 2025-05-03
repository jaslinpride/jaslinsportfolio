document.addEventListener("DOMContentLoaded", function () {
    // 1. Typewriter Effect
    const text = "About Me";
    const element = document.getElementById("about-typewriter");
    let index = 0;
  
    function typeWriter() {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 120);
      }
    }
  
    typeWriter();
  
    // 2. Coffee Sound Effects on Icon Hover
    const iconImages = document.querySelectorAll(".icons img");
  
    iconImages.forEach((img) => {
      const soundFile = img.getAttribute("data-sound");
      if (soundFile) {
        const audio = new Audio(soundFile);
        img.addEventListener("mouseenter", () => {
          audio.currentTime = 0;
          audio.play();
        });
      }
    });
  
    // 3. Scroll Reveal Animation
    const revealElements = document.querySelectorAll(".reveal");
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
  
    revealElements.forEach((el) => observer.observe(el));
  
    // 4. Mobile Nav Toggle
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");
  
    if (navToggle && navMenu) {
      navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("open");
      });
    }
  });
  