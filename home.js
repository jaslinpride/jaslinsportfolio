document.addEventListener("DOMContentLoaded", function () {
    // Typewriter Effect
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

    // Coffee Sound Effects on Icon Hover
    const iconImages = document.querySelectorAll(".icons img");

    iconImages.forEach(img => {
        const soundFile = img.getAttribute("data-sound");
        if (soundFile) {
            const audio = new Audio(soundFile);
            img.addEventListener("mouseenter", () => {
                audio.currentTime = 0;
                audio.play();
            });
        }
    });

    // Fetch GitHub Contributions Count
    const username = "jaslinpride";
    fetch(`https://api.github.com/users/${username}/events/public`)
        .then(response => response.json())
        .then(events => {
            const oneYearAgo = new Date();
            oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

            const contributions = events.filter(event => {
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
        .catch(err => console.error("Failed to load GitHub contributions:", err));
});
