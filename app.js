particlesJS.load('particles-js', 'particle.json', function() {
  console.log('particles.js loaded - callback');
});

let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll('.wrapper');

window.addEventListener('mousemove',cursor);

function cursor(e) {
  // console.log(e);
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
}

navLinks.forEach(link => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("cur-grow");
  });
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("cur-grow");
  });
});