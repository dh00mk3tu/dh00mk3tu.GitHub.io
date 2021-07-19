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
  let titles = ["Human", "Artist", "Shell Scripter", "Web Developer", "Flutter", "[redacted]", "Graphic Designer", "Reverse Engineer", "Programmer", "PHP", "React", "Human?", "Writer", "37-564?"];
  if (i == titles.length) {
    i = 0;
  }
  b.text(currentText => titles[i]).reveal(1000);
  i++;
}

setInterval(changeTitle, 3200);