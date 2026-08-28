// ===== Scroll progress bar =====
const progress = document.getElementById('scrollProgress');
const updateProgress = () => {
  const h = document.documentElement;
  const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
  progress.style.width = scrolled + '%';
};
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

// ===== Nav scroll state =====
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

// ===== Mobile menu =====
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
const closeMenu = () => {
  toggle.classList.remove('open');
  links.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
};
toggle.addEventListener('click', () => {
  const open = toggle.classList.toggle('open');
  links.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

// Close on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && links.classList.contains('open')) closeMenu();
});
// Close on outside click
document.addEventListener('click', (e) => {
  if (!links.contains(e.target) && !toggle.contains(e.target) && links.classList.contains('open')) closeMenu();
});

// ===== Active link on scroll =====
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav__link');
const spy = () => {
  const pos = window.scrollY + 120;
  let current = '';
  sections.forEach(s => {
    if (pos >= s.offsetTop) current = s.id;
  });
  navLinkEls.forEach(l => {
    l.classList.toggle('active', l.getAttribute('href') === '#' + current);
  });
};
window.addEventListener('scroll', spy, { passive: true });
spy();

// ===== Reveal on scroll =====
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 60);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => io.observe(el));

// ===== Count up stats =====
const countEls = document.querySelectorAll('.hero__stat-num');
const animateCount = (el) => {
  const target = parseInt(el.dataset.count, 10);
  const duration = 1400;
  const start = performance.now();
  const step = (now) => {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(eased * target);
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};
const countIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { animateCount(e.target); countIO.unobserve(e.target); }
  });
}, { threshold: 0.5 });
countEls.forEach(el => countIO.observe(el));
