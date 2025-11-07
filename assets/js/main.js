// ページ内リンクをスムーススクロールに
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.pageYOffset - 60;
    window.scrollTo({
      top,
      behavior: 'smooth'
    });
  });
});

// Supportページなどの言語タブ
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.tab-btn');
  if (!btn) return;

  const wrapper = btn.closest('[data-tab-wrapper]');
  if (!wrapper) return;

  const lang = btn.dataset.lang;
  if (!lang) return;

  wrapper.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.toggle('active', b === btn);
  });

  wrapper.querySelectorAll('.menu-lang').forEach(m => {
    m.classList.toggle('active', m.dataset.lang === lang);
  });
});
