// index.js

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
  mainMenu.classList.remove("menu-visible");
  hamburgerIcon.style.display = "block";
  closeIcon.style.display = "none";
  isOpen = false;
}

menuToggle.addEventListener("click", () => {
  if (window.innerWidth <= 800) {
    isOpen ? closeMenu() : openMenu();
  }
});

document.addEventListener("click", (e) => {
  if (
    window.innerWidth <= 800 &&
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
    if (!mainMenu.classList.contains("menu-visible")) {
      mainMenu.style.top = "-100%";
    }
    hamburgerIcon.style.display = "block";
    closeIcon.style.display = "none";
    isOpen = false;
  }
});
