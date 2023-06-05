 const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["January","February", "March", "April", "May", "June","July", "August","September", "October","November", "December"],
      datasets: [{
        label: 'Deposits',
        data: [100, 200, 300, 500, 1000],
        borderWidth: 2
      }, {
        label: 'Withdrawals',
        data: [50, 75, 100, 200, 50],
        borderWidth: 2
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