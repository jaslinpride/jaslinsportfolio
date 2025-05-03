document.addEventListener("DOMContentLoaded", function () {
    // 1. Typewriter Effect
    const text = "Creativity brewed, portfolio refined.";
    const element = document.getElementById("typewriter-text");
    let index = 0;
  
    function typeWriter() {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
      }
    }
  
    typeWriter();
  
    // 2. Coffee Sound Effects on Hover
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
  
    // 3. GitHub Contributions Count (last 12 months)
    const username = "jaslinpride";
    fetch(`https://api.github.com/users/${username}/events/public`)
      .then((response) => response.json())
      .then((events) => {
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  
        const contributions = events.filter((event) => {
          const eventDate = new Date(event.created_at);
          return eventDate >= oneYearAgo;
        }).length;
  
        const detailPara = document.createElement("p");
        detailPara.innerHTML = `<strong>${contributions} contributions in the last year</strong>`;
        const calendar = document.querySelector(".github-calendar");
        if (calendar) {
          calendar.insertBefore(detailPara, calendar.querySelector("img"));
        }
      })
      .catch((err) => console.error("Failed to load GitHub contributions:", err));
  
    // 4. Scroll Reveal Animation
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
  
    // 5. Mobile Oval Menu Toggle
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");
  
    if (navToggle && navMenu) {
      navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("open");
      });
    }
  });
  