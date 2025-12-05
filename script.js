const startButton = document.getElementById('startButton');
const startBox = document.getElementById('startBox');
const missionContainer = document.getElementById('missionContainer');

startButton.addEventListener('click', () => {
  // Startbox ausblenden
  startBox.style.display = 'none';
  
  // Mission Container einblenden
  missionContainer.classList.remove('hidden');
});
