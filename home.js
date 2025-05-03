document.addEventListener("DOMContentLoaded", function () {
    const text = "Creativity brewed, portfolio refined.";
    const element = document.getElementById("typewriter-text");
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100); // Typing speed in ms
        }
    }

    typeWriter();
});
