// countdown.js
import { fetchStatus } from "./fetchStatus.js";

let intervalId;
let countdown = 30;
let updateInterval = 30;

export function startCountdown() {
	const display = document.getElementById("countdown");
	clearInterval(intervalId);
	intervalId = setInterval(() => {
		countdown--;
		if (countdown <= 0) {
			fetchStatus();
			countdown = updateInterval;
		}
		display.textContent = countdown;
	}, 1000);
}

export function applyNewInterval() {
	const inputTime = parseInt(document.getElementById("updateTime").value, 10);
	if (isNaN(inputTime) || inputTime < 20) {
		alert("O tempo mínimo de atualização é 20 segundos.");
		return;
	}
	updateInterval = inputTime;
	countdown = updateInterval;
	startCountdown();
	fetchStatus();
}