const menuToggle = document.getElementById("menu-toggle");
const mainMenu = document.getElementById("mainMenu");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");

mainMenu.classList.add("menu-transition");

let isOpen = false;

function openMenu() {
  mainMenu.classList.add("menu-visible");
  mainMenu.style.top = "0";
  hamburgerIcon.style.display = "none";
  closeIcon.style.display = "block";
  isOpen = true;
}

function closeMenu() {
  mainMenu.style.top = "-100%";
  hamburgerIcon.style.display = "block";
  closeIcon.style.display = "none";
  isOpen = false;
}

menuToggle.addEventListener("click", () => {
  isOpen ? closeMenu() : openMenu();
});

document.addEventListener("click", (e) => {
  if (
    isOpen &&
    !mainMenu.contains(e.target) &&
    !menuToggle.contains(e.target)
  ) {
    closeMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 800) {
    mainMenu.style.top = "0";
    hamburgerIcon.style.display = "none";
    closeIcon.style.display = "none";
    isOpen = false;
  } else {
    mainMenu.style.top = "-100%";
    hamburgerIcon.style.display = "block";
    closeIcon.style.display = "none";
    isOpen = false;
  }
});

// Scroll animation for sections
const sections = document.querySelectorAll('.hidden');
window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.8;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add('show');
    } else {
      section.classList.remove('show');
    }
  });
});

// Slider controls
function slideLeft() {
  const slider = document.getElementById("slider");
  slider.scrollBy({
    left: -400,
    behavior: "smooth"
  });
}

function slideRight() {
  const slider = document.getElementById("slider");
  slider.scrollBy({
    left: 400,
    behavior: "smooth"
  });
}
``

