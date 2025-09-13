<script>
(function () {
  const root = document.documentElement;
  const THEME_KEY = 'app_theme';

  function setTheme(mode) {
    if (mode === 'light') root.classList.add('light');
    else root.classList.remove('light');
    localStorage.setItem(THEME_KEY, mode);
  }

  // init theme
  const saved = localStorage.getItem(THEME_KEY) || 'dark';
  setTheme(saved);

  // toggle
  window.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.addEventListener('click', () => {
        const current = root.classList.contains('light') ? 'light' : 'dark';
        setTheme(current === 'light' ? 'dark' : 'light');
      });
    }
  });

  // helpers
  window.Utils = {
    clamp: (v, a, b) => Math.max(a, Math.min(b, v)),
    randInt: (a, b) => Math.floor(Math.random() * (b - a + 1)) + a,
    save: (k, v) => localStorage.setItem(k, JSON.stringify(v)),
    load: (k, d) => { try { const v = JSON.parse(localStorage.getItem(k)); return v ?? d; } catch { return d; } },
  };
})();
</script>
