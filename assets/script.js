import { loadComponent, initDarkMode, activateSidebar, initTableSearch } from '../utils/helpers.js';
import { initDashboardCharts } from '../charts/dashboardCharts.js';

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('header')) loadComponent('header', '/components/header.html');
  if (document.getElementById('sidebar')) loadComponent('sidebar', '/components/sidebar.html');
  if (document.getElementById('footer')) loadComponent('footer', '/components/footer.html');
  if (document.getElementById('modalPlaceholder')) loadComponent('modalPlaceholder', '/components/modal.html');

  initDarkMode();
  activateSidebar();

  if (document.getElementById('barChart')) initDashboardCharts();

  // Initialize search if elements exist
  initTableSearch('userTable', 'userSearch');
});
