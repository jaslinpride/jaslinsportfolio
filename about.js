document.addEventListener("DOMContentLoaded", function () {
    const text = "About Me";
    const element = document.getElementById("about-typewriter");
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 120); // Adjust typing speed if desired
        }
    }

    typeWriter();
});
