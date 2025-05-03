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

    // Smooth scroll for horizontal scroll container
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
});
