let correctCodes = {
    1: "1234",
    2: "5678",
    3: "2222",
    4: "9999",
    5: "0000"
};

document.getElementById("startButton").addEventListener("click", () => {
    document.getElementById("startButton").classList.add("hidden");
    document.getElementById("codeContainer").classList.remove("hidden");

    let music = document.getElementById("backgroundMusic");
    music.volume = 0.5;
    music.play();
});

function checkCode(field) {
    let input = document.getElementById("code" + field).value;
    let resultField = document.getElementById("result" + field);

    if (input === correctCodes[field]) {
        resultField.style.color = "lime";
        resultField.textContent = "Code korrekt!";
    } else {
        resultField.style.color = "red";
        resultField.textContent = "Code inkorrekt!";
    }
}
