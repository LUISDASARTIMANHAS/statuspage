// fetchStatus.js
import { addDataPoint, updateChart, chartLabels } from "./chartHandler.js";

const apiUrl = "https://pingobras-sg.glitch.me/serverstatus";

export async function fetchStatus() {
  const statusTable = document.getElementById("statusTable");
  const lastUpdated = document.getElementById("lastUpdated");

  statusTable.innerHTML = `<tr><td colspan="4" class="updating">Atualizando...</td></tr>`;
  lastUpdated.textContent = "Atualizando...";

  try {
    const response = await fetch(apiUrl, { cache: "no-store" });
    if (!response.ok)
      throw new Error(`Erro ${response.status}: ${response.statusText}`);
    const data = await response.json();

    const now = new Date();
    const timeLabel = now.toLocaleTimeString();
    chartLabels.push(timeLabel);

    statusTable.innerHTML = "";

    data.forEach((site) => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = site.name;
      row.appendChild(nameCell);

      const urlCell = document.createElement("td");
      const urlLink = document.createElement("a");
      urlLink.href = site.url;
      urlLink.target = "_blank";
      urlLink.textContent = site.url;
      urlCell.appendChild(urlLink);
      row.appendChild(urlCell);

      const statusCell = document.createElement("td");
      if (site.status === "online") {
        statusCell.textContent = "🟢 Online";
        statusCell.className = "online";
      } else {
        statusCell.textContent = "🔴 Offline";
        statusCell.className = "offline";
      }
      row.appendChild(statusCell);

      const timeCell = document.createElement("td");
      if (site.status === "online") {
        timeCell.textContent = `${site.time} ms`;
        addDataPoint(site.name, site.time, timeLabel);
      } else {
        timeCell.textContent = site.error || "Erro desconhecido";
        timeCell.className = "error";
      }
      row.appendChild(timeCell);

      statusTable.appendChild(row);
    });

    lastUpdated.textContent = `Última atualização: ${now.toLocaleTimeString()}`;
    updateChart();
  } catch (err) {
    console.error("Erro:", err);
    statusTable.innerHTML = `<tr><td colspan="4" class="error">Erro: ${err}</td></tr>`;
    lastUpdated.textContent = "Erro ao atualizar.";
  }
}
