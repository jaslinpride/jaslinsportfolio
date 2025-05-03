document.addEventListener("DOMContentLoaded", function () {
    // Typewriter Effect for Contact Title
    const text = "Contact";
    const element = document.getElementById("contact-typewriter");
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
    const reveals = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("show");
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
  
    // Mobile Nav Toggle (Matching Services Page Style)
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");
  
    if (navToggle && navMenu) {
      navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("open");
      });
    }
  
    // Optional Tilt Effect on Contact Cards
    const contactCards = document.querySelectorAll(".contact-card");
    contactCards.forEach(card => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * 5;
        const rotateY = ((x - centerX) / centerX) * -5;
  
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
      });
  
      card.addEventListener("mouseleave", () => {
        card.style.transform = 'rotateX(0) rotateY(0) scale(1)';
      });
    });
  });
  