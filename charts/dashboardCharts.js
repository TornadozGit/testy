// Chart initialization for Dashboard page
export function initDashboardCharts() {
  const barCtx = document.getElementById('barChart');
  if (barCtx && window.Chart) {
    new Chart(barCtx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Sales',
          data: [30, 40, 25, 50, 70, 60],
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: { responsive: true }
    });
  }

  const pieCtx = document.getElementById('pieChart');
  if (pieCtx && window.Chart) {
    new Chart(pieCtx, {
      type: 'pie',
      data: {
        labels: ['Completed', 'Pending', 'Cancelled'],
        datasets: [{
          data: [65, 20, 15],
          backgroundColor: ['#0d6efd', '#ffc107', '#dc3545']
        }]
      },
      options: { responsive: true }
    });
  }
}
