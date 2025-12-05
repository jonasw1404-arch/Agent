const startButton = document.getElementById("startButton");
const startScreen = document.getElementById("startScreen");
const codeContainer = document.getElementById("codeContainer");
const music = document.getElementById("bgMusic");

// Richtige Codes → hier ändern
const correctCodes = {
    1: "1234",
    2: "5678",
    3: "9999",
    4: "0000",
    5: "2468"
};

startButton.addEventListener("click", () => {
    startScreen.style.display = "none";
    codeContainer.style.display = "flex";
    music.volume = 0.5;
    music.play();
});

function checkCode(number) {
    const input = document.getElementById("code" + number).value;
    const result = document.getElementById("result" + number);

    if (input === correctCodes[number]) {
        result.textContent = "✔ Code korrekt";
        result.style.color = "lightgreen";
    } else {
        result.textContent = "✖ Code falsch";
        result.style.color = "red";
    }
}
