window.addEventListener('scroll', function() {
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    const textHeight = document.querySelector('#presentation').offsetHeight;
    const fadeStart = textHeight - windowHeight;
    const opacity = Math.max(0, 1 - (scrollPosition - fadeStart) / (windowHeight / 0.8));
    document.querySelector('#presentation').style.opacity = opacity;
  });
  