const inputs = document.querySelectorAll(".input");
const button = document.querySelector(".login__button");
const main = document.querySelector("main");
const backgroundMusic = new Audio("src/music/enemy.mp3");
let isPlaying = false;

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;

    span.classList.add("span-active");
}

const handleFocusOut = ({ target }) => {
    if (target.value === "") {
        const span = target.previousElementSibling;

        span.classList.remove("span-active");
    }
}

const handleChange = () => {
    const [username, password] = inputs;

    if (username.value && password.value.length >= 8) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

inputs.forEach(input => input.addEventListener("focus", handleFocus));
inputs.forEach(input => input.addEventListener("focusout", handleFocusOut));
inputs.forEach(input => input.addEventListener("input", handleChange));

main.addEventListener("click", () => {
    if (!isPlaying && document.body.scrollWidth >= 800) {
        backgroundMusic.play();
        isPlaying = true;
    }
});

window.addEventListener("resize", () => {
    if (document.body.scrollWidth < 800) {
        backgroundMusic.pause();
        isPlaying = false
    } else {
        if (!isPlaying) {
            backgroundMusic.play();
            isPlaying = true;
        }
    }
});