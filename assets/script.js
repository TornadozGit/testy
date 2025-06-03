// Common functionality for Testy Admin
function loadComponent(id, url) {
  fetch(url).then(r => r.text()).then(html => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  });
}

function initDarkMode() {
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

function activateSidebar() {
  const links = document.querySelectorAll('#sidebarMenu .nav-link');
  links.forEach(link => {
    if (link.href === location.href || link.getAttribute('href') === location.pathname) {
      link.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('header')) loadComponent('header', '/components/header.html');
  if (document.getElementById('sidebar')) loadComponent('sidebar', '/components/sidebar.html');
  if (document.getElementById('footer')) loadComponent('footer', '/components/footer.html');

  initDarkMode();
  activateSidebar();

  const ctx = document.getElementById('sampleChart');
  if (ctx && window.Chart) {
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'Sample Data',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }
});
