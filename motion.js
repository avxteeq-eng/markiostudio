// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el);
});

// Parallax (subtle)
window.addEventListener('scroll', () => {
  document.querySelectorAll('.parallax').forEach(el => {
    el.style.transform = `translateY(${window.scrollY * 0.08}px)`;
  });
});
