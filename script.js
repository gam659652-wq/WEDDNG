const envelope = document.getElementById("envelope");
const button = document.getElementById("openBtn");

let opened = false;

button.addEventListener("click", () => {

    if (opened) return;

    opened = true;

    envelope.classList.add("open");

    button.innerHTML = "نتشرف بحضوركم 🤍";

    button.disabled = true;

    createSparkles();

});

function createSparkles() {

    for (let i = 0; i < 40; i++) {

        const sparkle = document.createElement("span");

        sparkle.className = "sparkle";

        sparkle.style.left = Math.random() * window.innerWidth + "px";

        sparkle.style.top = Math.random() * window.innerHeight + "px";

        sparkle.style.animationDelay = (Math.random() * 2) + "s";

        document.body.appendChild(sparkle);

        setTimeout(() => {

            sparkle.remove();

        }, 3000);

    }

}
