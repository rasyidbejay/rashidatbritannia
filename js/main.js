// =============== THEME SWITCHER SCRIPT ===============
const themeToggleBtn = document.getElementById('theme-toggle');
const userPrefKey = 'britannia-theme';

// Get saved preference or system preference
function getPreferredTheme() {
  // Saved in localStorage
  const saved = localStorage.getItem(userPrefKey);
  if (saved === 'dark' || saved === 'light') return saved;
  // System default
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Set theme class on <body>
function setTheme(theme) {
  document.body.classList.remove('dark', 'light');
  document.body.classList.add(theme);
  // Update icon
  if (themeToggleBtn) {
    themeToggleBtn.textContent = (theme === 'dark') ? '🌞' : '🌙';
    themeToggleBtn.setAttribute('aria-label', (theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'));
  }
}

// Toggle between light/dark
function toggleTheme() {
  const newTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
  setTheme(newTheme);
  localStorage.setItem(userPrefKey, newTheme);
}

// Initialise theme on page load
document.addEventListener('DOMContentLoaded', () => {
  const preferred = getPreferredTheme();
  setTheme(preferred);
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }
});

// Optional: Listen to system theme changes in real-time
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  const saved = localStorage.getItem(userPrefKey);
  if (!saved) {
    setTheme(e.matches ? 'dark' : 'light');
  }
});

