// Typewriter Effect for Portfolio Title
document.addEventListener("DOMContentLoaded", function () {
    const text = "Portfolio";
    const element = document.getElementById("portfolio-typewriter");
    let index = 0;
  
    function typeWriter() {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 120);
      }
    }
  
    typeWriter();
  
    // Horizontal scroll for course section
    const scrollContainer = document.querySelector('.course-scroll-container');
    const scrollLeftBtn = document.querySelector('.scroll-button.left');
    const scrollRightBtn = document.querySelector('.scroll-button.right');
  
    if (scrollContainer && scrollLeftBtn && scrollRightBtn) {
      scrollLeftBtn.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
      });
      scrollRightBtn.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
      });
    }
  
    // Coffee Sound Effects on Social Icons
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
  