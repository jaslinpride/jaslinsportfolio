document.addEventListener("DOMContentLoaded", function () {
    // Typewriter Effect for Services Title
    const text = "Services";
    const element = document.getElementById("services-typewriter");
    let index = 0;
  
    function typeWriter() {
      if (element && index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 120);
      }
    }
  
    typeWriter();
  
    // Scroll Reveal + Stagger Animation
    const reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
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
  
  