let chartWithdrawValues = JSON.parse(localStorage.getItem('chartWithdrawValues'));
const ctx = document.getElementById('myChart');

console.log(chartWithdrawValues)
new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['ALL TIME TRANSACTIONS'],
      datasets: [{
        label: 'Deposits',
        data: [0],
        borderWidth: 2
      }, {
        label: 'Withdrawals',
        data: chartWithdrawValues,
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