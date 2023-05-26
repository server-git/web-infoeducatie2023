var titleElement = document.getElementById("animated-title");

var titles = ["The Holocaust", "A Tragic History", "Remembering the Victims"];

var currentTitleIndex = 0;
var titleDuration = 2000;

function updateTitle() {
  document.title = titles[currentTitleIndex];
  currentTitleIndex = (currentTitleIndex + 1) % titles.length;
}

setInterval(updateTitle, titleDuration);