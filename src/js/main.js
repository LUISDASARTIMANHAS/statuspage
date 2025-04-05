// main.js
import { initChart } from "./chartHandler.js";
import { fetchStatus } from "./fetchStatus.js";
import { startCountdown, applyNewInterval } from "./countdown.js";

document.addEventListener("DOMContentLoaded", () => {
	const ctx = document.getElementById("statusChart").getContext("2d");
	initChart(ctx);
	startCountdown();
	fetchStatus();

	// Tornar função acessível no botão HTML
	window.updateIntervalTime = applyNewInterval;
});
