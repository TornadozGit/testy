export function initAnalyticsChart() {
  const ctx = document.getElementById('analyticsChart');
  if (ctx && window.Chart) {
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Visitors',
          data: [120, 150, 170, 140, 180, 160, 200],
          fill: false,
          borderColor: '#0d6efd'
        }]
      },
      options: { responsive: true }
    });
  }
}
