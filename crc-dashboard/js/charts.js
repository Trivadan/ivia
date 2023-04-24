/* Pie chart */
function chartjsPieChartOne(selector) {
  var ctx = document.getElementById(selector);
  if (ctx) {
    ctx.getContext("2d");
    var chart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Download", "Open", "Not Open", "Review",],
        datasets: [{
          data: [5870, 4483, 2420, 1000],
          backgroundColor: ["#FF3A29", "#FFB200", "#4339F2", "#863AAC" ],
        }, ],
      },
      options: {
        maintainAspectRatio: true,
        responsive: true,
        legend: {
          display: true,
          position: "bottom",
          labels: {
            boxWidth: 6,
            display: true,
            usePointStyle: true,
          },
        },
        animation: {
          animateScale: true,
          animateRotate: true,
        },
      },
    });
  }
}
chartjsPieChartOne("mychart7");
