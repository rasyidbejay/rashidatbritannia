// Apple-style sun/moon toggle (dynamic SVG)
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  // Change SVG icon
  if (theme === 'dark') {
    themeIcon.innerHTML = `
      <circle cx="13" cy="13" r="8" fill="#6ccff6" stroke="#ec1a2e" stroke-width="2"/>
      <circle cx="13" cy="13" r="6" fill="#111" stroke="#6ccff6" stroke-width="2"/>
      <path d="M13 5v-2m0 20v-2m8-8h-2m-12 0h-2m14.14-7.14l-1.42 1.42m-9.9 9.9l-1.42 1.42m0-11.32l1.42 1.42m9.9 9.9l1.42 1.42" stroke="#6ccff6" stroke-width="1.6"/>
    `;
  } else {
    themeIcon.innerHTML = `
      <circle cx="13" cy="13" r="8" fill="#ec1a2e" stroke="#6ccff6" stroke-width="2"/>
      <circle cx="13" cy="13" r="4.5" fill="#fff" stroke="#6ccff6" stroke-width="1.2"/>
      <path d="M13 5v-2m0 20v-2m8-8h-2m-12 0h-2" stroke="#6ccff6" stroke-width="1.4"/>
    `;
  }
  localStorage.setItem('theme', theme);
}

// Initial load
let theme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
setTheme(theme);

// Toggle on click
themeToggle.onclick = () => {
  theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  setTheme(theme);
};

// Scroll active nav
const navLinks = document.querySelectorAll('.nav-links a');
const sections = ['about', 'why', 'courses', 'success', 'contact'].map(id => document.getElementById(id));
window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + 120;
  navLinks.forEach(link => link.classList.remove('active'));
  for (let i = 0; i < sections.length; i++) {
    let sec = sections[i];
    if (sec && sec.offsetTop <= scrollPos && sec.offsetTop + sec.offsetHeight > scrollPos) {
      navLinks[i].classList.add('active');
    }
  }
});

// Contact Form: fake submit effect
document.querySelector('.contact-form').onsubmit = e => {
  e.preventDefault();
  let btn = e.target.querySelector('button');
  btn.disabled = true;
  btn.textContent = 'Sent!';
  setTimeout(() => {
    btn.disabled = false;
    btn.textContent = 'Send Message';
    e.target.reset();
  }, 1500);
};
