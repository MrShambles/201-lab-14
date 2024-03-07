'use strict';

document.addEventListener('DOMContentLoaded', function() {
  renderChart();
});

function renderChart() {
  let canvasElem = document.getElementById('chart');
  appState.loadItems(); // Ensure we have the latest data

  let labels = appState.allProducts.map(product => product.name);
  let votes = appState.allProducts.map(product => product.timesClicked);
  let views = appState.allProducts.map(product => product.timesShown);

  new Chart(canvasElem, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Votes',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        data: votes
      }, {
        label: 'Views',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        data: views
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}
