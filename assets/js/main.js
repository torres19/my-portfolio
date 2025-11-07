// ==================================================
// Basic Interactions
// ==================================================

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 40,
        behavior: 'smooth'
      });
    }
  });
});

// ==================================================
// Language Tabs (Support Page)
// ==================================================
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.tab-btn');
  if (!btn) return;

  const wrapper = btn.closest('[data-tab-wrapper]');
  if (!wrapper) return;

  const lang = btn.dataset.lang;

  wrapper.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.toggle('active', b === btn);
  });

  wrapper.querySelectorAll('.menu-lang').forEach(m => {
    m.classList.toggle('active', m.dataset.lang === lang);
  });
});
