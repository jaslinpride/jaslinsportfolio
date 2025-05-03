document.addEventListener("DOMContentLoaded", function () {
    const text = "Resume";
    const element = document.getElementById("resume-typewriter");
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 120); // Typing speed in ms
        }
    }

    typeWriter();
});
