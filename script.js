const startButton = document.getElementById('startButton');
const startBox = document.getElementById('startBox');
const missionContainer = document.getElementById('missionContainer');
const raetselContainer = document.getElementById('raetselContainer');

// Richtige Codes für die Rätsel
const correctCodes = ["1234", "5678", "9012", "3456", "7890"];

// Startbutton klick
startButton.addEventListener('click', () => {
  startBox.style.display = 'none';
  missionContainer.style.display = 'flex';
  raetselContainer.style.display = 'flex';
});

// Prüfen der Eingaben
const checkButtons = document.querySelectorAll('.checkButton');

checkButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const input = button.previousElementSibling.value;
    const resultText = button.nextElementSibling;

    if(input === correctCodes[index]) {
      resultText.textContent = "✅ Richtig!";
      resultText.style.color = "lightgreen";
    } else {
      resultText.textContent = "❌ Falsch!";
      resultText.style.color = "red";
    }
  });
});
