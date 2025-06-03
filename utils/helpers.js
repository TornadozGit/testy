// Utility functions for Testy Admin
export function loadComponent(id, url) {
  fetch(url).then(r => r.text()).then(html => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  });
}

export function initDarkMode() {
  const toggle = document.getElementById('darkToggle');
  if (!toggle) return;
  const stored = localStorage.getItem('theme');
  if (stored === 'dark') {
    document.body.classList.add('theme-dark');
  }
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('theme-dark');
    localStorage.setItem('theme', document.body.classList.contains('theme-dark') ? 'dark' : 'light');
  });
}

export function activateSidebar() {
  const links = document.querySelectorAll('#sidebarMenu .nav-link');
  links.forEach(link => {
    if (link.href === location.href || link.getAttribute('href') === location.pathname) {
      link.classList.add('active');
    }
  });
}

export function initTableSearch(tableId, inputId) {
  const table = document.getElementById(tableId);
  const input = document.getElementById(inputId);
  if (!table || !input) return;
  input.addEventListener('keyup', () => {
    const filter = input.value.toLowerCase();
    Array.from(table.tBodies[0].rows).forEach(row => {
      row.style.display = row.textContent.toLowerCase().includes(filter) ? '' : 'none';
    });
  });
}
