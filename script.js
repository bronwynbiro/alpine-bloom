// Fade in header and menu title
window.addEventListener('load', () => {
    document.getElementById('page-header').classList.add('visible');
    document.getElementById('menu-title').classList.add('visible');
  });
  
  // Staggered fade in for cupcakes
  const cupcakes = document.querySelectorAll('.cupcake');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 200);
      }
    });
  }, { threshold: 0.2 });
  
  cupcakes.forEach(cupcake => observer.observe(cupcake));
  
// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });