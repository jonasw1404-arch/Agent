document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("checkButton");
    const input = document.getElementById("codeInput");
    const message = document.getElementById("message");
    const music = document.getElementById("backgroundMusic");

    // Funktion beim Klick auf OK
    button.addEventListener("click", function() {
        // Musik starten beim ersten Klick
        if (music.paused) {
            music.volume = 0.5; // Lautstärke
            music.play();
        }

        // Code prüfen
        if (input.value === "5443") {
            message.style.color = "#00ff8c";
            message.textContent = "Du hast es geschafft!";
        } else {
            message.style.color = "#ff4444";
            message.textContent = "Falsches Passwort — versuch es nochmal.";
            input.value = "";
            input.focus();
        }
    });

    // Enter-Taste unterstützt
    input.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            button.click();
        }
    });
});
