export function createChart(ctx) {
  return new Chart(ctx, {
    type: "line",
    data: { labels: [], datasets: [] },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: { y: { beginAtZero: true } },
    },
  });
}

export function updateChart(chartData, chartLabels) {
  const chart = window.statusChart;
  chart.data.labels = chartLabels;
  chart.data.datasets = Object.keys(chartData).map((name) => ({
    label: name,
    data: chartData[name],
    borderColor: getColorFromName(name),
    borderWidth: 2,
    fill: false,
  }));
  chart.update();
}

function getColorFromName(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const r = (hash >> 16) & 255;
  const g = (hash >> 8) & 255;
  const b = hash & 255;
  return `rgb(${r}, ${g}, ${b})`;
}
