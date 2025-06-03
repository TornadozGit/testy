import { loadComponent, initDarkMode, activateSidebar, initTableSearch } from '../utils/helpers.js';
import { initDashboardCharts } from '../charts/dashboardCharts.js';

document.addEventListener('DOMContentLoaded', () => {
  const base = location.pathname.includes('/pages/') ? '..' : '.';

  if (document.getElementById('header')) loadComponent('header', `${base}/components/header.html`);
  if (document.getElementById('sidebar')) loadComponent('sidebar', `${base}/components/sidebar.html`);
  if (document.getElementById('footer')) loadComponent('footer', `${base}/components/footer.html`);
  if (document.getElementById('modalPlaceholder')) loadComponent('modalPlaceholder', `${base}/components/modal.html`);

  initDarkMode();
  activateSidebar();

  if (document.getElementById('barChart')) initDashboardCharts();

  // Initialize search if elements exist
  initTableSearch('userTable', 'userSearch');
});
