const ctx = document.getElementById('chart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Being a cool person', 'Photography', 'Programming', 'Cooking', 'Journaling'],
      datasets: [{
        label: 'level out of 100%',
        data: [100, 90, 5, 85, 50],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
