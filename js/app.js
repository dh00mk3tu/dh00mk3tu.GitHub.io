particlesJS.load('particles-js', 'particle.json', function() {
  console.log('particles.js loaded - callback');
});


//Shuffle 2
const b = baffle(".title-sub");
b.set({
  characters: '█<▓ ░█▒█▒ ░▒/░█ ▓▒▓ █/██▒ █▓█/ █▒█ ░█▒█ ▓░█▒',
  speed: 120
});

var i = 1;
let changeTitle = () => {
  let titles = ["Human", "Painter", "Shell Scripter", "Web Developer", "Reverse Engineer", "Programmer", "Artist", "Human?", "Writer", "37-564?"];
  if (i == titles.length) {
    i = 0;
  }
  b.text(currentText => titles[i]).reveal(1000);
  i++;
}

setInterval(changeTitle, 3200);