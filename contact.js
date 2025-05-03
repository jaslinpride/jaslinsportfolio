document.addEventListener("DOMContentLoaded", function () {
    const text = "Contact";
    const element = document.getElementById("contact-typewriter");
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 120); // Adjust speed if needed
        }
    }

    typeWriter();
});
