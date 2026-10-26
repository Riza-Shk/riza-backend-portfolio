const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');

toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  toggle.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
  nav?.classList.toggle('open', !open);
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  toggle?.setAttribute('aria-expanded', 'false');
  toggle?.setAttribute('aria-label', 'Open navigation');
  nav.classList.remove('open');
}));

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const items = document.querySelectorAll('.project, .about-copy, .stack-row, .contact-inner');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, current) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      current.unobserve(entry.target);
    }
  }), { threshold: 0.12 });
  items.forEach((item) => { item.classList.add('reveal'); observer.observe(item); });
} else {
  items.forEach((item) => item.classList.add('visible'));
}
