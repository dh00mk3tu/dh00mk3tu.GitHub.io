particlesJS.load('particles-js', 'particle.json', function() {
  console.log('particles.js loaded - callback');
});

new Glider(document.querySelector('.glider'), {
  slidesToShow: 1,
  draggable: true,
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  }
});