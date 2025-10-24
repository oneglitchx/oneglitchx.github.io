document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Background component integration helper. Mounts into #background-root.
window.mountBackgroundComponent = function mountBackgroundComponent(initializer) {
  var rootEl = document.getElementById('background-root');
  if (!rootEl || typeof initializer !== 'function') {
    return;
  }
  try {
    rootEl.innerHTML = '';
    initializer(rootEl);
  } catch (error) {
    console.error('Background component failed to mount:', error);
  }
};