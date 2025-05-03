document.addEventListener("DOMContentLoaded", function () {
    // Typewriter Effect for Resume Title
    const text = "Resume";
    const element = document.getElementById("resume-typewriter");
    let index = 0;
  
    function typeWriter() {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 120);
      }
    }
  
    typeWriter();
  
    // Scroll Reveal Animation for Elements with .reveal
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('show');
          }, index * 150);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
  
    reveals.forEach(reveal => observer.observe(reveal));
  
    // Scrollable Resume Viewer Arrows
    const slider = document.getElementById("slider");
    const leftBtn = document.querySelector(".arrow.left");
    const rightBtn = document.querySelector(".arrow.right");
  
    if (slider && leftBtn && rightBtn) {
      leftBtn.addEventListener("click", () => {
        slider.scrollBy({ left: -400, behavior: "smooth" });
      });
  
      rightBtn.addEventListener("click", () => {
        slider.scrollBy({ left: 400, behavior: "smooth" });
      });
    }
  
    // Coffee Sound Effects on Icon Hover
    const iconImages = document.querySelectorAll(".icons img");
  
    iconImages.forEach(img => {
      const soundFile = img.getAttribute("data-sound");
      if (soundFile) {
        const audio = new Audio(soundFile);
        img.addEventListener("mouseenter", () => {
          audio.currentTime = 0;
          audio.play();
        });
      }
    });
  
    // Mobile Nav Toggle
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");
  
    if (navToggle && navMenu) {
      navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("open");
      });
    }
  });
  