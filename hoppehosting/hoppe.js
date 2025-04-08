import { fetchStatus } from "../src/js/fetchStatus.js";
import { createChart, updateChart } from "../src/js/chartUtils.js";
import { updateTable } from "../src/js/render.js";

document.addEventListener("DOMContentLoaded", () => {
	const ctx = document.getElementById("statusChart").getContext("2d");
	window.statusChart = createChart(ctx);

	const chartData = {};
	const chartLabels = [];
	const maxDataPoints = 10;

	const intervalSeconds = 60;
	let secondsLeft = intervalSeconds;

	const countdownText = document.getElementById("countdown");

	function startCountdown() {
		countdownText.textContent = `${secondsLeft}s`;

		const interval = setInterval(() => {
			secondsLeft--;
			if (secondsLeft <= 0) {
				clearInterval(interval);
				refresh(); // faz o fetch
			} else {
				countdownText.textContent = `${secondsLeft}s`;
			}
		}, 1000);
	}

	function refresh() {
		fetchStatus(
			updateTable,
			updateChart,
			chartData,
			chartLabels,
			maxDataPoints,
			"hoppehosting"
		);
		secondsLeft = intervalSeconds;
		startCountdown();
	}

	refresh();
});
