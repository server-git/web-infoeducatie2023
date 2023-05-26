function moveCharacter() {
  var character = document.getElementById('popup-character');
  character.style.animation = 'moveCharacter 5s infinite';
}

function changeCharacterImage(imagePath) {
  var characterImage = document.getElementById('character-image');
  characterImage.src = imagePath;
}

setInterval(toggleCharacter, Math.random() * 0 + 500); 

function getRandomCorner() {
  var corners = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
  return corners[Math.floor(Math.random() * corners.length)];
}

function toggleCharacter() {
  var character = document.getElementById('popup-character');
  var showCharacter = Math.random() < 0.5;

  if (showCharacter) {
    var corner = getRandomCorner();
    character.classList.add('show', corner);
    moveCharacter();
  } else {
    character.classList.remove('show', 'top-left', 'top-right', 'bottom-left', 'bottom-right');
    character.style.animation = 'none';
  }
}
