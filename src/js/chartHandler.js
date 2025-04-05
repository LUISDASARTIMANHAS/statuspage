// chartHandler.js
import { getColorFromName } from "./helpers.js";

export const chartLabels = [];
export const chartData = {};
const maxDataPoints = 10;

let chart;

export function initChart(ctx) {
  chart = new Chart(ctx, {
    type: "line",
    data: { labels: [], datasets: [] },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: { y: { beginAtZero: true } },
    },
  });
}

export function updateChart() {
  chart.data.labels = chartLabels;
  chart.data.datasets = Object.keys(chartData).map((siteName) => ({
    label: siteName,
    data: chartData[siteName],
    borderColor: getColorFromName(siteName),
    borderWidth: 2,
    fill: false,
  }));
  chart.update();
}

export function addDataPoint(siteName, time, label) {
  if (!chartData[siteName]) chartData[siteName] = [];
  chartData[siteName].push(time);
  if (chartData[siteName].length > maxDataPoints) chartData[siteName].shift();

  if (
    chartLabels.length === 0 ||
    chartLabels[chartLabels.length - 1] !== label
  ) {
    chartLabels.push(label);
    if (chartLabels.length > maxDataPoints) chartLabels.shift();
  }
}
