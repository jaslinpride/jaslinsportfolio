document.addEventListener("DOMContentLoaded", function () {
    const text = "Services";
    const element = document.getElementById("services-typewriter");
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 120); // Adjust speed as needed
        }
    }

    typeWriter();
});
