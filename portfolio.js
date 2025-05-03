document.addEventListener("DOMContentLoaded", function () {
    const text = "Portfolio";
    const element = document.getElementById("portfolio-typewriter");
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 120); // Adjust speed as desired
        }
    }

    typeWriter();
});
