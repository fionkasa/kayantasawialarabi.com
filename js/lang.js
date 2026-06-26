(function () {
  var STORAGE_KEY = 'kta-lang';
  var html = document.documentElement;

  function applyLang(lang) {
    if (lang === 'en') {
      html.setAttribute('lang', 'en');
      html.setAttribute('dir', 'ltr');
    } else {
      html.setAttribute('lang', 'ar');
      html.setAttribute('dir', 'rtl');
    }
    updateToggleLabel(lang);
  }

  function updateToggleLabel(lang) {
    var btn = document.getElementById('lang-toggle');
    if (!btn) return;
    btn.textContent = lang === 'en' ? 'عربي' : 'EN';
    btn.setAttribute('aria-label', lang === 'en' ? 'التبديل إلى العربية' : 'Switch to English');
  }

  function toggle() {
    var current = html.getAttribute('lang') === 'en' ? 'en' : 'ar';
    var next = current === 'en' ? 'ar' : 'en';
    applyLang(next);
    try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
  }

  function init() {
    var saved;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    applyLang(saved === 'en' ? 'en' : 'ar');

    var btn = document.getElementById('lang-toggle');
    if (btn) btn.addEventListener('click', toggle);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}());
