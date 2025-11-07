// スムーススクロール（内部リンク用）
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;

  const href = link.getAttribute('href');
  if (!href || href === '#') return;

  const target = document.querySelector(href);
  if (!target) return;

  e.preventDefault();

  const offset = 70; // ヘッダー分
  const top = target.getBoundingClientRect().top + window.pageYOffset - offset;

  window.scrollTo({
    top,
    behavior: 'smooth'
  });
});

// Supportの多言語タブ
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
