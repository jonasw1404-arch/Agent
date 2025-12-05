document.addEventListener("DOMContentLoaded", function() {
    const startScreen = document.getElementById("startScreen");
    const startButton = document.getElementById("startButton");
    const mainContainer = document.getElementById("mainContainer");
    const music = document.getElementById("backgroundMusic");
    const submitButton = document.getElementById("submitCodes");
    const feedback = document.getElementById("feedback");
    const codeInputs = document.querySelectorAll(".codeInput");

    // Startscreen Button
    startButton.addEventListener("click", function() {
        startScreen.style.display = "none";
        mainContainer.style.display = "block";
        music.volume = 0.5;
        music.play();
    });

    // Codeprüfung
    submitButton.addEventListener("click", function() {
        let allCorrect = true;
        let feedbackMessages = [];

        codeInputs.forEach((input, index) => {
            const correctCode = input.dataset.code;
            if (input.value === correctCode) {
                feedbackMessages.push(`Rätsel ${index+1}: Bestätigung erhalten. Sektor erfolgreich entschlüsselt.`);
            } else {
                // Zufällige falsche Nachricht
                const errorMsg = Math.random() < 0.5 ?
                    "FEHLER – Übertragung ungenau. Prüfen Sie den Standort erneut, Agent." :
                    "Codesequenz ungültig. Die Zentrale fordert Präzision.";
                feedbackMessages.push(`Rätsel ${index+1}: ${errorMsg}`);
                allCorrect = false;
            }
        });

        feedback.innerHTML = feedbackMessages.join("<br>");

        if (allCorrect) {
            feedback.innerHTML += "<br><br>Alle Fragmente erfolgreich entschlüsselt.<br>Komplettes Manhattan-Profil rekonstruiert.<br><br>PROJECT MANHATTAN ECHO — ABSCHLUSSKODE ENTSCHLÜSSELT<br>Agent, Sie haben herausragende Arbeit geleistet.<br>Mit der Aktivierung aller fünf Datenknoten wurde der verschlüsselte Identitätsanhang freigeschaltet.<br>INITIATING IDENTITY REVEAL… Standby… Dekodierung abgeschlossen.<br>Der Auftraggeber war: Karl Klein<br>Ende der Übertragung.<br>Dieses Terminal schließt sich in 10 Sekunden automatisch.";

            setTimeout(() => {
                alert("Terminal schließt.");
                window.close();
            }, 10000);
        }
    });
});
